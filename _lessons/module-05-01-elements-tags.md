---
title: "Elements and Tags"
module: 5
module_title: "HTML Essentials"
order: 17
estimated_time: "20 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### The Building Blocks of Web Content

HTML is how we define the structure and content of every webpage – the paragraphs, the headings, the lists, the images, the links. This lesson breaks down the fundamental HTML elements and tags.
</div>

<div class="lesson-block" markdown="1">
### What You'll Master

- **HTML Tags:** The syntax that defines elements.
- **HTML Elements:** How tags wrap content to create meaningful structures.
</div>

<div class="lesson-block" markdown="1">
### Elements and Tags: Structure Defined

Think of HTML tags as containers for your content.

- **Opening Tags:** These signal the start of an element. They look like `<tagname>`, for instance `<p>` for a paragraph.
- **Closing Tags:** These signal the end of an element. They look like `</tagname>`, for instance `</p>`.
- **Content:** Everything between the opening and closing tags is the content of that element.

A complete paragraph element looks like this:

```html
<p>This is a paragraph.</p>
```

- `<p>`: The opening tag.
- `This is a paragraph.`: The content.
- `</p>`: The closing tag.

The browser uses these tags to understand and display your content. Using the right tags – known as **semantic HTML** – is crucial for search engine optimization and accessibility. It tells browsers and assistive technologies exactly what kind of content they're dealing with.
</div>

<div class="lesson-block" markdown="1">
### Void Elements: The Exceptions

Some elements don't wrap content and don't need a closing tag. These are **void elements**, like `<br>` (line break) or `<img>` (image). They stand alone. You might see them written with a trailing slash (e.g., `<br />`), but modern HTML5 considers this unnecessary.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Knowledge Check

- What is an HTML tag?
- What are the three essential parts of a standard HTML element?
- What are void elements, and how do they differ from regular HTML elements?
</div>
