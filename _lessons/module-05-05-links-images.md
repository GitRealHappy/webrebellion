---
title: "Links and Images"
module: 5
module_title: "HTML Essentials"
order: 21
estimated_time: "35 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### Connect Your World: Navigating with Links, Enhancing with Images

Links are the connective tissue of the web. Images add visual appeal and convey information instantly. This lesson teaches you how to implement both effectively.
</div>

<div class="lesson-block" markdown="1">
### What You'll Master

- **Links (`<a>`):** Connecting to other pages and resources.
- **Absolute vs. Relative Links:** Navigating within your site and beyond.
- **Images (`<img>`):** Embedding visuals into your pages.
- **Essential Attributes:** `href`, `target`, `rel`, `src`, `alt`, `width`, `height`.
</div>

<div class="lesson-block" markdown="1">
### Creating Links (`<a>` element)

Links are made using the `<a>` (anchor) element. The destination is specified using the `href` attribute.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

- **`href`:** The URL or file path the link points to.
- **`target="_blank"`:** Opens the link in a new tab.
- **`rel="noopener noreferrer"`:** **Crucial for security** when using `target="_blank"`. It prevents the new page from potentially manipulating your original page (tabnabbing). Always include this for safety.

#### Absolute vs. Relative Links

- **Absolute Links:** Full URLs, including the scheme (`https://`) and domain (e.g., `https://www.google.com`). Use these for external sites.
- **Relative Links:** Paths relative to your current file (e.g., `about.html`, `./pages/contact.html`, `../images/logo.png`). Use these for pages and assets within your own website.

  - `./`: Current directory.
  - `../`: Parent directory (one level up).
</div>

<div class="lesson-block" markdown="1">
### Embedding Images (`<img>` element)

Images are added using the `<img>` element. It's a **void element** (no closing tag needed).

```html
<img src="path/to/your/image.jpg" alt="Description of the image" width="300" height="200">
```

- **`src`:** The path (absolute or relative) to the image file.
- **`alt`:** **Essential!** Provides alternative text for screen readers and if the image fails to load. Describe the image concisely.
- **`width` & `height`:** Specify dimensions to prevent layout shifts as the image loads. Use the image's actual pixel dimensions.

**Image Formats:** Common web formats include JPEG, PNG, GIF, and SVG. Choose based on your needs (photos vs. graphics, transparency).

**Important:** Always use images you have the rights to use. Check licenses and provide attribution where required. Use Google's "Usage rights: Creative Commons" filter when searching for images.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Build a Multi-Page Site

1. Create a main `index.html` file. Add an `<h1>` with your name.
2. Create an `about.html` file. Add an `<h1>` with "About Me".
3. In `index.html`, add a link to `about.html` using a relative path.
4. In `about.html`, add a link back to `index.html`.
5. Create an `images` folder. Download a suitable image (e.g., a picture of yourself or something relevant) and place it in the `images` folder as `profile.jpg`.
6. Add this image to your `index.html` file using an `<img>` tag, including `src`, `alt`, `width`, and `height` attributes.
7. Add a link to an external website (like The Rebellion's main page) from your `index.html`, using `target="_blank"` and `rel="noopener noreferrer"`.
</div>

<div class="lesson-block" markdown="1">
### Your Mission: Knowledge Check

- What HTML element is used to create links?
- What is the primary function of the `href` attribute?
- What is the security purpose of `rel="noopener noreferrer"` when using `target="_blank"`?
- Explain the difference between an absolute link and a relative link, providing examples.
- Which element is used to display an image?
- What are the two absolutely essential attributes for any `<img>` tag?
- How do you navigate to a file in a parent directory using a relative path?
</div>
