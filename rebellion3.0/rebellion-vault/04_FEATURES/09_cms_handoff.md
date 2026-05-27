# CMS Handoff

Letting a non-technical owner edit their site after launch without your involvement. The whole point of a content-management system (CMS) on a static site is: client can change "About" page text on a Tuesday without emailing you.

Three tiers, simplest to heaviest. Start at the lowest one that solves the client's actual need.

---

## When to read this

User says:
- "How do I let the client edit it?"
- "Add a CMS"
- "Set up content management"
- "They want to update text themselves"
- "Can they add new products?"

The decision depends on **what the client actually needs to edit** and **how technical they are**. Ask before recommending.

---

## Qualifying questions

Before picking a tier:

1. **What needs to be editable?** Just text on a few pages, or new pages/posts regularly, or product listings, or media?
2. **How often?** Once a quarter, monthly, weekly?
3. **How technical is the editor?** Can they handle a "GitHub edit" button? A WYSIWYG? Or only a Google-Docs-style interface?
4. **Who else edits?** Just one person, or multiple stakeholders with different access?

Map answers to tier:

| Scenario | Tier |
|---|---|
| One owner, occasional text edits | **Tier 1: GitHub web UI** |
| One owner, regular text + image edits, doesn't want to see code | **Tier 2: Decap CMS** |
| Multiple editors, frequent new pages/posts, ecommerce inventory | **Tier 3: Hosted CMS (post-rebellion)** |

---

## Tier 1 — Direct GitHub web UI (free, simplest)

The client edits the **raw HTML or Markdown** through GitHub's web interface. Sounds intimidating; in practice, modern GitHub's Markdown preview makes this fine for editing text.

### Setup

There's nothing to set up. GitHub Pages serves the site; GitHub.com has an edit button on every file.

### Training (the actual work)

Make a Loom video, or write a one-page doc, that shows:

1. Go to **github.com/your-org/site-repo**.
2. Click the file you want to edit (e.g., `about.html` or `content/services.md`).
3. Click the pencil icon (✎) in the top-right.
4. Edit. GitHub has a **Preview** tab.
5. Scroll down. Add a short note ("updated services list"). Click **Commit changes**.
6. Wait 1–2 minutes. The change is live on the site.

This works because:
- No new account / login (they already have GitHub for the repo invite).
- No new tool to learn.
- Free forever; no subscription.

### When it falls apart

- Client has to edit a complex HTML page with mixed code and content. They'll break it.
- Client needs to **add new pages**, not just edit existing ones. (Possible but error-prone.)
- Client needs image uploads. (Possible via GitHub's "Add file" but clunky.)
- Multiple editors at once → merge conflicts.

If any of these are real needs → Tier 2.

### Make their job easier

If you know the client will edit text, structure content as **Markdown files** in a `content/` folder, separate from the HTML templates:

```
07_PROJECTS/<active>/
├── index.html
├── about.html
├── content/
│   ├── services.md       ← client edits this
│   └── about.md          ← and this
```

Then use a tiny `<script>` or build step to load the Markdown. Or just have them edit the HTML files directly — text inside `<p>` tags is pretty forgiving.

---

## Tier 2 — Decap CMS (free, the recommended overlay)

**Decap CMS** (formerly Netlify CMS) is a small JavaScript overlay that gives the client a real WYSIWYG editing interface. **It still commits to GitHub on the back end** — so it doesn't violate the static-only rule. There's no server, no database. The CMS UI just edits files in the repo.

Key insight: Decap is **not a framework**. It's a single HTML file with some JavaScript that talks to GitHub's API. From the site's perspective, the published files are still plain HTML/Markdown. The CMS is a back-door editor.

### Setup

1. Create an `admin/` folder in the project:

   ```
   07_PROJECTS/<active>/
   ├── index.html
   ├── content/
   ├── admin/
   │   ├── index.html
   │   └── config.yml
   ```

2. `admin/index.html` is a standard Decap loader (~10 lines, from the Decap docs).

3. `admin/config.yml` defines what fields the editor sees. Example for a services list:

   ```yaml
   backend:
     name: github
     repo: youruser/oakmoss-site
     branch: main

   media_folder: "images/uploads"
   public_folder: "/images/uploads"

   collections:
     - name: "pages"
       label: "Pages"
       files:
         - file: "content/about.md"
           label: "About page"
           name: "about"
           fields:
             - { label: "Title", name: "title", widget: "string" }
             - { label: "Body", name: "body", widget: "markdown" }
   ```

4. Client logs in at `oakmoss.studio/admin/` with GitHub. They see a friendly editor for the fields you defined. They click **Publish** and Decap commits the change to GitHub. GitHub Pages rebuilds. Change is live within ~2 minutes.

### What's good about Decap

- Free. No subscription.
- Still 100% static — the live site is the same HTML files; Decap just edits them.
- Image uploads work (Decap pushes them to `images/uploads/`).
- You define the schema → client only sees the fields you want them to edit. No way for them to break the layout.
- All the version history is in git. Roll back any change.

### What's annoying

- Setup takes ~30 minutes the first time.
- Client needs a GitHub account and to be invited to the repo (read access at minimum, but writing through Decap requires the OAuth handshake — Decap docs walk through this).
- The OAuth flow needs a small auth proxy. Easiest options:
  - **Netlify Identity** (free, but means hosting on Netlify, not GitHub Pages — adjacent rebellion territory)
  - **GitHub OAuth app** + a tiny serverless function (more work)
  - **Decap's own free OAuth service** for personal/hobby use

For **client work**, the cleanest path is to either:
- Host on **Netlify** (still static, still free) and use Netlify Identity. The rest of the Rebellion's GitHub Pages content (`03_BUILD_FLOW/04_deploy_pages.md`) translates directly to Netlify with no changes other than where you push.
- Or use **CloudCannon** ($25/mo for 3 sites; the same conceptual model as Decap but with managed auth and a nicer UI, geared at agency work).

### Why this is allowed in the Rebellion

The CLAUDE.md guardrail says "no frameworks or build tools." Decap is neither — it's a static overlay that edits files in the repo. The site itself remains plain HTML/CSS. So Decap is in-scope; Next.js / React / Sanity-with-its-own-runtime are still out.

---

## Tier 3 — Hosted headless CMS (post-rebellion)

When the client needs:
- Frequent new pages or blog posts (more than ~1/week)
- Multiple editors with different permissions
- Image management at scale (hundreds of photos)
- Structured data (products, locations, events) with cross-references
- Preview before publish

…you've outgrown the static-overlay model. The right answer is a hosted **headless CMS**:

- **Sanity** (sanity.io) — popular, generous free tier
- **TinaCMS** (tina.io) — git-backed like Decap but more polished, paid plans for teams
- **Contentful** (contentful.com) — enterprise-leaning
- **Storyblok** (storyblok.com) — visual editor, mid-market focus

But these require a **build step** — fetching content from the CMS and generating HTML, usually via Next.js/Nuxt/Eleventy/Astro/etc. **This crosses out of static-rebellion territory.**

When you hit this tier:
- **Be honest with the client.** "What you need is bigger than a static site. I can either recommend a colleague who does headless CMS work, or we can scope a v2 build down the line."
- **Don't half-do it.** Adding Sanity + a build step + a hosting upgrade as an "afterthought" turns a $5K project into a $15K rebuild.
- **Park it.** In the project state, note "considering Tier 3 CMS post-rebellion" and move on.

---

## Common pitfalls

- ❌ Reaching for Tier 2/3 when Tier 1 would do. Most clients edit text quarterly; they don't need a CMS UI.
- ❌ Recommending Sanity / Contentful when you've never set them up yourself. Different project entirely.
- ❌ Setting up Decap without giving the client a Loom training video. The UI is friendly but the GitHub OAuth flow scares people on first encounter.
- ❌ Forgetting to add the client as a GitHub collaborator before they try to log in.
- ❌ Letting the client edit HTML pages directly when they have no instinct for which characters are dangerous (closing tags, attributes).

---

## Update state

```markdown
## Progress
...
- ✓ CMS handoff — Tier <1 | 2 | 3>; <training delivered | training scheduled>
```

If Tier 3 was considered but deferred:

```markdown
## Scope changes
| 2026-06-01 | Tier 3 CMS (Sanity) considered, deferred to post-launch v2 | scope and price exceed current engagement |
```