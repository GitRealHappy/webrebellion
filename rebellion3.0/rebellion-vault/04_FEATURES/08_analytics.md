# Analytics

Knowing how many people visit, what pages they read, where they come from. On a static site, you have three reasonable options. Two are privacy-friendly, one is the industry-default Google option.

For most Rebellion-scale sites, **privacy-friendly is the right pick** — simpler legal posture, no cookie banner needed, more honest numbers.

---

## When to read this

User says:
- "Add analytics"
- "Track visitors"
- "See traffic"
- "How do I know if anyone is visiting?"
- "What's GA4?"

---

## Three options

### Option A — Plausible (recommended for most)

- **plausible.io** — ~$9/month for sites under 10K monthly visitors.
- **Cookieless** — no cookies, no GDPR/CCPA banner needed.
- One small `<script>` tag, ~1KB.
- Dashboard shows page views, sources, devices, top pages, conversions.
- No personal data collected. Doesn't track users across sites.
- Open-source; can be self-hosted if you really want to.

**When it's right**: any project where the basic numbers (visits, traffic source, top pages) are enough — which is most projects.

**Setup**:

1. Sign up at **plausible.io**, add your domain.
2. Copy the script tag they give you. Paste it in `<head>` on every page:

   ```html
   <script defer data-domain="yoursite.com" src="https://plausible.io/js/script.js"></script>
   ```

3. Deploy. Within 10 minutes, the dashboard shows real-time visitors.

### Option B — Fathom

- **usefathom.com** — $15/month, similar shape to Plausible.
- Same cookieless, banner-free benefits.
- Slightly cleaner UI; small team based in Canada.
- Different feature mix (Plausible has better goals/funnels; Fathom has nicer reports).

**When it's right**: same use cases as Plausible. Pick based on which dashboard you prefer (free 7-day trials on both).

**Setup**: identical pattern — sign up, paste the snippet, deploy.

### Option C — Google Analytics 4 (GA4)

- **Free** at any scale.
- Most powerful and most complex; the industry default.
- **Drops tracking cookies** → requires a cookie consent banner in EU/UK/California (see `11_legal_pages.md`).
- Privacy posture: Google reads your traffic. Data goes into Google's broader graph.
- Dashboard is overwhelming for small sites — most of the depth isn't useful at low scale.

**When it's right**:
- Client requires GA4 specifically (some agencies / marketers do).
- You need GA4's depth (custom events, e-commerce attribution, integration with Google Ads).
- You're integrating with other Google services (Search Console, Google Ads, Tag Manager).

**Setup**:

1. Sign in to **analytics.google.com**, create a property for your site.
2. Google gives you a Measurement ID like `G-XXXXXXX`.
3. Add to every page's `<head>`:

   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXX');
   </script>
   ```

4. Add a cookie banner (see `11_legal_pages.md` — the banner-needed section).
5. Update your privacy policy to mention GA4.

---

## GitHub Pages + custom domain caveats

Three things to watch for:

### 1. The script needs to load on the live domain, not `username.github.io`

Plausible / Fathom / GA4 all care about the `data-domain` (or property domain) matching the **actual URL the visitor sees**. If your site is at a custom domain (e.g., `oakmoss.studio`) but you tested on `username.github.io`, hits register against the wrong domain.

Fix: set the `data-domain` attribute (Plausible/Fathom) or the property URL (GA4) to your **custom domain**. The script will start counting hits once visitors land there.

### 2. Don't add analytics until the site is live

The script will record your own loading-the-page-during-development hits as real visitors. Either:
- Add analytics **after** going live.
- Or exclude your IP in the analytics dashboard (Plausible / Fathom have "exclude my visits" via a localStorage flag or IP filter).

### 3. Subdomain redirects don't transfer

If `oakmoss.studio` redirects to `www.oakmoss.studio` (or vice versa), the analytics script may register both as separate properties. Pick one as canonical (set in the analytics dashboard) and make sure the redirect is in place at the DNS / hosting level.

---

## What to actually look at

Don't drown in dashboards. For a small site, **four numbers** are enough:

1. **Total visits last 7 days** — am I growing?
2. **Top 3 pages** — what are people actually reading?
3. **Top traffic sources** — where are they coming from? (Direct? Google? Twitter? A specific link?)
4. **Top "exit" page (if available)** — where do people leave? Often signals a UX issue on that page.

Check these once a week. More often is a procrastination habit.

---

## Conversion tracking (optional)

If you have a contact form or Stripe button, you can track how often visitors actually take that action. Plausible and Fathom call these **goals**; GA4 calls them **conversions**.

Plausible example — track the contact form submission:

1. In the form, add an `onsubmit` handler:

   ```html
   <form action="https://formspree.io/f/abc123" method="POST" onsubmit="plausible('Contact')">
     <!-- fields -->
   </form>
   ```

2. In the Plausible dashboard → **Goals** → add a custom event named "Contact".

3. After someone submits, the goal increments. You can see the rate (submissions / visits) over time.

Same pattern for Stripe Payment Link clicks — wrap the link in an `onclick`:

```html
<a href="https://buy.stripe.com/xxx" onclick="plausible('Purchase Click')" class="button">Buy — $49</a>
```

Don't overdo this. Two or three goals is enough; tracking everything just produces noise.

---

## Common pitfalls

- ❌ Adding GA4 + cookie banner + privacy policy update when Plausible would have skipped all three steps.
- ❌ Checking analytics every hour for a site with 50 visits/week. Once a week is plenty.
- ❌ Forgetting to update `11_legal_pages.md` to disclose what's being tracked.
- ❌ Adding analytics to the test deployment and getting weeks of self-traffic baked in.
- ❌ Setting up advanced GA4 events on a brand-new site. Get visitors first; track conversions later.

---

## Update state

Add to `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Analytics — <Plausible | Fathom | GA4>
```

Add to `01_STATE/user_knowledge.md`:

```
- Analytics provider: <Plausible | Fathom | GA4 | none>
```