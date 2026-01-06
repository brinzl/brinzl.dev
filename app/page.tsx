import { Writings } from "app/components/posts";
import { Age } from "app/components/age";

export default function Page() {
  return (
    <section className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-normal mb-1 tracking-tight">
          Brinsil Elias
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Hobbysit developer / Tinkerer
        </p>
      </div>

      <div className="mb-12 space-y-6 text-neutral-800 dark:text-neutral-200 leading-relaxed">
        <p>
          I'm just a regular <Age /> year old guy from a small town in India who
          happens to like computers a bit too much.
        </p>

        <p>
          I've been tinkering with computers for longer than I probably should
          admit. I'm the kind of person who spends an unreasonable amount of
          time configuring text editors and debating tabs vs spaces. At some
          point I realized I enjoy writing and talking about this stuff, so here
          we are.
        </p>

        <p>
          Building things, breaking things, occasionally fixing them. Sometimes
          I write about it.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-normal mb-6">
          Some of my writings that I really like
        </h2>
        <Writings />
      </div>

      <div>
        <p>
          You can find all my{" "}
          <a
            href="/writing"
            className="underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            writings
          </a>{" "}
          or my{" "}
          <a
            href="https://github.com/brinsil"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            code
          </a>
        </p>
      </div>
    </section>
  );
}
