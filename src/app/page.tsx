import Link from "next/link";

import { WritingsList } from "@/app/_components/writings-list";

export default function Home() {
  return (
    <>
      <section>
        <h2>About</h2>
        <p>
          I&apos;m Brinsil. I&apos;m a web developer who cares more about how a
          page feels than how it looks — load times, time-to-paint, the small
          stuff. I&apos;d rather ship something fast and a little plain than
          something pretty and slow.
        </p>
        <p>
          When I&apos;m not writing code, I&apos;m usually reading other
          people&apos;s changelogs, deleting dependencies from my own projects,
          or trying to figure out how to do more with less.
        </p>
        <p>
          You can read{" "}
          <Link href="/writings">everything I&apos;ve written</Link> or browse{" "}
          <Link href="/projects">the things I&apos;ve built</Link>. If you want
          to say hi, my socials are at the bottom of the page.
        </p>
      </section>

      <section>
        <h2>Recent writings</h2>
        <WritingsList />
      </section>
    </>
  );
}
