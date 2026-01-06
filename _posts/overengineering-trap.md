---
title: "The overengineering trap"
date: "2026-02-05"
tag: "notes"
excerpt: "Three similar lines is better than a premature abstraction. A short note on when to stop refactoring."
---

I spent two hours yesterday turning three similar functions into one configurable function. Then I spent three hours debugging the configurable function. Then I deleted it and kept the three.

## The rule I've settled on

If I see three similar things, I leave them alone. Five, I might extract. The cost of a bad abstraction is higher than the cost of a little duplication, because duplication is local and abstractions are viral.

## What "viral" means here

Once a helper exists, every new caller has to either fit its shape or fight it. The shape encodes assumptions about today's three callers — assumptions that the fourth caller will quietly violate. By the time you notice, the helper has six special cases bolted onto it.

Three lines, repeated, can be edited independently. That optionality is worth more than the line count.
