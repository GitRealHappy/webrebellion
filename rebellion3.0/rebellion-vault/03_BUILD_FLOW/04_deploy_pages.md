# Deploy to GitHub Pages

Taking the site live. One of the most satisfying moments in the whole rebellion.

> 📺 Video: `VIDEO:github-pages-live` — full walkthrough.

---

## Prerequisites

Before deploying, the active project must:
- Be a Git repo (`.git/` folder exists)
- Have a remote on GitHub (set up in `02_BASICS/04_local_to_remote.md`)
- Have an `index.html` at the project root
- Have all changes committed and pushed

If any of those aren't true, fix them first. Don't try to deploy something that isn't on GitHub yet.

---

## The flow

### 1. Push the latest code

```
! cd 07_PROJECTS/<active> && git add . && git commit -m "Pre-deploy" && git push
```

Skip the commit step if there's nothing to commit.

### 2. Enable GitHub Pages

Two options.

**Option A — via GitHub CLI (cleanest):**

```
! gh api -X POST repos/:owner/<repo-name>/pages -f source[branch]=main -f source[path]=/
```

(Replace `:owner` with the username and `<repo-name>` with the repo. Claude will fill these in from the repo URL.)

**Option B — via web UI:**

1. Go to `github.com/<you>/<repo>/settings/pages`
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

### 3. Wait

First deploy takes 1–3 minutes. Sometimes longer.

You can poll the status:

```
! gh api repos/:owner/<repo>/pages
```

Or just refresh the Pages settings page.

### 4. Get the URL

When ready, GitHub shows:

> Your site is live at https://<you>.github.io/<repo>/

Tell the user. Open it:

```
! open https://<you>.github.io/<repo>/
```

### 5. Update state

```markdown
## Progress
- ✓ Project folder created
- ✓ HTML structure
- ✓ Styled
- ✓ Deployed to GitHub Pages — https://<you>.github.io/<repo>/
- ◯ Custom domain (optional)
```

Suggest celebrating and posting in the Discord:

> Worth a post in the Discord — folks love seeing first deploys: https://discord.gg/vGnMSxBsj

---

## Troubleshooting

**404 at the URL**
- Confirm `index.html` is at the **root** of the repo, not in a subfolder
- Confirm Pages is set to deploy from the right branch and `/ (root)`
- Wait another minute and retry — first deploys can be slow

**CSS / images not loading**
- Use **relative paths** (`styles/main.css`, not `/styles/main.css`)
- GitHub Pages serves your repo at `/<repo>/`, so absolute paths starting with `/` will be wrong
- Case sensitivity matters on GitHub Pages — `Image.JPG` and `image.jpg` are different

**404 on subpages**
- Same case-sensitivity issue
- Check the link path matches the actual filename exactly

**"Workflow run failed" in Actions tab**
- Check the Actions tab on GitHub for error details
- Most often: a malformed file or a missing reference

---

## Updates after deployment

Every push to `main` redeploys automatically. No manual step.

```
! git add . && git commit -m "Update homepage" && git push
```

Wait a minute, refresh the live site, see the change.

---

## HTTPS

GitHub Pages provides HTTPS automatically. The URL starts with `https://`. Don't change this.

If you connect a custom domain (`05_custom_domain.md`), there's an extra step to enforce HTTPS on the custom domain — covered there.

---

## When to suggest a custom domain

If they have a strong brand, are doing client work, or are selling something — suggest it.

Otherwise, the `username.github.io/repo-name` URL is fine for personal projects, portfolios, and side projects. Don't push a domain purchase on someone who doesn't need one.

If they want to proceed: route to `05_custom_domain.md`.

---

## Don't do

- ❌ Deploy with uncommitted changes (the live site won't reflect them)
- ❌ Push to a branch other than `main` and wonder why nothing's happening
- ❌ Use absolute paths starting with `/` for assets (will break on Pages)
- ❌ Push secrets — even after deletion, they're in Git history
- ❌ Forget to celebrate. This is a real milestone.
