import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getWritings } from "app/writing/utils";
import { baseUrl } from "app/sitemap";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getWritings();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getWritings().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/writing/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Writing({ params }) {
  const { slug } = await params;
  let post = getWritings().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-16">
      <Link
        href="/writing"
        className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        ← All writings
      </Link>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/writing/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter mb-2">
        {post.metadata.title}
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        {formatDate(post.metadata.publishedAt)}
      </p>
      <hr className="border-neutral-200 dark:border-neutral-800 mb-8" />
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
