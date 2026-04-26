# Forms and Email

Letting visitors send messages or sign up. Static sites can't process forms themselves (no backend) — but several free services handle it for you.

---

## When to read this

User wants:
- A "Contact Me" form that emails them
- Email signups (newsletter, waitlist)
- Booking requests
- Any "send me a message" feature

---

## The decision

Three viable approaches. Pick based on user's comfort and need.

### Option A — `mailto:` link (simplest)

A link that opens the user's email client with your address pre-filled.

```html
<a href="mailto:hi@yourname.com">Email me</a>
```

**Pros:** No service, no setup, works forever.
**Cons:** Only works if the visitor has an email client configured. No form fields. Looks low-tech.

**When it's right:** Personal sites, low-volume contact, when "professional" isn't the goal.

---

### Option B — Formspree (recommended)

A free service that gives you a form endpoint. The form posts to Formspree, they email you the contents.

**Setup:**

1. Sign up at **formspree.io** (free tier: 50 submissions/month).
2. Create a new form. Stick to your real email.
3. Formspree gives you an endpoint URL like `https://formspree.io/f/abc123`.

**Add to your site:**

```html
<form action="https://formspree.io/f/abc123" method="POST">
  <label>
    Your email
    <input type="email" name="email" required>
  </label>

  <label>
    Message
    <textarea name="message" required></textarea>
  </label>

  <button type="submit">Send</button>
</form>
```

That's it. Style the form however you like.

**First test:** submit the form once with a real message. Formspree may ask you to confirm your email before delivering submissions.

**Pros:** Free, no backend, works on GitHub Pages. Spam protection included.
**Cons:** 50/month limit on free tier. Submissions go through Formspree's servers.

---

### Option C — Embed a third-party form

Tools like ConvertKit, MailerLite, or Tally provide a script you paste in. The form lives on their server; their script renders it on your page.

**When it's right:**
- You want a real email-marketing tool (ConvertKit, MailerLite) for newsletters
- You want booking-style forms with logic (Tally)

**Setup:** Each tool has a "embed on my site" option that gives you a `<script>` or `<iframe>` to paste.

---

## Email signups specifically

For "join my newsletter" forms:

- **MailerLite** — free up to 1000 subscribers, simple
- **ConvertKit** — for creators, free starter plan
- **Buttondown** — minimalist, paid
- **Beehiiv** — newsletter-focused, free starter

These give you better tools than Formspree for ongoing email (segmentation, automated sequences, etc.).

For a one-off contact form, Formspree is fine.

---

## Don't roll your own backend

If the user asks "can I just write some code to handle the form?" — yes, technically, but no, not in this course. Backend code requires a server, which means hosting costs and complexity that defeat the rebellion's static-only premise.

If they really want it, defer to Discord.

---

## Spam protection

All these services include some level of spam filtering. You don't need to add a CAPTCHA unless you start getting hit.

If spam shows up:
- Formspree: enable hCaptcha in settings
- Embedded tools: most include their own toggle

---

## Form styling tips

A working form often looks ugly by default. Quick wins:

```css
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 500;
}

input, textarea {
  padding: 0.75rem;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  padding: 0.75rem 1.5rem;
  background: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

Adjust to match the site's vibe.

---

## Test it on the deployed site

Forms sometimes work locally and break on the deployed site (mismatched URLs, missing CORS headers from the form service). Always test on the live URL after deploying.

---

## Update state

Add to `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Contact form via <Formspree | mailto | other>
```
