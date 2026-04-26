# HTML Basics: Structure and Content

HTML is the skeleton of every webpage. It defines **what's on the page** — the headings, paragraphs, images, links, lists, and everything else.

This lesson covers enough HTML to build a real page.

---

## The Mental Model

Think of HTML as a document with labeled parts. You're not "programming" — you're **marking up** content to tell browsers what each piece is.

```html
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

The browser reads these labels (called **tags**) and displays the content appropriately.

---

## Elements and Tags

HTML is made of **elements**. An element has:

1. **Opening tag:** `<p>`
2. **Content:** The stuff inside
3. **Closing tag:** `</p>`

```html
<p>This is a paragraph of text.</p>
```

Some elements don't have content and don't need closing tags. These are called **void elements**:

```html
<br>    <!-- line break -->
<img>   <!-- image -->
<hr>    <!-- horizontal rule -->
```

---

## The HTML Boilerplate

Every HTML file needs the same basic structure. This is called the **boilerplate**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

Let's break it down:

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Tells the browser this is HTML5 |
| `<html lang="en">` | Root element; `lang` helps screen readers |
| `<head>` | Metadata (not visible on the page) |
| `<meta charset="UTF-8">` | Character encoding (supports all languages) |
| `<meta name="viewport"...>` | Makes the page work on mobile |
| `<title>` | Shows in the browser tab |
| `<body>` | All visible content goes here |

**Pro tip:** In Cursor, type `!` and press `Tab` to auto-generate this boilerplate.

---

## Essential Elements

### Headings

Six levels, `<h1>` (biggest/most important) through `<h6>` (smallest):

```html
<h1>Main Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
```

**Rule:** Use only one `<h1>` per page. Use headings in order (don't skip from h1 to h4).

### Paragraphs

```html
<p>This is a paragraph. Browsers add space above and below automatically.</p>
<p>This is another paragraph.</p>
```

### Emphasis

```html
<strong>Bold and important</strong>
<em>Italicized for emphasis</em>
```

Use `<strong>` for importance, `<em>` for emphasis. They also help screen readers.

### Line Breaks

```html
<p>First line<br>Second line</p>
```

Use sparingly. Usually you want separate paragraphs instead.

---

## Lists

### Unordered (Bulleted)

```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Ordered (Numbered)

```html
<ol>
    <li>Step one</li>
    <li>Step two</li>
    <li>Step three</li>
</ol>
```

Lists can be nested:

```html
<ul>
    <li>Main item
        <ul>
            <li>Sub-item</li>
            <li>Another sub-item</li>
        </ul>
    </li>
</ul>
```

---

## Links

Links use the `<a>` (anchor) element:

```html
<a href="https://example.com">Click here</a>
```

### Link to Another Page in Your Site

```html
<a href="about.html">About Me</a>
<a href="pages/contact.html">Contact</a>
```

### Link to External Site (Opens in New Tab)

```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
```

**Important:** When using `target="_blank"`, always include `rel="noopener noreferrer"` for security.

### Link Paths

- `about.html` — file in the same folder
- `./about.html` — same thing, explicit "current folder"
- `pages/contact.html` — file in a subfolder
- `../index.html` — file in the parent folder
- `https://...` — external URL (absolute path)

---

## Images

Images use the `<img>` element (void element, no closing tag):

```html
<img src="photo.jpg" alt="Description of the image">
```

### Required Attributes

- `src` — path to the image file
- `alt` — description for screen readers and if image fails to load

### Optional but Recommended

```html
<img src="photo.jpg" alt="A sunset over mountains" width="800" height="600">
```

Setting `width` and `height` prevents layout shifts while the image loads.

### Image Paths

Same rules as links:
- `images/logo.png` — image in an "images" subfolder
- `../images/photo.jpg` — image in parent folder's "images" subfolder

---

## Structural Elements

These help organize your page semantically:

```html
<header>
    <!-- Logo, navigation, intro -->
</header>

<nav>
    <!-- Navigation links -->
</nav>

<main>
    <!-- Primary content -->
</main>

<section>
    <!-- A thematic grouping -->
</section>

<article>
    <!-- Self-contained content -->
</article>

<footer>
    <!-- Footer content -->
</footer>
```

Using these instead of generic `<div>` elements helps accessibility and SEO.

---

## The Generic Containers

When you need a container without semantic meaning:

```html
<div>Block-level container (takes full width, starts new line)</div>
<span>Inline container (flows with text)</span>
```

Use `<div>` to group elements for styling. Use `<span>` to style part of text.

---

## Comments

Comments are notes for humans. Browsers ignore them:

```html
<!-- This is a comment -->

<!-- 
    Multi-line
    comment
-->
```

**Shortcut:** Select text and press `Cmd + /` (Mac) or `Ctrl + /` to comment/uncomment.

---

## Nesting and Indentation

Elements inside other elements are **nested**. Use indentation to show structure:

```html
<article>
    <h2>Article Title</h2>
    <p>First paragraph with <strong>bold text</strong> inside.</p>
    <ul>
        <li>Item one</li>
        <li>Item two</li>
    </ul>
</article>
```

The outer element is the **parent**, inner elements are **children**, same-level elements are **siblings**.

---

## Viewing Your HTML

To see your HTML in a browser:

1. **Drag and drop** the `.html` file into a browser window
2. **Double-click** the file in Finder/Explorer
3. **Terminal:** `open index.html` (Mac) or `start index.html` (Windows)

Every time you save changes, refresh the browser to see them.

---

## Summary

| Element | Purpose |
|---------|---------|
| `<h1>` - `<h6>` | Headings |
| `<p>` | Paragraph |
| `<strong>`, `<em>` | Bold, italic |
| `<ul>`, `<ol>`, `<li>` | Lists |
| `<a href="...">` | Links |
| `<img src="..." alt="...">` | Images |
| `<div>`, `<span>` | Generic containers |
| `<header>`, `<nav>`, `<main>`, `<footer>` | Structural elements |

---

## Practice

Create a simple page with:

1. A heading with your name
2. A paragraph introducing yourself
3. An unordered list of three things you want to build
4. A link to a website you like
5. An image (any image — download one or use a placeholder)

Save it as `index.html` and open it in your browser.

Once you can do this, you're ready to make it look good with CSS.
