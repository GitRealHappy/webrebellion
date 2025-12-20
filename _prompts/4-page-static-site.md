---
title: "4-Page Static Site Generator"
category: "HTML/CSS"
difficulty: "Beginner"
image: "/assets/images/prompt-previews/preview2.png"
tags: ["html", "css", "static-site", "beginner"]
layout: prompt
---


You are an expert front-end web developer helping a beginner build a very simple 4-page static website.

Goals:
- No frameworks.
- No Jekyll.
- Just clean, semantic HTML, CSS, and a tiny bit of JavaScript if helpful.
- 4 pages with placeholder content (lorem ipsum or simple generic copy).
- Easy to understand and edit for a beginner.

-------------------------
1. Ask me 3 questions first
-------------------------

Before generating any files, ask me these 3 questions and wait for my answers:
1. What is the name of the site or project? (Use this for the main heading and <title>.)
2. What type of site is this? (e.g. portfolio, small business, course, blog-like, etc.)
3. Do you prefer a light or dark theme for this project?

After I answer, briefly summarize the plan in 1–2 sentences and ask me to confirm. Only start generating files after I confirm.

-------------------------
2. Overall requirements
-------------------------

After confirmation, create a bare-bones static site with:
- 4 pages total:
  1. Home (index.html)
  2. About (about.html)
  3. Services or Offerings (services.html) – name may be adapted based on the type of site
  4. Contact (contact.html)
- A shared navigation bar on every page that links between these 4 pages.
- Simple placeholder content:
  - Headings, paragraphs, and maybe a simple list or two.
  - Use lorem-ipsum style filler text or very generic text so I can replace it later.
- One shared stylesheet for all pages:
  - /assets/css/styles.css
- (Optional) One shared script file:
  - /assets/js/main.js
  - Only use JS for tiny enhancements if you think it helps (like a mobile nav toggle). Otherwise, keep JS minimal.

-------------------------
3. File structure
-------------------------

Use this structure:
- index.html
- about.html
- services.html
- contact.html
- assets/
  - css/
    - styles.css
  - js/
    - main.js (optional; you can leave it mostly empty with a comment)

If you need any other small files, explain why and keep things simple.

-------------------------
4. HTML structure guidelines
-------------------------

For EACH HTML page:
- Use a standard HTML5 skeleton:
  - <!DOCTYPE html>
  - <html lang="en">
  - <head> with proper <meta charset>, viewport meta, a <title>, and link to the CSS.
- Use semantic structure:
  - <header> for the site name + nav
  - <main> for the page content
  - <footer> with a simple line of text (e.g. © YEAR Site Name)
- Make sure the <nav> is consistent across all pages and clearly shows which page is active (for example, via a CSS class like .active on the current page’s link).

Content suggestions per page (all placeholder-ish):
- Home (index.html):
  - Hero section with main heading and a short intro paragraph.
  - 2–3 short “highlight” blocks or cards.
- About (about.html):
  - A heading and 2–3 paragraphs about the “story” or background (generic/filler).
  - Maybe a small list or values or principles.
- Services (services.html):
  - A heading and a simple list of 3–6 services or offerings (generic).
  - Short descriptions for each.
- Contact (contact.html):
  - A heading.
  - A simple contact “form” structure with fields: name, email, message.
  - This does NOT have to be functional yet (no backend); just basic fields styled nicely.
  - Include a small note like: “This form is not wired up yet; you can connect it to a form service later.”

-------------------------
5. CSS design guidelines
-------------------------

In /assets/css/styles.css:
- Use a simple, readable layout.
- Use system fonts (or a single Google font) that are easy to read.
- Respect the user’s preference for light or dark theme based on the answer to the earlier question:
  - For dark theme:
    - Dark background (e.g. near-black or deep navy/indigo).
    - Light text.
    - Clear contrast for links and buttons.
  - For light theme:
    - Light background (white or very light gray).
    - Dark text.
    - Subtle accent colours.

General styling:
- Set a max-width (e.g. ~800–1000px) for the main content and center it.
- Give comfortable line-height for paragraphs.
- Style the nav as a simple horizontal bar at the top with clear links.
- Make sure it’s mobile responsive:
  - Stack the nav items vertically on very small screens if needed.
  - Ensure content has padding and doesn’t hug the edges of the viewport.

-------------------------
6. JavaScript (optional, minimal)
-------------------------

In /assets/js/main.js:
- Either leave it with a simple comment like:
// JS placeholder – you can add small interactions here later.
- OR (optional) add a tiny enhancement, such as:
  - A simple mobile menu toggle if you decide to create a hamburger-style menu on small screens.

If you add JS, keep it very simple and explain briefly in a comment what it does.

-------------------------
7. Output format
-------------------------

When you’re ready to output the solution, please:
1. Show a short file tree first.
2. Then show the full contents of each file in separate code blocks in this order:
   - index.html
   - about.html
   - services.html
   - contact.html
   - assets/css/styles.css
   - assets/js/main.js (if used)
3. Add a short note at the end explaining:
   - How to open the site locally (double-click index.html or use a simple static server).
   - How I can copy this into my own project folder.

Remember: keep everything beginner-friendly, simple, and easy to modify later.
