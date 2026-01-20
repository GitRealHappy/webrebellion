---
title: "Intro to CSS"
module: 6
module_title: "CSS Fundamentals"
order: 22
estimated_time: "40 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Style Your Sites. Fast.

HTML gives your website structure. CSS gives it *style*. This is where web pages go from raw content to something visually engaging. We'll focus on the core CSS concepts you need to make things look good, quickly and confidently.
</div>

<div class="lesson-block" markdown="1">
### What You'll Master

- **Applying Styles:** How to inject CSS into your HTML.
- **Targeting Elements:** Using classes and IDs to precisely control which elements get styled.
- **Selectors:** The powerful language you use to tell CSS *what* to style.
</div>

<div class="lesson-block" markdown="1">
### Core Concepts: The Building Blocks

CSS rules are simple: a **selector** points to an HTML element, and **declarations** (property-value pairs) dictate how it should look.

```css
/* Selector */
.my-element {
  /* Declaration: Property: Value */
  color: hotpink;
  font-size: 16px;
}
```

- **`div`:** A versatile block-level container. Often used to group elements for layout or styling.
- **`span`:** An inline container, perfect for styling small pieces of text within a larger block.
</div>

<div class="lesson-block" markdown="1">
### Selectors: Pointing to Your Pixels

- **Universal Selector (`*`):** Styles *everything*. Use sparingly.
```css
* {
  color: purple; /* Applies purple text to all elements */
}
```

- **Type Selectors:** Target all elements of a specific type (e.g., `p`, `h1`, `div`).
```css
div {
  border: 1px solid black; /* Adds a border to all divs */
}
```

- **Class Selectors (`.`):** The workhorse. Apply styles to any element with a specific class. You can use the same class on multiple elements.
```html
<p class="warning-message">Something is wrong!</p>
```
```css
.warning-message {
  color: red;
}
```
  - **Pro-Tip:** Class names cannot start with a number. Use hyphens for multi-word names (e.g., `alert-text`, not `alert text`).

- **ID Selectors (`#`):** Target a *single, unique* element on the page. Use IDs sparingly and only when a class won't suffice. IDs also cannot start with a number.
```html
<div id="main-header">My Awesome Site</div>
```
```css
#main-header {
  background-color: navy;
}
```

- **Grouping Selectors (`,`):** Apply the same styles to multiple selectors.
```css
.button, button, .submit-button {
  background-color: green;
  color: white;
}
```

- **Chaining Selectors:** Target an element that matches *multiple* conditions.
```html
<div class="alert urgent">System failure!</div>
```
```css
/* Targets only divs with BOTH 'alert' AND 'urgent' classes */
div.alert.urgent {
  font-weight: bold;
}
```

- **Descendant Combinator (space):** Target an element that is *nested inside* another.
```html
<article>
  <p>This paragraph is inside article.</p>
</article>
<p>This paragraph is not.</p>
```
```css
/* Selects only paragraphs INSIDE an article */
article p {
  color: gray;
}
```
</div>

<div class="lesson-block" markdown="1">
### Essential Properties to Ship With

- **`color`:** Sets text color. (Accepts keywords, HEX, RGB, HSL values).
- **`background-color`:** Sets the background of an element.
- **`font-family`:** Specifies the typeface. List fallbacks: `font-family: Arial, sans-serif;`
- **`font-size`:** Sets text size (e.g., `16px`, `1.2em`).
- **`font-weight`:** Controls boldness (`bold`, `normal`, or numeric values like `700`).
- **`text-align`:** Aligns text (`center`, `left`, `right`).
- **`height` / `width`:** Sets dimensions for elements, especially images. Use `height: auto;` with a specific `width` to maintain aspect ratio.
</div>

<div class="lesson-block" markdown="1">
### Adding CSS to Your HTML: Keep It Clean

1. **External CSS (Recommended):** The cleanest approach. Link a separate `.css` file in your HTML's `<head>`.
```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */
body {
  font-family: sans-serif;
}
```
  - **Why?** Keeps HTML lean and CSS organized across multiple pages.

2. **Internal CSS:** Embed styles directly in the `<head>` using `<style>` tags.
```html
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
```
  - **Use Case:** Unique styles for a single page. Less maintainable for larger sites.

3. **Inline CSS:** Apply styles directly to an HTML element using the `style` attribute.
```html
<p style="color: red; font-weight: bold;">This is red and bold.</p>
```
  - **Avoid:** This is messy, hard to maintain, and overrides other styles. Use only as a last resort for single, isolated elements.
</div>
