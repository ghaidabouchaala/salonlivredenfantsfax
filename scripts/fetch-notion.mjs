import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error("Error: NOTION_TOKEN and NOTION_DATABASE_ID must be set in .env");
  process.exit(1);
}

const NOTION_VERSION = "2022-06-28";

async function notionFetch(path, options = {}) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Notion API ${res.status}: ${path}`);
  }
  return res.json();
}

function transformRichText(richText) {
  if (!richText || !Array.isArray(richText)) return [];
  return richText.map((rt) => ({
    text: rt.plain_text || "",
    bold: rt.annotations?.bold || false,
    italic: rt.annotations?.italic || false,
    code: rt.annotations?.code || false,
    strikethrough: rt.annotations?.strikethrough || false,
    link: rt.href || null,
  }));
}

function transformBlocks(rawBlocks) {
  const result = [];
  let i = 0;

  while (i < rawBlocks.length) {
    const block = rawBlocks[i];
    const { type } = block;

    if (type === "bulleted_list_item") {
      const items = [];
      while (i < rawBlocks.length && rawBlocks[i].type === "bulleted_list_item") {
        items.push(transformRichText(rawBlocks[i].bulleted_list_item.rich_text));
        i++;
      }
      result.push({ type: "bulleted_list", items });
      continue;
    }

    if (type === "numbered_list_item") {
      const items = [];
      while (i < rawBlocks.length && rawBlocks[i].type === "numbered_list_item") {
        items.push(transformRichText(rawBlocks[i].numbered_list_item.rich_text));
        i++;
      }
      result.push({ type: "numbered_list", items });
      continue;
    }

    switch (type) {
      case "paragraph":
        result.push({ type: "paragraph", children: transformRichText(block.paragraph.rich_text) });
        break;
      case "heading_1":
        result.push({ type: "heading_1", children: transformRichText(block.heading_1.rich_text) });
        break;
      case "heading_2":
        result.push({ type: "heading_2", children: transformRichText(block.heading_2.rich_text) });
        break;
      case "heading_3":
        result.push({ type: "heading_3", children: transformRichText(block.heading_3.rich_text) });
        break;
      case "quote":
        result.push({ type: "quote", children: transformRichText(block.quote.rich_text) });
        break;
      case "code": {
        const codeText = (block.code.rich_text || []).map((rt) => rt.plain_text).join("");
        result.push({ type: "code", language: block.code.language || "plain text", code: codeText });
        break;
      }
      case "image": {
        const imageUrl =
          block.image.type === "external"
            ? block.image.external?.url || ""
            : block.image.file?.url || "";
        const caption = (block.image.caption || []).map((rt) => rt.plain_text).join("");
        result.push({ type: "image", url: imageUrl, caption });
        break;
      }
      case "divider":
        result.push({ type: "divider" });
        break;
    }

    i++;
  }

  return result;
}

async function fetchAllBlocks(blockId) {
  const blocks = [];
  let cursor;

  do {
    const qs = cursor ? `?start_cursor=${cursor}` : "";
    const data = await notionFetch(`/blocks/${blockId}/children${qs}`);
    blocks.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

async function fetchAllPages() {
  const pages = [];
  let cursor;

  do {
    const body = {
      filter: { property: "Status", select: { equals: "Published" } },
      sorts: [{ property: "Published Date", direction: "descending" }],
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    };

    const data = await notionFetch(`/databases/${NOTION_DATABASE_ID}/query`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    pages.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return pages;
}

async function main() {
  console.log("Fetching published blog posts from Notion...");

  const pages = await fetchAllPages();
  console.log(`Found ${pages.length} published post(s).`);

  const posts = [];

  for (const page of pages) {
    const props = page.properties;

    const title = props.Name?.title?.[0]?.plain_text || "";
    const slug = props.Slug?.rich_text?.[0]?.plain_text || "";

    if (!slug) {
      console.warn(`  Skipping "${title || page.id}" — no Slug defined`);
      continue;
    }

    const coverFiles = props["Cover Image"]?.files || [];
    let coverImage = "";
    if (coverFiles.length > 0) {
      const f = coverFiles[0];
      coverImage = f.type === "external" ? f.external?.url || "" : f.file?.url || "";
    }
    if (!coverImage && page.cover) {
      coverImage =
        page.cover.type === "external"
          ? page.cover.external?.url || ""
          : page.cover.file?.url || "";
    }

    const post = {
      id: page.id,
      slug,
      title,
      author: props.Author?.rich_text?.[0]?.plain_text || "",
      date: props["Published Date"]?.date?.start || "",
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || "",
      category: (props.Category?.select?.name || "").toLowerCase(),
      coverImage,
      sourceLanguage: props["Source Language"]?.select?.name || "French",
      blocks: [],
    };

    console.log(`  → Fetching blocks for: "${title}"`);
    const rawBlocks = await fetchAllBlocks(page.id);
    post.blocks = transformBlocks(rawBlocks);
    console.log(`    ${post.blocks.length} block(s) processed`);

    posts.push(post);
  }

  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const outputPath = `${scriptDir}/../src/data/blog-posts.json`;
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(posts, null, 2), "utf-8");

  console.log(`\nDone! Wrote ${posts.length} post(s) to src/data/blog-posts.json`);
}

main().catch((err) => {
  console.error("Notion fetch failed:", err.message || err);
  process.exit(1);
});
