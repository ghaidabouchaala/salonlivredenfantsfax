import rawPosts from "@/data/blog-posts.json";
import type { BlogPost } from "./blog-types";

export const blogPosts = rawPosts as BlogPost[];
