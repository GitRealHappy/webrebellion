# CSS Quick Reference

A quick lookup for common CSS properties and patterns.

---

## Linking CSS

```html
<link rel="stylesheet" href="styles.css">
```

---

## Selectors

| Selector | Targets | Example |
|----------|---------|---------|
| `element` | All of that type | `p { }` |
| `.class` | Elements with class | `.intro { }` |
| `#id` | Element with ID | `#header { }` |
| `*` | Everything | `* { }` |
| `element.class` | Element with class | `p.intro { }` |
| `parent child` | Descendant | `article p { }` |
| `a, b` | Multiple selectors | `h1, h2 { }` |
| `:hover` | On mouse hover | `a:hover { }` |
| `:first-child` | First child | `li:first-child { }` |

---

## Colors

```css
color: red;                     /* Named */
color: #ff0000;                 /* Hex */
color: #f00;                    /* Hex shorthand */
color: rgb(255, 0, 0);          /* RGB */
color: rgba(255, 0, 0, 0.5);    /* RGB with alpha */
color: hsl(0, 100%, 50%);       /* HSL */
```

---

## Typography

```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;              /* normal, bold, 100-900 */
font-style: italic;             /* normal, italic */
line-height: 1.5;
text-align: center;             /* left, center, right, justify */
text-decoration: none;          /* none, underline, line-through */
text-transform: uppercase;      /* uppercase, lowercase, capitalize */
letter-spacing: 1px;
```

---

## Box Model

```css
/* Content dimensions */
width: 300px;
height: 200px;
max-width: 100%;
min-height: 400px;

/* Padding (inside) */
padding: 20px;                  /* All sides */
padding: 10px 20px;             /* Vertical, horizontal */
padding: 10px 20px 15px 25px;   /* Top, right, bottom, left */
padding-top: 10px;              /* Single side */

/* Border */
border: 1px solid black;
border-radius: 4px;             /* Rounded corners */

/* Margin (outside) */
margin: 20px;
margin: 0 auto;                 /* Center horizontally */
```

### Box-Sizing (Always Use This)

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

---

## Display

```css
display: block;         /* Full width, new line */
display: inline;        /* Flows with text */
display: inline-block;  /* Inline but respects width/height */
display: none;          /* Hidden */
display: flex;          /* Flexbox container */
display: grid;          /* Grid container */
```

---

## Flexbox (Quick Start)

```css
.container {
    display: flex;
    justify-content: center;     /* Horizontal alignment */
    align-items: center;         /* Vertical alignment */
    gap: 20px;                   /* Space between items */
}
```

### justify-content values
`flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `space-evenly`

### align-items values
`flex-start` | `flex-end` | `center` | `stretch` | `baseline`

### flex-direction
`row` | `row-reverse` | `column` | `column-reverse`

---

## Positioning

```css
position: static;       /* Default */
position: relative;     /* Relative to normal position */
position: absolute;     /* Relative to positioned ancestor */
position: fixed;        /* Relative to viewport */
position: sticky;       /* Hybrid relative/fixed */

top: 10px;
right: 10px;
bottom: 10px;
left: 10px;
```

---

## Background

```css
background-color: #f5f5f5;
background-image: url('image.jpg');
background-size: cover;         /* cover, contain, or dimensions */
background-position: center;
background-repeat: no-repeat;

/* Shorthand */
background: #f5f5f5 url('image.jpg') center/cover no-repeat;
```

---

## Common Patterns

### Center Text
```css
text-align: center;
```

### Center Block Element
```css
.centered {
    width: 800px;
    margin: 0 auto;
}
```

### Center with Flexbox
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### Remove Link Underline
```css
a {
    text-decoration: none;
}
```

### Simple Button
```css
.button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: #555;
}
```

### Full-Height Section
```css
.hero {
    min-height: 100vh;
}
```

### Sticky Header
```css
header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}
```

---

## Responsive Design

### Media Queries
```css
/* Mobile first, then larger screens */
.container {
    padding: 10px;
}

@media (min-width: 768px) {
    .container {
        padding: 20px;
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 40px;
    }
}
```

### Common Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Units

| Unit | Description |
|------|-------------|
| `px` | Pixels (absolute) |
| `%` | Percentage of parent |
| `em` | Relative to element's font-size |
| `rem` | Relative to root font-size |
| `vh` | Viewport height (1vh = 1%) |
| `vw` | Viewport width (1vw = 1%) |

---

## Transitions

```css
.button {
    transition: background-color 0.3s ease;
}

/* Multiple properties */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* All properties */
.element {
    transition: all 0.3s ease;
}
```

---

## Shadows

```css
/* Box shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

/* Text shadow */
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
```

---

## Reset/Normalize

```css
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
}
```
