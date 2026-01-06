import { Writings } from "app/components/posts";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Read my writing.",
};

export default function Page() {
  return (
    <section className="py-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        ← Home
      </Link>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <Writings />
    </section>
  );
}
