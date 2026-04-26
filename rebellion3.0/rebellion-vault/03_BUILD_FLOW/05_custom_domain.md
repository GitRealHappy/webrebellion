# Custom Domain

Pointing a real domain (like `yourname.com`) at your GitHub Pages site.

> 📺 Video: `VIDEO:custom-domain` — DNS walkthrough.

---

## What you need

1. **A domain you've purchased** from a registrar (Namecheap, Cloudflare, Porkbun, etc.)
2. **The site already deployed to GitHub Pages** (see `04_deploy_pages.md`)
3. **DNS access** at your registrar (every registrar provides this)

If you don't have a domain yet, recommend:
- **Cloudflare Registrar** — cheapest renewals, no markup
- **Porkbun** — clean UI, good prices
- **Namecheap** — beginner-friendly

GoDaddy and Squarespace work but are pricier and pushier.

---

## A bit of theory (only what's needed)

DNS = phone book of the internet. When someone types `yourname.com`, DNS translates that into "go talk to GitHub's servers."

You'll add records at your registrar that say:
- "For `yourname.com`, send traffic to GitHub Pages."
- "For `www.yourname.com`, also send traffic to GitHub Pages (or to `yourname.com`)."

GitHub will check those records and, when they match, give you HTTPS for the domain too.

---

## The DNS records

GitHub Pages IPs (as of 2024 — verify if any of these change):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

IPv6 (optional but recommended):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

---

## Setting it up

### Option A: Apex domain (`yourname.com`)

This is the most common case.

**At your registrar's DNS settings, add four A records:**

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

`@` means "the root domain itself" (i.e., `yourname.com`).

**Add four AAAA records (recommended):**

| Type | Name | Value |
|---|---|---|
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

**Add a CNAME for `www`:**

| Type | Name | Value |
|---|---|---|
| CNAME | www | yourusername.github.io |

This makes both `yourname.com` and `www.yourname.com` work.

---

### Option B: Subdomain only (`www.yourname.com`)

If you only want the `www` version (or you're using a subdomain like `blog.yourname.com`):

| Type | Name | Value |
|---|---|---|
| CNAME | www (or `blog`) | yourusername.github.io |

No A records needed. Apex domain (`yourname.com`) won't work in this setup unless you add A records too.

---

## Tell GitHub about the domain

1. **Repo → Settings → Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourname.com` or `www.yourname.com`)
3. Click **Save**
4. GitHub creates a `CNAME` file in your repo automatically (commit it; don't delete it)

### Enforce HTTPS

After DNS is verified (can take a few minutes to a few hours):
- Tick **Enforce HTTPS** in the Pages settings

GitHub provisions a free SSL certificate via Let's Encrypt. This sometimes takes up to 24 hours; usually much faster.

---

## Verify it worked

```
! dig yourname.com
! dig www.yourname.com
```

You should see GitHub's IPs or your `username.github.io` in the answer.

Or use the web tool: **https://dnschecker.org** — shows propagation worldwide.

Then open the domain in a browser. Should serve your site over HTTPS.

---

## Common problems

**"Domain's DNS record could not be retrieved"**
DNS hasn't propagated yet. Wait 15 minutes and refresh.

**"This site can't be reached"**
DNS records might be wrong. Double-check the values exactly. `dig` from the command line shows what's actually configured.

**"Your connection is not private" / certificate warning**
HTTPS isn't yet provisioned. Wait an hour, then re-check **Enforce HTTPS**.

**`CNAME` file disappeared**
If you delete the `CNAME` file from the repo, the custom domain breaks. Re-enter it in Pages settings to recreate.

**Apex domain works, www doesn't (or vice versa)**
Missing the corresponding record. Both apex (A records) and www (CNAME) should be configured for full coverage.

---

## Update state

```markdown
## Progress
- ✓ Deployed to GitHub Pages
- ✓ Custom domain — yourname.com
```

---

## Don't do

- ❌ Buy a `.io` or `.dev` because they're trendy if a `.com` is available and reasonable
- ❌ Use a registrar's "premium" hosting upsell — GitHub Pages is fine
- ❌ Set up DNS at one provider while domain is at another, unless you know what you're doing
- ❌ Disable HTTPS to "make it work" — that means DNS isn't right yet
