# Email at Your Domain

A custom email like `hi@yoursite.com` or `jane@oakmoss.studio` instead of `your.brand@gmail.com`. Looks professional, costs $0 to a few dollars a month, doesn't require you to change anything about your site.

The key thing to know: **email and your website are completely separate systems** that just happen to share a domain. Adding email never touches your site or breaks your GitHub Pages hosting.

---

## When to read this

User says:
- "I want an email at my domain"
- "How do I get hi@mysite.com?"
- "Set up custom email"
- "Will email break my site?"

---

## DNS recap (read this first if you skipped it)

Your domain registrar holds a list of DNS records. Each record points one type of traffic somewhere:

| Record type | Points to | Used for |
|---|---|---|
| **A** / **AAAA** | An IP address | Website hosting (GitHub Pages) |
| **CNAME** | Another domain | Website (e.g., `www` → `username.github.io`) |
| **MX** | A mail server | Email |
| **TXT** | Plain text | Verification, SPF, DKIM, DMARC (anti-spam) |

You set the A records during `03_BUILD_FLOW/05_custom_domain.md`. **Adding MX records does not touch A records.** Site keeps working. Email starts working when DNS propagates (usually 15 minutes to an hour).

---

## Three options, cheapest to most full-featured

### Option A — Cloudflare Email Routing (free, forwarding only)

Forwards `hi@yoursite.com` to your existing personal Gmail/iCloud/whatever inbox. You **read and reply from your existing account**, and Cloudflare can rewrite the "from" address so replies appear to come from your domain.

**Limitations:**
- You can't actually log in as `hi@yoursite.com`. There's no inbox to log into.
- Replies look like they come from your domain if you set up "Send as" in Gmail (extra 5-minute step).
- Free up to 200 addresses forwarded.

**When it's right:**
- Hobby site, personal portfolio, side project
- You don't want another inbox to check
- You're already using Gmail/iCloud heavily

**Setup:**

1. Move your domain's DNS to Cloudflare if it's not already there (free; transfer nameservers at your registrar). This is the only step that touches existing records — Cloudflare imports your A/CNAME records automatically, but **verify they all came across** before flipping nameservers.
2. In the Cloudflare dashboard → your domain → **Email** → **Email Routing**.
3. Click "Get started." Cloudflare adds the necessary MX + TXT records automatically.
4. Add a route: `hi@yoursite.com` → `your.real.address@gmail.com`. Confirm by clicking the link Cloudflare sends to the destination address.
5. Send a test email to `hi@yoursite.com` from a different account. It should land in your real inbox within a minute.

**Optional "Send As":** in Gmail → Settings → Accounts → "Send mail as" → Add another address. Use Cloudflare's SMTP relay or follow Gmail's flow. After this, replying from Gmail shows your domain as the sender.

---

### Option B — Google Workspace ($6+ /user/month)

A real Gmail inbox at your domain. Identical to consumer Gmail but with your email. Includes Drive, Calendar, Meet, Docs at your domain.

**When it's right:**
- You're running a business (client work, ecommerce, freelance)
- You want a separate inbox you log into
- You already live in Google's ecosystem
- You want a paper trail / professional appearance for client emails

**Setup:**

1. Sign up at **workspace.google.com**. Pick the Business Starter plan ($6/user/month at time of writing).
2. During signup, Google asks for your domain. Enter it.
3. Google gives you a list of **MX records** to add at your registrar, plus a **TXT record** to verify ownership. Add them at your DNS provider (Cloudflare, Namecheap, GoDaddy, wherever).
4. Wait 5–30 minutes for DNS to propagate. Click "Verify" in Workspace.
5. Create your user(s): `you@yoursite.com`.
6. Log in at **mail.google.com** with the new address.

Your A records for the website are untouched. The site keeps serving from GitHub Pages.

---

### Option C — Fastmail ($5/user/month)

A real mailbox like Workspace, but from a small independent company. Clean UI, faster than Gmail, no AI training on your email, supports custom domains on the cheapest plan.

**When it's right:**
- You want Workspace's "real inbox" feature without Google
- You care about privacy
- You don't need the Docs/Drive ecosystem

**Setup:**

1. Sign up at **fastmail.com**. Pick the Standard plan ($5/user/month at time of writing).
2. In Settings → Domains, add your domain.
3. Fastmail provides MX + TXT records. Add them at your DNS provider.
4. Verify and create the address.

Same DNS pattern as Workspace — MX records sit alongside your A records.

---

## How MX records coexist with GitHub Pages A records

This is the question users always ask: "Will adding email break my site?"

No. Here's why:

A DNS lookup for `yoursite.com` returns different records for different protocols:
- Browser asks "what's the A record?" → gets GitHub Pages IPs → loads your site.
- Mail server asks "what's the MX record?" → gets your email provider → delivers mail.

They never collide. You can have all of these active at the same domain:

```
Type    Name    Value
A       @       185.199.108.153    ← GitHub Pages
A       @       185.199.109.153    ← GitHub Pages
A       @       185.199.110.153    ← GitHub Pages
A       @       185.199.111.153    ← GitHub Pages
CNAME   www     yourusername.github.io.
MX      @       10 route1.mx.cloudflare.net.   ← email
MX      @       20 route2.mx.cloudflare.net.
TXT     @       "v=spf1 include:_spf.mx.cloudflare.net ~all"   ← anti-spam
```

The TXT records (SPF, DKIM, DMARC) tell receiving mail servers your domain is legitimately sending mail — without them, your email lands in spam. Cloudflare / Workspace / Fastmail set these up automatically when you follow their guided flow.

---

## Test it

1. Send an email **to** your new address from a different account (gmail.com, etc.). It should arrive.
2. Send an email **from** your new address to a Gmail account. Open it in Gmail and click "Show original." Look for:
   - `SPF: PASS`
   - `DKIM: PASS`
   - `DMARC: PASS`
   If any say `FAIL` or `NEUTRAL`, your TXT records aren't right yet — give it 30 more minutes for DNS, then check again.
3. Send the test email's content to **mail-tester.com** (the address they give you). Score 9/10 or 10/10 = you're good. Below that, it'll tell you which records are missing.

---

## Common pitfalls

- ❌ Changing nameservers at the registrar without first confirming all current DNS records will copy over — easy to silently lose your GitHub Pages A records this way
- ❌ Skipping the SPF / DKIM / DMARC TXT records — your email works, but it lands in spam
- ❌ Using `mailto:` links and a custom domain inbox without testing replies actually reach you
- ❌ Buying a Workspace seat for every staff member when forwarding would do
- ❌ Confusing "I have a custom email" with "I have a real inbox." Cloudflare forwarding has no inbox to log into.

---

## Update state

Add to `01_STATE/user_knowledge.md`:

```
- Has custom email at domain: yes (<Cloudflare forwarding | Workspace | Fastmail>)
```

Add to `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Custom email at domain — <provider>
```