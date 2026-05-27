# Handoff and Training

The last week of the project. Where many freelancers drop the ball — they deliver code and disappear, leaving the client confused and the relationship sour.

Done right, handoff is the step that turns a one-off project into a referral and (optionally) a retainer.

---

## When to read this

User says:
- "How do I deliver the site?"
- "What access do I give the client?"
- "Final invoice"
- "Training the client"
- "Edit-it-yourself doc"

---

## The final-invoice gate

The non-negotiable rule (from `05_invoicing_and_payment.md`):

```
Site is on staging → client reviews → final invoice sent →
client pays → access transferred + production goes live
```

**You do not transfer admin access or flip the DNS until the final invoice clears.** This isn't about distrust; it's about leverage. Once the site is fully theirs and live, your bargaining position evaporates.

If a client pushes back hard ("we need it live first"): see `05_invoicing_and_payment.md` — at minimum, hold back **repo admin** until payment clears.

---

## What you deliver

Make a checklist. Walk through it on the final call.

### Access transfer

Decision tree: does the client need ongoing technical access?

**If yes (they'll edit / maintain it themselves):**
- GitHub repository — invite their account as **admin** (so they can change collaborators later)
- Domain registrar — transfer to their account, or get the login if they registered it themselves
- DNS provider (Cloudflare, etc.) — transfer or share login
- Stripe / Formspree / MailerLite / analytics — they own the accounts, you remove yourself

**If no (you'll maintain it for them via retainer):**
- Keep the GitHub repo on your account; give them read-only or no access
- Domain stays with them (always)
- Set up a separate user/seat for them in each third-party tool if they need to log in occasionally

The default expectation for indie freelancers: **the client owns their own infrastructure.** You're working on their stuff; you're not landlording it. If you keep admin and the client wants to leave you in a year, the messy exit will follow you.

### Files / repository state

Before final delivery, do a cleanup pass:

- Remove `.env` files, API keys, anything personal
- Remove placeholder content / `TODO` comments
- Squash messy commit history if needed (or just leave it — git history is usually fine to hand over)
- Update the project's `README.md` with a 3-line description of what the site is and where it's deployed
- Ensure `.gitignore` is sensible

### Documentation: the "edit-it-yourself" doc

One page. Maximum two pages. Lives in the repo as `README.md` or `HANDOFF.md`.

Structure:

```markdown
# Editing your site

## Where the site lives
- **Live site**: https://oakmoss.studio
- **Code**: github.com/oakmoss/site-repo
- **Hosting**: GitHub Pages (auto-deploys from the `main` branch)

## How to make a change

### Edit text on a page
1. Go to github.com/oakmoss/site-repo
2. Click the file you want (e.g., `about.html`)
3. Click the pencil icon (✎) top-right
4. Edit
5. Click "Commit changes" at the bottom
6. Wait 1–2 minutes, change is live

### Add a photo
1. In the repo, navigate to `images/`
2. Click "Add file" → "Upload files"
3. Drag the photo in. Use a meaningful name (`hero-2026.jpg`, not `IMG_8847.jpg`)
4. Commit changes
5. To use it on a page, reference it as `<img src="images/hero-2026.jpg" alt="...">`

### Change the colors / fonts
- Open `styles.css` in the repo
- The colors are at the top, in a `:root` block. Edit any value to change it site-wide.
- Same for spacing and fonts.

## Things that will break the site
- Don't edit anything in `<head>` unless you know what you're doing
- Don't delete `index.html` or rename it
- Don't add a `/` to the beginning of image paths (use `images/x.jpg`, not `/images/x.jpg`)

## When something does break
1. In the repo, click the "Commits" link in the toolbar
2. Find the commit before the broken change
3. Click the "<>" icon next to it ("Browse the repository at this point")
4. Or: ask Jane (jane@janedoe.com) — first 30 days of fixes are included

## Who to call
- **Domain / DNS issues**: your registrar (Namecheap, GoDaddy, etc.)
- **Payment processor**: Stripe support (stripe.com/support)
- **Form submissions not arriving**: check Formspree spam settings first, then ask Jane
- **Anything else broken**: Jane (jane@janedoe.com), 30 days included, then per-issue rate

Built by Jane Doe (janedoe.com), May 2026.
```

Customize per client. Include only the things they'll actually do.

### Training call (30–60 min)

The training call is when you walk the client through the "edit-it-yourself" doc live. Record it (Zoom, Google Meet, or Loom screen-share with your face).

Agenda:

1. **Tour the live site together** (5 min) — confirm everything's working from their browser.
2. **Walk through the GitHub edit flow** (10 min) — pick one real edit they want to make ("update the About page"), do it together step-by-step.
3. **Show the admin tools** (5 min) — if Decap CMS or analytics, log them in and show the basics.
4. **Cover what to do when something breaks** (5 min) — git history, your contact info, what's in the 30-day support window.
5. **Q&A** (10 min) — let them surface concerns.

Send them the recording within 24 hours: "Here's the training session for future reference."

### One-month support window

Standard offer:

> Included with this project: 30 days of post-launch bug fixes. Anything broken at the time of handoff — wrong link, layout glitch, form not working — fixed at no cost.
>
> New work (added pages, design changes, feature additions) after launch is billable at $X/hour, with a 1-hour minimum.

Sets expectations. Without this clause, **every** request after launch becomes a debate about whether it's a "fix" or "new work."

After 30 days, the support window closes. The transition is the prompt to offer a retainer (`08_maintenance_retainers.md`).

---

## The final invoice email

Send when staging is approved and you're ready to ship:

```
Hi Sara,

The site is fully built and live on staging. I've gone through QA
and accessibility checks — everything passes.

Final invoice attached ($1,200 = remaining 25%).

Once it clears (usually a business day), I'll:
- Flip the DNS to point at oakmoss.studio
- Add you as admin on the repo, domain, and Stripe
- Send over the handoff doc + a Loom training video
- We'll have a 30-min call (Wednesday 2pm work?) to walk through it

The site stays on staging until then so you can keep reviewing.

— Jane
```

The list of what happens after payment is important. It tells them what they're getting and removes any "what now?" fog.

---

## What to do after handoff

Two days after the final call:

1. **Send a portfolio request.** "Mind if I include the Oakmoss site in my portfolio? I'll send the case study I'd put up so you can preview." (Most clients say yes.) See `09_finding_clients.md` for the case-study format.
2. **Ask for a testimonial.** Three sentences max. "Could you send 2–3 sentences I could use as a testimonial on my site? Something about the experience and outcome." Easier to ask the week after a successful launch than three months later.
3. **Ask for referrals.** "If you know anyone else who needs a site, I'm taking on new projects starting [date]." Don't be pushy; ask once.

Two weeks after handoff:

4. **Send a check-in email.** "How's the site landing with your customers? Anything wonky?" Catches bugs early, signals you care, opens the door to a retainer conversation.

One month after handoff:

5. **Pitch the retainer** (`08_maintenance_retainers.md`) if you offer one. The support window is closing; this is the natural moment.

---

## Common pitfalls

- ❌ Transferring access **before** the final invoice clears. You lose your leverage.
- ❌ A 90-minute training call that overwhelms the client. Keep it under an hour.
- ❌ A 12-page handoff doc no one reads. One page; two if you must.
- ❌ Disappearing the day of launch. Stay close for the first week — small issues always surface.
- ❌ Forgetting to ask for the testimonial / referrals. The window of warm appreciation closes within a month.
- ❌ Leaving yourself as admin on the client's domain "in case they need help." Hand it over fully; offer help separately if they ask.

---

## Update state

Update `_PROJECT_STATE.md`:

```markdown
## Progress
...
- ✓ Staging approved (<date>)
- ✓ Final invoice sent + paid (<date>)
- ✓ DNS flipped, site live at <url>
- ✓ Access transferred (repo, domain, third-parties)
- ✓ Training call delivered + recording sent
- ✓ Handoff doc in repo as HANDOFF.md
- ✓ 30-day support window ends <date>

## Client
- **Final invoice paid**: ✓ <date>
- **Project status**: shipped
```

Add to `01_STATE/user_knowledge.md` (the first time you complete a client project):

```
| Doing paid client work | yes | <date> |
```

(You should have set this when you first entered client mode in `00_overview.md`. If not, set it now.)