# Debug Protocol

How Claude approaches a "something's broken" moment.

---

## When to read this

User says any of:
- "It's not working"
- "I'm getting an error"
- "Something's broken"
- "It worked before, now it doesn't"

---

## The protocol

### 1. Normalize

Bugs are normal. Don't apologize on the user's behalf or treat the bug as a failure. Match their energy without amplifying it.

> Yeah, that's a common one. Let's figure it out.

### 2. Get the symptom precisely

Ask **one** clarifying question if needed:

- What exactly are you seeing? (paste the error / describe what's wrong)
- Is the live site or local copy broken (or both)?
- What's the last thing that changed?

Don't ask all three at once. Pick the one that narrows the most.

### 3. Form a hypothesis

Before running commands, state what you think is happening in one sentence:

> Sounds like the CSS isn't loading on the deployed site. Probably an absolute vs relative path issue.

### 4. Confirm with one read or one command

Verify your hypothesis with the smallest possible check:

```
! curl -I https://yourname.github.io/repo/styles/main.css
```

Or read the relevant file. Don't run a battery of diagnostics.

### 5. Fix it

Apply the fix. Explain in one line *what* and *why*:

> Changed `/styles/main.css` to `styles/main.css`. GitHub Pages serves your repo at `/repo/`, so absolute paths starting with `/` go to the wrong place.

### 6. Verify

Have the user reload / re-test. Confirm the fix worked.

### 7. Update state if relevant

If the bug exposed a gap in their understanding, add a one-liner to `01_STATE/user_knowledge.md` ("knows about absolute vs relative paths now").

If it's a one-off bug, don't write state.

---

## What NOT to do

- ❌ Try multiple fixes at once ("let me change five things")
- ❌ Suggest reinstalling Git or Claude Code as a first step
- ❌ Recommend a framework as a "fix" for layout bugs
- ❌ Guess without checking
- ❌ Walk away from the bug to suggest unrelated improvements

---

## Common categories

Most bugs fall into one of these. See `01_common_issues.md` for specifics.

| Category | Typical cause |
|---|---|
| Site not appearing | Pages not enabled, wrong branch/folder, propagation delay |
| CSS/JS not loading | Absolute paths, wrong filename case, link tag wrong |
| Push fails | SSH key not configured, wrong remote URL |
| Domain not working | DNS not propagated, records wrong, no CNAME file |
| Form not submitting | Endpoint wrong, service not confirmed, CORS issue |
| Stripe button not working | Test/live key mismatch, embed not pasted correctly |

If the user's bug doesn't fit any category, ask one specific question — don't speculate.

---

## When the bug is beyond scope

Some bugs come from things outside what this system handles:
- Their ISP or local network issue
- Their browser cache (suggest hard reload: `Cmd+Shift+R`)
- A bug in Stripe / Formspree / GitHub itself (rare — check their status pages)

If it's clearly external, say so:

> This looks like it's on Stripe's side. Their status page (status.stripe.com) will confirm. Worth waiting it out.

---

## When the user is stuck and frustrated

Acknowledge briefly, then narrow:

> Frustrating, I know. Let's get specific — exactly what error message are you seeing right now?

A specific question gives them something concrete to do. Open-ended sympathy doesn't move things forward.

If after a few rounds you genuinely can't fix it: defer to Discord (`00_GUIDE/06_deferring_to_community.md`).
