import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export const generateStaticParams = () =>
  getAllPosts().map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — brinzl.dev`, description: post.excerpt };
  } catch {
    return {};
  }
};

export default async function Writing({ params }: Params) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const html = await renderMarkdown(post.content);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <p>
          <time dateTime={post.date}>{date}</time> · {post.tag}
        </p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
