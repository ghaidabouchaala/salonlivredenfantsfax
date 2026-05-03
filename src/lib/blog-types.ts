export type RichTextItem = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  link?: string | null;
};

export type ContentBlock =
  | { type: "paragraph"; children: RichTextItem[] }
  | { type: "heading_1"; children: RichTextItem[] }
  | { type: "heading_2"; children: RichTextItem[] }
  | { type: "heading_3"; children: RichTextItem[] }
  | { type: "bulleted_list"; items: RichTextItem[][] }
  | { type: "numbered_list"; items: RichTextItem[][] }
  | { type: "quote"; children: RichTextItem[] }
  | { type: "image"; url: string; caption: string }
  | { type: "code"; language: string; code: string }
  | { type: "divider" };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  coverImage: string;
  sourceLanguage: "French" | "Arabic" | "English";
  blocks: ContentBlock[];
};
