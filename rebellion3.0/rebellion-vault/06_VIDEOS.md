# Videos

Single source of truth for every instructional video. All links are private (unlisted) YouTube — only people with the link can view.

When other markdown files reference a video, they use the **key** (e.g., `VIDEO:ssh-setup`). Claude looks up the URL here.

---

## Naming convention

Each entry has the form:

```
### VIDEO:<key>
**Purpose:** <one-line description>
**Length:** <approx, e.g., "3 min">
**URL:** <unlisted YouTube link>
```

Keys are kebab-case, no `VIDEO:` prefix in the heading anchor. Other files reference them as `VIDEO:<key>`.

To add a new video: append a new section here, pick a key not already in use, fill in the fields. Other files reference by key; the URL stays only here.

---

## Index

- [VIDEO:terminal-nav](#videoterminal-nav) — terminal/zsh basics
- [VIDEO:github-account](#videogithub-account) — creating a GitHub account
- [VIDEO:ssh-setup](#videossh-setup) — SSH key generation + adding to GitHub
- [VIDEO:first-repo](#videofirst-repo) — creating local + remote repo
- [VIDEO:first-push](#videofirst-push) — first commit and push
- [VIDEO:github-pages-live](#videogithub-pages-live) — enabling GitHub Pages
- [VIDEO:custom-domain](#videocustom-domain) — DNS setup for custom domain
- [VIDEO:stripe-mcp](#videostripe-mcp) — connecting Stripe MCP to Claude Code

---

## VIDEO:terminal-nav

**Purpose:** Quick tour of zsh/bash navigation — `pwd`, `ls`, `cd`, tab completion, `open`.
**Length:** ~3 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:github-account

**Purpose:** Sign up for GitHub — what to enter, what plan to pick.
**Length:** ~2 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:ssh-setup

**Purpose:** Generate an SSH key, add it to GitHub, test the connection.
**Length:** ~4 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:first-repo

**Purpose:** Create a local Git repo and connect it to a new GitHub remote.
**Length:** ~3 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:first-push

**Purpose:** First `git add`, `git commit`, `git push` — what each does.
**Length:** ~3 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:github-pages-live

**Purpose:** Turn on GitHub Pages, get the live URL, see the site online.
**Length:** ~3 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:custom-domain

**Purpose:** Buy a domain, configure DNS records, point it at GitHub Pages, enable HTTPS.
**Length:** ~5 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## VIDEO:stripe-mcp

**Purpose:** Connect Stripe MCP to Claude Code — OAuth flow, what Claude can do once connected.
**Length:** ~4 min
**URL:** <!-- TODO: paste private YouTube link -->

---

## How Claude resolves a video reference

When the user asks "show me the SSH setup video", Claude:

1. Greps this file for `VIDEO:ssh-setup`
2. Returns the URL from the matching section
3. If the URL is still a `<!-- TODO -->` placeholder, says so honestly: "That video isn't linked yet — JJ hasn't posted it. Want to skip ahead with the written instructions in `02_BASICS/03_github_and_ssh.md`?"

Don't fabricate a URL.
