---
title: "Saving 200kb with one font swap"
date: "2026-04-15"
tag: "performance"
excerpt: "I shaved 200kb off my homepage by replacing one webfont. The lesson wasn't about fonts."
---

I shaved 200kb off my homepage by replacing one webfont. The lesson wasn't about fonts — it was about defaults.

## The audit

Lighthouse flagged my landing page at 412kb. I was loading three weights of a custom display font for two headings. The variable font I switched to ships every weight in 38kb.

```ts
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
```

That's the whole change.

## The lesson

I'd been carrying that font for two years because I added it during a redesign and never revisited. Defaults stick. Audit them.
