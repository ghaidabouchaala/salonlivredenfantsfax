import React from "react";
import type { ContentBlock, RichTextItem } from "./blog-types";

function RichTextSpan({ item }: { item: RichTextItem }) {
  if (item.code) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-muted text-accent font-mono text-[0.875em]">
        {item.text}
      </code>
    );
  }

  let content: React.ReactNode = item.text;
  if (item.bold) content = <strong>{content}</strong>;
  if (item.italic) content = <em>{content}</em>;
  if (item.strikethrough) content = <del>{content}</del>;
  if (item.link) {
    content = (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline underline-offset-2 hover:text-secondary/80"
      >
        {content}
      </a>
    );
  }

  return <>{content}</>;
}

function RichTextContent({ items }: { items: RichTextItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      {items.map((item, i) => (
        <RichTextSpan key={i} item={item} />
      ))}
    </>
  );
}

export function NotionRenderer({
  blocks,
  isRTL,
}: {
  blocks: ContentBlock[];
  isRTL?: boolean;
}) {
  const arabicClass = isRTL ? "font-[Noto_Naskh_Arabic,Amiri,serif]" : "";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`space-y-5 ${arabicClass}`}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading_1":
            return (
              <h1
                key={i}
                className="font-heading text-3xl font-bold text-foreground mt-10 mb-4 first:mt-0"
              >
                <RichTextContent items={block.children} />
              </h1>
            );
          case "heading_2":
            return (
              <h2
                key={i}
                className="font-heading text-2xl font-bold text-foreground mt-8 mb-3 first:mt-0"
              >
                <RichTextContent items={block.children} />
              </h2>
            );
          case "heading_3":
            return (
              <h3
                key={i}
                className="font-heading text-xl font-semibold text-foreground mt-6 mb-2 first:mt-0"
              >
                <RichTextContent items={block.children} />
              </h3>
            );
          case "paragraph": {
            const isEmpty = !block.children || block.children.every((c) => !c.text);
            if (isEmpty) return <div key={i} className="h-3" />;
            return (
              <p key={i} className="text-foreground/80 leading-relaxed">
                <RichTextContent items={block.children} />
              </p>
            );
          }
          case "bulleted_list":
            return (
              <ul key={i} className="list-disc list-inside space-y-1.5 text-foreground/80 ps-2">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    <RichTextContent items={item} />
                  </li>
                ))}
              </ul>
            );
          case "numbered_list":
            return (
              <ol key={i} className="list-decimal list-inside space-y-1.5 text-foreground/80 ps-2">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    <RichTextContent items={item} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-s-4 border-secondary ps-6 py-2 my-6"
              >
                <p className="font-heading text-lg italic text-foreground">
                  <RichTextContent items={block.children} />
                </p>
              </blockquote>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <img
                  src={block.url}
                  alt={block.caption}
                  className="rounded-xl w-full object-cover max-h-[500px]"
                  loading="lazy"
                />
                {block.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground mt-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "code":
            return (
              <pre
                key={i}
                className="bg-muted rounded-xl p-5 overflow-x-auto my-4 border border-border"
              >
                <code className="text-sm font-mono text-foreground">{block.code}</code>
              </pre>
            );
          case "divider":
            return <hr key={i} className="border-border my-8" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
