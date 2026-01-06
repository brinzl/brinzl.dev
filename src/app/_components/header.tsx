import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <p>
            Brinsil Elias Saju
            <span className="cursor" aria-hidden="true" />
          </p>
          <p>Hobbyist</p>
          <p>2026</p>
        </div>
        <nav>
          <Link href="/">[ ~/ ]</Link>
          <Link href="/writings">[ ~/writings ]</Link>
          <Link href="/projects">[ ~/projects ]</Link>
        </nav>
      </header>
    </>
  );
};
