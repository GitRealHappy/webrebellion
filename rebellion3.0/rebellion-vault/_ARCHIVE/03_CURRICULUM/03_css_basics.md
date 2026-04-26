# CSS Basics: Making Things Look Good

HTML gives your page structure. CSS gives it style — colors, fonts, spacing, layout, and everything visual.

This lesson covers enough CSS to make a page look professional.

---

## The Mental Model

CSS is a set of rules that tell the browser how to display HTML elements.

Each rule has:
1. **Selector** — what to style
2. **Property** — what aspect to change
3. **Value** — what to change it to

```css
h1 {
    color: navy;
    font-size: 36px;
}
```

This says: "Find all `<h1>` elements. Make the text navy blue and 36 pixels tall."

---

## Adding CSS to Your HTML

Three ways, from best to worst:

### 1. External Stylesheet (Recommended)

Create a separate `.css` file and link it in your HTML:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Why it's best:** Keeps HTML and CSS separate. One CSS file can style multiple pages.

### 2. Internal Stylesheet

Put CSS in a `<style>` tag in the `<head>`:

```html
<head>
    <style>
        h1 { color: navy; }
    </style>
</head>
```

**Use case:** Quick experiments or single-page sites.

### 3. Inline Styles

Add styles directly to an element:

```html
<h1 style="color: navy;">Hello</h1>
```

**Avoid this** for anything beyond quick testing. It's hard to maintain.

---

## Selectors: Targeting Elements

### Type Selector

Targets all elements of a type:

```css
p { color: gray; }           /* All paragraphs */
h1 { font-size: 48px; }      /* All h1 elements */
```

### Class Selector

Targets elements with a specific class. Classes are reusable.

```html
<p class="intro">This is the intro.</p>
<p class="intro">This too.</p>
```

```css
.intro {
    font-size: 20px;
    font-weight: bold;
}
```

**Note:** Class names start with a dot in CSS, but not in HTML.

### ID Selector

Targets a single unique element:

```html
<header id="main-header">...</header>
```

```css
#main-header {
    background-color: black;
}
```

**Rule:** IDs should be unique on the page. Prefer classes for styling.

### Combining Selectors

```css
/* Multiple selectors, same styles */
h1, h2, h3 {
    font-family: Georgia, serif;
}

/* Element with specific class */
p.highlight {
    background-color: yellow;
}

/* Descendant (element inside another) */
article p {
    line-height: 1.6;
}
```

---

## Essential Properties

### Colors

```css
color: navy;                    /* Text color */
background-color: #f5f5f5;      /* Background */
```

Color values:
- Named: `red`, `navy`, `hotpink`
- Hex: `#ff0000`, `#333`, `#f5f5f5`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(0, 0, 0, 0.5)` (with transparency)

### Typography

```css
font-family: Arial, sans-serif;     /* Font (with fallback) */
font-size: 16px;                    /* Size */
font-weight: bold;                  /* bold, normal, or 100-900 */
font-style: italic;                 /* italic, normal */
line-height: 1.5;                   /* Space between lines */
text-align: center;                 /* left, center, right, justify */
text-decoration: none;              /* Remove underlines from links */
```

### Spacing (The Box Model)

Every element is a box with four layers:

```
+---------------------------+
|         MARGIN            |  ← Space outside the border
|  +---------------------+  |
|  |      BORDER         |  |  ← The visible edge
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |  ← Space inside the border
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |  ← Your actual content
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

```css
padding: 20px;                  /* Space inside */
margin: 20px;                   /* Space outside */
border: 1px solid black;        /* Border line */
```

Shorthand:
```css
padding: 10px 20px;             /* top/bottom, left/right */
padding: 10px 20px 15px 25px;   /* top, right, bottom, left (clockwise) */
margin-top: 30px;               /* Single side */
```

### Sizing

```css
width: 300px;
height: 200px;
max-width: 100%;                /* Never wider than container */
min-height: 400px;              /* At least this tall */
```

### Box-Sizing (Important!)

By default, padding and border add to the element's size. This is confusing.

Fix it globally:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

Now `width: 300px` means the total width is 300px, including padding and border.

**Put this at the top of every stylesheet.**

---

## Display Types

### Block Elements

Take full width, start on new line:

```css
display: block;
```

Default for: `<div>`, `<p>`, `<h1>`-`<h6>`, `<header>`, `<section>`, etc.

### Inline Elements

Only as wide as content, flow with text:

```css
display: inline;
```

Default for: `<span>`, `<a>`, `<strong>`, `<em>`

**Note:** Inline elements ignore `width`, `height`, and vertical `margin`/`padding`.

### Inline-Block

Flows inline but respects width/height:

```css
display: inline-block;
```

Useful for buttons and navigation items.

---

## The Cascade: When Rules Conflict

If multiple rules target the same element, CSS decides which wins based on:

1. **Specificity** — More specific selectors win
   - Inline styles > IDs > Classes > Type selectors
   
2. **Order** — Later rules override earlier ones (if specificity is equal)

```css
p { color: blue; }
p { color: red; }           /* Red wins (comes later) */

.intro { color: green; }    /* Green wins on .intro paragraphs (more specific) */
```

### Specificity Hierarchy

From highest to lowest:
1. Inline styles (`style="..."`)
2. IDs (`#header`)
3. Classes, attributes, pseudo-classes (`.intro`, `[type="text"]`, `:hover`)
4. Type selectors (`p`, `div`, `h1`)

**Tip:** Avoid specificity wars. Use classes consistently.

---

## Inheritance

Some properties pass from parent to child:

```css
body {
    font-family: Arial, sans-serif;
    color: #333;
}
```

All text inside `<body>` inherits these unless overridden.

**Inherited:** `color`, `font-*`, `line-height`, `text-align`
**Not inherited:** `margin`, `padding`, `border`, `background`

---

## Common Patterns

### Centering Text

```css
text-align: center;
```

### Centering a Block Element

```css
.container {
    width: 800px;
    margin: 0 auto;         /* auto left/right margins = centered */
}
```

### Removing Link Underlines

```css
a {
    text-decoration: none;
}
```

### Hover Effects

```css
a:hover {
    color: red;
}

.button:hover {
    background-color: darkblue;
}
```

### Simple Button

```css
.button {
    display: inline-block;
    padding: 12px 24px;
    background-color: navy;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.button:hover {
    background-color: darkblue;
}
```

---

## Debugging CSS

### Use the Browser Inspector

1. Right-click any element → "Inspect"
2. See the HTML structure and applied CSS
3. Strikethrough styles are being overridden
4. Edit values live to experiment (changes don't save)

**This is your most important debugging tool.**

### Common Issues

**CSS not applying?**
- Check the file path in your `<link>` tag
- Check for typos in selectors
- Check specificity (is something more specific overriding?)

**Spacing weird?**
- Add `box-sizing: border-box` globally
- Check for default margins (browsers add margins to `<body>`, `<h1>`, `<p>`, etc.)

**Element not the right size?**
- Is it inline? Inline elements ignore width/height
- Check if something is overriding your styles

---

## A Starter Stylesheet

Here's a sensible starting point:

```css
/* Reset and base */
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

h1, h2, h3 {
    line-height: 1.2;
}

a {
    color: #0066cc;
}

a:hover {
    color: #004499;
}

img {
    max-width: 100%;
    height: auto;
}
```

---

## Summary

| Property | What it does |
|----------|--------------|
| `color` | Text color |
| `background-color` | Background |
| `font-family` | Typeface |
| `font-size` | Text size |
| `font-weight` | Bold/normal |
| `text-align` | Alignment |
| `padding` | Space inside |
| `margin` | Space outside |
| `border` | Visible edge |
| `width`, `height` | Dimensions |
| `display` | Block/inline/inline-block |

---

## Practice

Take the HTML page you created in the previous lesson and:

1. Create a `styles.css` file
2. Link it to your HTML
3. Add `box-sizing: border-box` globally
4. Style the heading (size, color)
5. Style the paragraph (font, line-height)
6. Add padding and a background color to a section
7. Style your link (remove underline, add hover effect)

Open in browser, inspect elements, experiment.

Once your page looks decent, you're ready to learn about the command line.
