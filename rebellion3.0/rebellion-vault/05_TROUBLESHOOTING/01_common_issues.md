# Common Issues

Quick lookup for the bugs that come up most. Use the debug protocol in `00_debug_protocol.md`; this file is the answer key.

---

## Deployment / GitHub Pages

### "404 — There isn't a GitHub Pages site here"

**Causes:**
- Pages not yet enabled in repo settings
- `index.html` not at repo root
- Wrong branch selected as source
- First deploy still building (wait 2 minutes)

**Fix:** Repo → Settings → Pages → confirm source branch is `main` and folder is `/ (root)`. Confirm `index.html` is in the repo root.

---

### CSS not loading on deployed site (works locally)

**Cause:** Absolute path. GitHub Pages serves your repo at `/<repo-name>/`, so `<link rel="stylesheet" href="/styles/main.css">` looks for `/styles/main.css` on the domain root.

**Fix:** Use relative paths.

```html
<!-- Bad -->
<link rel="stylesheet" href="/styles/main.css">

<!-- Good -->
<link rel="stylesheet" href="styles/main.css">
```

Same for `<img>` and `<script>` tags.

---

### Subpage 404s

**Cause:** Filename case mismatch. `about.html` and `About.html` are different on GitHub Pages.

**Fix:** Match the link `href` to the actual filename exactly. Convention: lowercase filenames everywhere.

---

### Custom domain shows certificate error

**Cause:** GitHub hasn't yet provisioned the SSL certificate for the custom domain.

**Fix:** Wait. Up to 24 hours, usually faster. Then enable **Enforce HTTPS** in Pages settings. If it still fails after 24 hours, toggle the custom domain off and back on.

---

### Custom domain shows "DNS check unsuccessful"

**Cause:** DNS records aren't propagated, aren't correct, or the domain isn't pointing where you think.

**Fix:** Run `dig yourname.com` from a terminal. Confirm A records point to the four GitHub IPs (185.199.108–111.153). Use **dnschecker.org** to confirm propagation. May take 15 minutes to an hour after change.

---

## Git / GitHub

### "Permission denied (publickey)"

**Cause:** SSH key not set up or not added to GitHub.

**Fix:** Run through `02_BASICS/03_github_and_ssh.md` again. Re-paste the public key into GitHub Settings → SSH and GPG keys.

---

### "Repository not found"

**Cause:** Remote URL is wrong, or the repo doesn't exist (or you don't have access).

**Fix:**
```
! git remote -v
```

Confirm URL matches the actual GitHub repo. If not:
```
! git remote set-url origin git@github.com:you/correct-repo.git
```

---

### "Failed to push some refs"

**Cause:** GitHub has commits you don't have locally.

**Fix:**
```
! git pull
! git push
```

If `git pull` complains about unrelated histories, the GitHub repo was initialized with a README/license but your local one wasn't:
```
! git pull origin main --allow-unrelated-histories
```

Then push.

---

### Accidentally committed a secret

**Cause:** API key, password, or `.env` file got committed.

**Fix:**
1. **Rotate the secret immediately** — change the password / regenerate the key. Assume it's compromised.
2. Add the file to `.gitignore`.
3. Remove from current commit:
   ```
   ! git rm --cached path/to/file
   ! git commit -m "Remove leaked file"
   ! git push
   ```
4. Note: it's still in Git history. For private hobby repos, that's usually fine after rotating. For public/sensitive cases, look up `git filter-repo` or BFG.

---

## Local development

### `! command not found`

**Cause:** The tool isn't installed (or isn't on the PATH).

**Fix:** Install it. Usually:
```
! brew install <tool>
```

For things like `gh`, `git`, `node`, etc.

---

### Port 8000 already in use (when running local server)

**Cause:** Another local server is still running from a previous session.

**Fix:** Pick a different port:
```
! python3 -m http.server 8080
```

Or kill the old server: `Ctrl+C` in the terminal where it's running. If you can't find it:
```
! lsof -ti:8000 | xargs kill
```

---

### "This file isn't loading even though it exists"

**Cause:** Most often a typo in the path or filename.

**Fix:** Check the actual filename in the project folder vs the path in the HTML. Watch for:
- Capitalization
- Extra spaces
- Wrong extension (`.jpeg` vs `.jpg`)
- Wrong subfolder

---

## Form / Stripe / 3rd party

### Formspree form submits but no email arrives

**Cause:** Email confirmation hasn't been completed, or it's in spam.

**Fix:**
- Check Formspree dashboard — there might be a pending confirmation email
- Check spam folder
- Confirm the form's `action` URL matches your endpoint

---

### Stripe Payment Link in test mode shows "this is a test"

**Cause:** You're using a test-mode link (correct for testing).

**Fix:** Switch the Stripe dashboard to live mode and create the link again. The new URL is the live one — replace it in your HTML.

---

### Stripe MCP says "not authenticated"

**Cause:** Auth flow didn't complete, or token expired.

**Fix:** Ask Claude to re-run the Stripe MCP authentication. Walk through the OAuth flow again.

---

## Editor / Claude Code

### Claude isn't reading project files I expect

**Cause:** Wrong project active, or you opened Claude in the wrong folder.

**Fix:**
```
! cat 01_STATE/active_project.md
```

If wrong, switch:
> Switch to <correct-project>.

If you started Claude in the wrong folder entirely: exit, `cd` to the right place, restart `claude`.

---

### Long chat is getting slow or weird

**Cause:** Context is full or close to it.

**Fix:** `/clear` and start a new chat. Save state first if mid-task.

---

## When none of these match

Run the debug protocol in `00_debug_protocol.md`. If still stuck, defer to Discord.
