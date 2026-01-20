---
title: "Block and Inline"
module: 6
module_title: "CSS Fundamentals"
order: 26
estimated_time: "25 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Flow Control: Block vs. Inline Elements

How do elements behave on the page by default? That's determined by their `display` property: **block** or **inline**. Understanding this is key to predictable layout.
</div>

<div class="lesson-block" markdown="1">
### Block Elements: Full Width, New Lines

- Default `display: block;`
- Take up the **full available width**.
- Always start on a **new line**.
- Respect `width`, `height`, `margin`, and `padding` on all sides.

- **Common Examples:** `<div>`, `<h1>`-`<h6>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<form>`, `<section>`, `<article>`
</div>

<div class="lesson-block" markdown="1">
### Inline Elements: In the Flow

- Default `display: inline;`
- Only take up **as much width as their content needs**.
- Do **not** start on a new line; they flow alongside other inline elements.
- `width` and `height` properties **do not apply**.
- `margin` and `padding` only apply horizontally (left/right). Vertical `margin`/`padding` (top/bottom) are ignored or behave unexpectedly.

- **Common Examples:** `<a>`, `<span>`, `<strong>`, `<em>`, `<img>` (note: images are a bit special, often treated like `inline-block`)
</div>

<div class="lesson-block" markdown="1">
### The Hybrid: Inline-Block

- `display: inline-block;`
- Behaves like an inline element in that it flows with text and doesn't force a new line.
- BUT, it behaves like a block element regarding `width`, `height`, `margin`, and `padding` on all sides.
- A useful middle ground, but often flexbox (coming later) is a more powerful tool for complex layouts.
</div>

<div class="lesson-block" markdown="1">
### Generic Containers: `<div>` and `<span>`

These are your versatile, context-free boxes:

- **`<div>`**: A **block-level** container. Use it to group other elements for structural purposes, layout, or targeted styling. It *divides* your page.
- **`<span>`**: An **inline-level** container. Use it to apply styles to a small piece of text or an inline element without disrupting the flow. It's a generic *span* of content.
</div>

<div class="lesson-block" markdown="1">
### Normal Flow

This is the default way elements are arranged on a page based on their HTML order and block/inline display types. We manipulate this flow with CSS, but understanding the default is the first step.
</div>
