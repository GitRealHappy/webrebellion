# Deployment: Taking Your Site Live

You've built something. Now let's put it on the internet.

This is one of the most satisfying moments in web development — watching your local files become a real, public website that anyone can visit.

---

## What "Deployment" Actually Means

When your site is just files on your computer, only you can see it. **Deployment** is the process of putting those files somewhere on the internet where browsers can request them.

For static sites (HTML, CSS, JavaScript, images), this is simple:
1. Upload your files to a server
2. Point a URL at that server
3. Done

We use **GitHub Pages** because it's free, reliable, and you're already using GitHub for version control. Your repository becomes your website.

---

## Part 1: Deploying to GitHub Pages

### Prerequisites

Before you deploy:
- Your project is a Git repository
- It's pushed to GitHub
- You have an `index.html` file in the root (or in a `/docs` folder)

### Step-by-Step Deployment

1. **Go to your repository on GitHub**
   
   Navigate to `github.com/your-username/your-repo-name`

2. **Open Settings**
   
   Click the "Settings" tab (gear icon) near the top of the page

3. **Find Pages**
   
   In the left sidebar, scroll down and click "Pages"

4. **Configure the source**
   
   Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` (or `master` if that's your default)
   - **Folder:** Select `/ (root)` unless your site is in a `/docs` folder
   
   Click **Save**

5. **Wait for deployment**
   
   GitHub will build and deploy your site. This usually takes 1-3 minutes, but can take longer for the first deployment.

6. **Find your URL**
   
   Once deployed, you'll see a message at the top of the Pages settings:
   
   > Your site is live at `https://your-username.github.io/your-repo-name/`

   Click the link. Your site is now on the internet.

### Troubleshooting Common Issues

**Site not appearing?**
- Make sure `index.html` is in the root of your repository (not inside a subfolder, unless you configured `/docs`)
- Check that you selected the correct branch
- Wait a few more minutes — first deployments can be slow
- Try toggling the branch setting: set to "None", save, then set back to `main`, save again

**404 errors on subpages?**
- Check your file paths. GitHub Pages is case-sensitive. `About.html` and `about.html` are different files.
- Make sure your links use the correct relative paths

**CSS not loading?**
- Check your `<link>` tag path in the HTML
- Paths are relative to the HTML file, not the repository root

---

## Part 2: Understanding What's Happening

When someone visits `https://your-username.github.io/your-repo-name/`:

1. Their browser sends a request to GitHub's servers
2. GitHub looks up your repository and finds the `index.html` file
3. GitHub sends that file back to the browser
4. The browser reads the HTML, sees links to CSS/JS/images, and requests those too
5. The browser renders everything into the page the visitor sees

This all happens in milliseconds. Your files are being served from GitHub's global network of servers (CDN), which means fast load times worldwide.

### HTTPS: Security by Default

Notice your URL starts with `https://` — the "s" stands for "secure."

GitHub Pages automatically provides HTTPS, which means:
- Data between the visitor and your site is encrypted
- Browsers show a padlock icon (trust signal)
- Search engines prefer HTTPS sites
- Some modern browser features only work over HTTPS

You don't have to configure this. GitHub handles it. But you should understand that it matters.

---

## Part 3: Custom Domains

`your-username.github.io/your-repo-name` works, but it's not very professional. Let's connect a real domain like `yourname.com`.

### What You Need

1. **A domain name** — Purchase from a registrar like:
   - Namecheap (recommended for beginners)
   - Cloudflare Registrar (cheapest renewals)
   - Google Domains (now part of Squarespace)
   - Porkbun (good prices, simple interface)

2. **Access to DNS settings** — Your registrar provides this

### Understanding DNS (The Phone Book of the Internet)

DNS (Domain Name System) translates human-readable names (`yourname.com`) into IP addresses that computers use to find servers.

When you "point" a domain at GitHub Pages, you're creating DNS records that say: "When someone asks for `yourname.com`, send them to GitHub's servers."

### Types of DNS Records You'll Use

**A Record (Address Record)**
- Points a domain directly to an IP address
- Used for root domains (`yourname.com`)
- GitHub Pages IP addresses (as of 2024):
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

**CNAME Record (Canonical Name)**
- Points a subdomain to another domain name
- Used for `www.yourname.com` → points to `your-username.github.io`
- Cannot be used on root domains (with some exceptions)

**AAAA Record (IPv6 Address)**
- Like an A record, but for IPv6 addresses
- Optional but recommended for modern compatibility
- GitHub Pages IPv6 addresses:
  ```
  2606:50c0:8000::153
  2606:50c0:8001::153
  2606:50c0:8002::153
  2606:50c0:8003::153
  ```

### Step-by-Step: Connecting a Custom Domain

#### Option A: Apex Domain (`yourname.com`)

1. **Add A records in your DNS settings**
   
   Go to your domain registrar's DNS management. Add four A records:
   
   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   
   The `@` symbol means "the root domain" (yourname.com itself).

2. **Add AAAA records (recommended)**
   
   | Type | Name | Value |
   |------|------|-------|
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |

3. **Add a CNAME for www (recommended)**
   
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | www | your-username.github.io |
   
   This makes `www.yourname.com` work too.

4. **Configure GitHub Pages**
   
   - Go to your repo → Settings → Pages
   - Under "Custom domain", enter `yourname.com`
   - Click Save
   - Check "Enforce HTTPS" (may take a few minutes to become available)

5. **Create a CNAME file in your repository**
   
   Create a file called `CNAME` (no extension) in your repository root containing just your domain:
   ```
   yourname.com
   ```
   Commit and push this file.

6. **Wait for DNS propagation**
   
   DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide. Usually it's under an hour.

#### Option B: Subdomain Only (`www.yourname.com`)

If you only want `www.yourname.com` (not the bare `yourname.com`):

1. **Add a CNAME record**
   
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | www | your-username.github.io |

2. **Configure GitHub Pages**
   
   - Custom domain: `www.yourname.com`
   - Enable HTTPS

3. **Create CNAME file** with `www.yourname.com`

### Verifying Your Setup

**Check DNS propagation:**
- Use [dnschecker.org](https://dnschecker.org) to see if your records have propagated globally
- Or run `dig yourname.com` in your terminal

**Check GitHub's verification:**
- In Settings → Pages, GitHub will show a checkmark when DNS is verified
- If there's an error, it will tell you what's wrong

**Test HTTPS:**
- After DNS propagates, check "Enforce HTTPS" in GitHub Pages settings
- GitHub will automatically provision an SSL certificate (this can take up to 24 hours)

---

## Part 4: Updating Your Deployed Site

Once deployed, updating is simple:

1. Make changes to your local files
2. Commit the changes: `git add . && git commit -m "Update homepage"`
3. Push to GitHub: `git push origin main`
4. GitHub Pages automatically rebuilds (usually within 1-2 minutes)
5. Refresh your live site to see changes

That's it. No manual upload, no FTP, no complicated deploy process. Push to GitHub, and your site updates.

### Checking Deployment Status

If your changes aren't appearing:
- Go to your repo on GitHub
- Click the "Actions" tab
- You'll see the deployment workflow running (or completed/failed)
- Click on it to see details and any error messages

---

## Part 5: Best Practices

### Always Use HTTPS
- Never disable HTTPS enforcement
- If you're linking to external resources (fonts, scripts), use `https://` URLs

### Keep Your CNAME File
- If you're using a custom domain, the `CNAME` file must stay in your repo
- If you accidentally delete it, your custom domain will stop working

### Test Before You Push
- Always preview your site locally before pushing
- Open `index.html` in your browser and click around
- Check for broken links and missing images

### Use Relative Paths
- Link to your own files with relative paths: `./styles.css`, `./images/photo.jpg`
- This ensures your site works both locally and when deployed

---

## Summary

- **GitHub Pages** hosts your static site for free directly from your repository
- **Deploy** by enabling Pages in your repo settings and selecting a branch
- **Custom domains** require DNS configuration (A records for apex, CNAME for www)
- **HTTPS** is automatic and should always be enforced
- **Updates** are automatic when you push to your main branch

---

## Next Steps

Once your site is live:
1. Share the URL — you built something real
2. Keep iterating — make changes, push, see them live
3. Consider a custom domain when you're ready to go professional

You're no longer just learning. You're shipping.
