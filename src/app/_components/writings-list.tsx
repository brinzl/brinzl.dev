import Link from "next/link";

import { getAllPosts } from "@/lib/posts";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = String(d.getUTCDate()).padStart(2, "0");
  const year = d.getUTCFullYear();
  return `[${month}.${day}.${year}]`;
};

export const WritingsList = () => {
  const posts = getAllPosts();
  return (
    <ul role="list">
      {posts.map((p) => (
        <li key={p.slug}>
          <time dateTime={p.date}>{formatDate(p.date)}</time>
          <Link href={`/writings/${p.slug}`}>{p.title}</Link>
          <span aria-hidden="true" />
          <span>{p.tag}</span>
        </li>
      ))}
    </ul>
  );
};
