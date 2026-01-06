export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Brinsil Elias</p>
        <a
          href="https://github.com/brinsil"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
