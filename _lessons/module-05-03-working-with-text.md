---
title: "Working with Text"
module: 5
module_title: "HTML Essentials"
order: 19
estimated_time: "30 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Crafting Content: Paragraphs, Headings, and Emphasis

Most of the web is text. This lesson covers the essential HTML elements for structuring and emphasizing textual content.
</div>

<div class="lesson-block" markdown="1">
### What You'll Master

- **Paragraphs:** Creating distinct blocks of text.
- **Headings:** Structuring your content hierarchy.
- **Emphasis:** Making text bold (`<strong>`) and italic (`<em>`).
- **Nesting:** Understanding parent-child relationships.
- **Comments:** Leaving notes in your code.
</div>

<div class="lesson-block" markdown="1">
### Essential Text Elements

#### Paragraphs (`<p>`)

Browsers ignore new lines in HTML. To create separate paragraphs, wrap your text in `<p>` tags.

```html
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

#### Headings (`<h1>` to `<h6>`)

Headings define the structure and importance of your content. `<h1>` is the main heading, with `<h6>` being the least important. Use them logically to build a clear content hierarchy.

```html
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

#### Bold and Important Text (`<strong>`)

Use `<strong>` to wrap text that is semantically **important**. This makes it bold and signals its significance to browsers and screen readers.

```html
<p>This is a normal paragraph, but <strong>this word is very important</strong>.</p>
```

#### Italicized and Emphasized Text (`<em>`)

Use `<em>` to add *emphasis* to text. This can affect screen reader tone and visually italicizes the text.

```html
<p>This is a normal sentence, but <em>this part is emphasized</em>.</p>
```
</div>

<div class="lesson-block" markdown="1">
### Nesting and Indentation

Elements can be placed inside other elements. The outer element is the **parent**, and the inner ones are **children**. Sibling elements are at the same nesting level. Indentation makes this structure clear and readable – use it consistently (e.g., two spaces per level).

```html
<body>
  <p>This is a paragraph (child of body).</p>
  <p>This is another paragraph (sibling to the first).</p>
</body>
```
</div>

<div class="lesson-block" markdown="1">
### HTML Comments (`<!-- -->`)

Comments are notes for humans; they are ignored by the browser. Use them to explain complex code or leave reminders.

```html
<!-- This is a comment. It won't show on the page. -->
```

**Editor Shortcut:** Use `Cmd + /` (Mac) or `Ctrl + /` (Windows/Linux) to quickly comment or uncomment lines.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Hands-on Practice

Create a simple blog post structure using headings, paragraphs, and apply `<strong>` and `<em>` to various parts of the text. Use `Lorem ipsum` text for practice content.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Knowledge Check

- How do you create distinct paragraphs in HTML?
- How do you create headings, and what is the significance of heading levels?
- What is the difference between using `<strong>` and `<em>`?
- Explain the parent-child and sibling relationships between HTML elements.
- How do you write a comment in HTML?
</div>
