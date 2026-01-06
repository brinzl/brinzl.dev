import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <p aria-hidden="true">–––</p>
      <p>
        <Link href="#">Github</Link>
        {" | "}
        <Link href="#">Linkedin</Link>
        {" | "}
        <a href="#" rel="noopener noreferrer">
          bsky
        </a>
        {" | "}
        <a href="#" rel="noopener noreferrer">
          X
        </a>
      </p>
      <p>© 2026 Brinsil Elias Saju.</p>
    </footer>
  );
};
