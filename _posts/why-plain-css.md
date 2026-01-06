---
title: "Why I went back to plain CSS"
date: "2026-04-28"
tag: "css"
excerpt: "After years of Tailwind, CSS-in-JS, and every styling trend in between, I went back to plain CSS. Here's why."
---

After years of Tailwind, CSS-in-JS, and every styling trend in between, I went back to plain CSS. The browser got better. The tooling got worse.

## The browser caught up

Modern CSS does everything I used to reach for libraries to do. Nesting, container queries, `:has()`, cascade layers, custom properties — all native, all shipped.

```css
article {
  & h2 {
    color: var(--color-fg);
  }

  &:has(> img) {
    padding-block: var(--space-6);
  }
}
```

No build step. No runtime. No framework upgrade path.

## What I gave up

Honestly? Not much. The thing I miss most is colocated styles, but `<style>` tags in components handle that fine when I want it. The thing I don't miss: deleting 200KB of utility classes from my bundle.
