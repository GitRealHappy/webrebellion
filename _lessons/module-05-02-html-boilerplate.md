---
title: "HTML Boilerplate"
module: 5
module_title: "HTML Essentials"
order: 18
estimated_time: "25 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### The Essential Framework for Every Web Page

Every HTML document needs a consistent starting structure, or boilerplate. This lesson covers the essential components that form the backbone of any HTML file. Get this right, and you're ready to build.
</div>

<div class="lesson-block" markdown="1">
### What You'll Master

- **The Basic Structure:** Essential elements for any HTML document.
- **Viewing Your Work:** How to open your HTML files in a browser.
</div>

<div class="lesson-block" markdown="1">
### Creating Your First HTML File

1. Create a folder for your project, name it `my-first-site`.
2. Inside, create a file named `index.html`. We use `index.html` as the default filename for the homepage of any website. Servers look for it automatically.
</div>

<div class="lesson-block" markdown="1">
### The Core Components

#### The `<!DOCTYPE html>` Declaration

This is the very first line. It tells the browser that your document is using the latest standard: HTML5. Always use it.

#### The `<html>` Element

This is the root element. Everything else lives inside it. We also add the `lang` attribute here to specify the document's language (e.g., `lang="en"` for English), which is vital for accessibility, helping screen readers pronounce text correctly.

```html
<!DOCTYPE html>
<html lang="en">
  <!-- Content goes here -->
</html>
```

#### The `<head>` Element

This section contains meta-information about your page – things the browser needs but aren't directly displayed to the user.

- **`<meta charset="UTF-8">`:** Crucial for displaying special characters and various languages correctly. Always include this.
- **`<title>`:** This is the text that appears in the browser tab. Give your page a clear, meaningful title.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Awesome Webpage</title>
  </head>
  <!-- Body content goes here -->
</html>
```

#### The `<body>` Element

This is where all the visible content of your webpage goes: text, images, links, everything the user sees.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Awesome Webpage</title>
  </head>
  <body>
    <!-- Your visible content here -->
  </body>
</html>
```

**Pro-Tip:** In Cursor, type `!` and press Enter to auto-generate this boilerplate instantly. Or, use `Cmd + K` and ask AI to generate it for you. Either way, understand what each part does.
</div>

<div class="lesson-block" markdown="1">
### Viewing Your HTML in the Browser

- **Drag and Drop:** Drag your `index.html` file directly into your browser window.
- **Double Click:** Double-click the file in your file explorer.
- **Terminal Command:** Use `open index.html` (macOS) or `explorer.exe index.html` (WSL) in your terminal.

Add an `<h1>Hello World!</h1>` inside the `<body>` section, save, and refresh your browser to see it appear.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Knowledge Check

- What is the purpose of the `<!DOCTYPE html>` declaration?
- What is the fundamental role of the `<html>` element?
- What kind of information goes inside the `<head>` element, and what goes inside the `<body>` element?
</div>
