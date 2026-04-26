# HTML Quick Reference

A quick lookup for common HTML elements and patterns.

---

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content here -->
</body>
</html>
```

---

## Text Elements

| Element | Purpose | Example |
|---------|---------|---------|
| `<h1>` - `<h6>` | Headings | `<h1>Main Title</h1>` |
| `<p>` | Paragraph | `<p>Text here</p>` |
| `<strong>` | Bold/important | `<strong>important</strong>` |
| `<em>` | Italic/emphasis | `<em>emphasized</em>` |
| `<br>` | Line break | `Line one<br>Line two` |
| `<hr>` | Horizontal rule | `<hr>` |

---

## Lists

### Unordered
```html
<ul>
    <li>Item one</li>
    <li>Item two</li>
</ul>
```

### Ordered
```html
<ol>
    <li>First step</li>
    <li>Second step</li>
</ol>
```

---

## Links

```html
<!-- Internal link -->
<a href="about.html">About</a>

<!-- External link (new tab) -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email me</a>

<!-- Anchor link (same page) -->
<a href="#section-id">Jump to section</a>
```

---

## Images

```html
<img src="images/photo.jpg" alt="Description of image" width="800" height="600">
```

**Required attributes:** `src`, `alt`

---

## Semantic Structure

```html
<header>
    <!-- Logo, navigation -->
</header>

<nav>
    <!-- Navigation links -->
</nav>

<main>
    <!-- Primary content -->
</main>

<section>
    <!-- Thematic grouping -->
</section>

<article>
    <!-- Self-contained content -->
</article>

<aside>
    <!-- Sidebar content -->
</aside>

<footer>
    <!-- Footer content -->
</footer>
```

---

## Generic Containers

```html
<div>Block-level container</div>
<span>Inline container</span>
```

---

## Forms (Basic)

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
    
    <button type="submit">Send</button>
</form>
```

---

## Common Input Types

| Type | Purpose |
|------|---------|
| `text` | Single line text |
| `email` | Email address |
| `password` | Hidden text |
| `number` | Numeric input |
| `tel` | Phone number |
| `url` | Web address |
| `checkbox` | Multiple selections |
| `radio` | Single selection |
| `submit` | Submit button |

---

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

---

## Comments

```html
<!-- This is a comment -->

<!--
    Multi-line
    comment
-->
```

---

## Special Characters

| Character | Code |
|-----------|------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| Non-breaking space | `&nbsp;` |
| Copyright © | `&copy;` |
| Em dash — | `&mdash;` |

---

## Path Reference

| Path | Meaning |
|------|---------|
| `file.html` | Same folder |
| `./file.html` | Same folder (explicit) |
| `folder/file.html` | Subfolder |
| `../file.html` | Parent folder |
| `../../file.html` | Two levels up |
| `/file.html` | Root of site |
| `https://...` | Absolute URL |
