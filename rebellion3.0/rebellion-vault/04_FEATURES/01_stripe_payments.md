# Stripe Payments

How to accept money on a static site. Three levels of complexity — start at level 1.

> 📺 Video (level 3 only): `VIDEO:stripe-mcp` — connecting Stripe MCP to Claude Code.

---

## When to read this

User wants to:
- Sell a product, service, or session
- Take a deposit
- Collect donations
- Charge for digital downloads

Static sites can't process payments themselves (no server). But Stripe has tools that work fine on a static site.

---

## The three-level ladder

Start at the lowest level that solves their problem.

### Level 1 — Stripe Payment Links (recommended for most)

A Payment Link is a hosted checkout page Stripe creates for you. You paste the URL into your site as a button.

**Pros:** No code, no auth, works in 5 minutes.
**Cons:** Can't customize the checkout look beyond Stripe's defaults.

**Setup:**
1. Sign up at **stripe.com** if needed.
2. Dashboard → **Payment Links** → **+ New**.
3. Configure:
   - Product name + price
   - One-time or subscription
   - Optionally: collect customer info, allow promo codes, redirect after payment
4. Click **Create link**. Copy the URL.

**Add to the site:**

```html
<a href="https://buy.stripe.com/xxx" class="button">Buy — $49</a>
```

That's it. Style the button however you like.

**Confirm and test**: have the user click it. They don't have to actually pay — just confirm Stripe's checkout page loads with the right product and price.

---

### Level 2 — Stripe Checkout / Buy Button (drop-in script)

If they want a slightly more integrated checkout (e.g., a button that opens checkout in a modal), Stripe provides a drop-in `<script>` they can paste.

**Setup:**
1. Stripe Dashboard → Products → create a product.
2. On the product page, click **Buy Button** (or **Checkout** depending on the dashboard version).
3. Stripe generates a snippet like:

   ```html
   <script async src="https://js.stripe.com/v3/buy-button.js"></script>
   <stripe-buy-button
     buy-button-id="buy_btn_xxx"
     publishable-key="pk_live_xxx">
   </stripe-buy-button>
   ```

4. Paste it into the HTML where the button should appear.

This works on a static site (no backend needed). Test it once deployed — sometimes embeds behave differently locally.

---

### Level 3 — Stripe MCP for Claude Code

If the user has a lot of products / wants Claude to be able to create products, prices, and links directly without dashboard-clicking, connect the Stripe MCP server.

**MCP** = Model Context Protocol. It lets Claude talk to Stripe's API on the user's behalf.

**Setup:**

1. In Claude Code, ask Claude to authenticate with Stripe:
   > Connect my Stripe account via MCP.

   Claude will run the `mcp__claude_ai_Stripe__authenticate` tool, which opens a Stripe OAuth flow in the user's browser. They sign in to Stripe and authorize.

2. Claude finishes the connection with `mcp__claude_ai_Stripe__complete_authentication`.

3. From then on, Claude can:
   - Create products and prices
   - Generate Payment Links
   - Look up orders, customers, etc.

**Use cases:**
- "Add a $49 'Coaching Session' product and create a payment link for it." → Claude does it via MCP.
- "What did I sell this month?" → Claude queries Stripe.

> 📺 Walkthrough: `VIDEO:stripe-mcp`.

**When to use level 3:**
- The user has many products or frequent updates
- They're comfortable connecting AI tools to financial accounts
- They want to manage Stripe from inside Claude rather than a separate dashboard

**When NOT to use level 3:**
- One product, set-and-forget → level 1 is simpler
- The user is uncomfortable with MCP / OAuth → level 1 or 2

---

## Test mode vs live mode

Stripe has a **test mode** toggle in the dashboard. Test mode uses fake card numbers (e.g., `4242 4242 4242 4242`) and never charges real money.

Always test in test mode first. Then switch the dashboard to live mode and use the live Payment Link / Buy Button (the URL/embed regenerates).

---

## Compliance basics (don't skip)

- **Privacy policy / terms** — most countries require these for taking payments. Stripe links to a basic generator, or use a free one (e.g., termsfeed.com).
- **Refund policy** — visible somewhere on the site, even if it's "no refunds."
- **Tax** — Stripe Tax can handle this if you're selling internationally. For domestic-only side projects, your country's threshold may exempt you. Not legal advice — check.

If the user asks "do I need an LLC / business license / tax ID?" — defer to Discord. Out of scope here.

---

## Common pitfalls

- ❌ Using live keys in test mode (or vice versa)
- ❌ Hard-coding API keys in HTML/JS — never do this. Payment Links and Buy Buttons don't need them; the MCP keeps them server-side.
- ❌ Forgetting to test the live Payment Link after going live (paste it into the live site, test in incognito)
- ❌ Skipping privacy policy

---

## Update state

```markdown
## Progress
...
- ✓ Stripe payment integration (Level <1/2/3>) — <description>
```

Add to `01_STATE/user_knowledge.md`:

```
- Has a Stripe account: yes
- Stripe MCP connected: <yes/no>
```
