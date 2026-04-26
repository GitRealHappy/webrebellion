# Iterate and Preview

The loop where the site actually takes shape.

---

## How to preview

Easiest:

```
! open 07_PROJECTS/<active>/index.html
```

This opens the file in the user's default browser. They refresh after each change.

For multi-file projects with linked CSS/images, this works the same — just keep the file structure intact.

---

## A nicer preview (optional): a local server

For more realistic previews (clean URLs, hot-reload-ish), run a simple HTTP server:

```
! cd 07_PROJECTS/<active> && python3 -m http.server 8000
```

Then open **http://localhost:8000** in the browser. The user reloads after each change.

When they're done, `Ctrl+C` in the terminal stops the server.

Don't push the user toward this unless they've asked or they hit a problem (like CORS errors with `file://`).

---

## The iteration loop

1. **User describes a change** ("make the headline bigger", "add a section for testimonials")
2. **You make the change** (edit the file directly, don't paste full new versions in the chat)
3. **User refreshes the browser**
4. **User reacts** ("more padding", "looks great", "the spacing's off on mobile")
5. **Repeat**

Keep changes small. One thing at a time. Easier to review, easier to undo.

---

## When the user says "make it look better"

That's not specific enough to act on. Push back briefly:

> What specifically? Bigger headline? Different colors? More space between sections? Tighter layout?

Or offer 2 specific options:

> A few quick wins available: bump the headline size, increase section padding, or change the accent color. Which feels off to you?

Don't just guess and rewrite the whole stylesheet.

---

## Mobile check

Halfway through styling, check mobile:

```
! open 07_PROJECTS/<active>/index.html
```

In the browser, resize the window narrow (or use Chrome DevTools → device mode).

Common mobile fixes:
- Make sure `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is in the `<head>`
- Replace fixed `width: 800px` with `max-width: 800px`
- Add a media query for narrow screens:
  ```css
  @media (max-width: 600px) {
    /* mobile-specific tweaks */
  }
  ```
- Stack columns vertically on mobile (flexbox `flex-direction: column` in the media query)

---

## Browser DevTools

If the user is willing to dip in: right-click → Inspect. The element panel + style panel let you experiment with CSS live (changes don't save, but they're great for figuring out what to ask for).

You don't need to teach DevTools. Just mention it exists when relevant.

---

## When to commit

Suggest committing whenever the user says "looks good" or hits a clear milestone:

> Want me to commit this? `git add . && git commit -m "Add hero section"`

Small, frequent commits beat one giant "all the changes" commit. Easier to undo specific things later.

---

## When the user wants to tweak content

For text changes:
- Make the change directly in the HTML
- Confirm briefly ("Updated the headline.")

For image swaps:
- If they have a new image, ask the path (or have them drop it in `07_PROJECTS/<active>/images/`)
- Update the `src` and `alt`

Don't overthink this. Most iteration is small text and CSS tweaks.

---

## When to stop iterating

The user usually signals it: "looks good", "I think we're ready to deploy", "good enough for now".

Don't keep polishing past their comfort. Static sites are easy to update later — getting it live is more important than getting it perfect.

Route to `04_deploy_pages.md`.

---

## Update state

When iteration ends:

```markdown
## Progress
- ✓ Project folder created
- ✓ HTML structure
- ✓ Styled
- ◯ Deployed to GitHub Pages
- ◯ Custom domain (optional)
```
