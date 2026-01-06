import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";

export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "_posts");

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getPostBySlug(f.replace(/\.md$/, "")))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  return { slug, content, ...data } as Post;
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, { theme: "vitesse-dark" })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}
