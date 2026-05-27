# Client Work

Opt-in track for users doing **paid** web work for someone else. Not part of the default Rebellion path — only enter this folder when the user explicitly signals they want to make money building sites for clients.

If you're a learner building your own site, ignore this folder. The Rebellion's main flow (`03_BUILD_FLOW/`) and feature modules (`04_FEATURES/`) cover everything you need.

---

## What's in here

| File | When to read |
|---|---|
| `00_overview.md` | The full loop: intake → scope → contract → deposit → build → handoff → retainer. Where to start. |
| `01_client_intake.md` | First-call script, qualifying questions, red flags |
| `02_scope_and_proposal.md` | Turning a conversation into a written scope and price |
| `03_contracts.md` | Minimum-viable clauses, template pointers, when to defer to a lawyer |
| `04_pricing.md` | What to charge, project minimums, package shapes, deposit conventions |
| `05_invoicing_and_payment.md` | Sending invoices, taking deposits, getting paid (composes with `04_FEATURES/01_stripe_payments.md`) |
| `06_project_management.md` | Running the engagement after deposit lands |
| `07_handoff_and_training.md` | Final delivery: access, training, the "edit-it-yourself" doc |
| `08_maintenance_retainers.md` | Monthly retainers after launch |
| `09_finding_clients.md` | Portfolio site, case studies, getting your first three |

---

## How this composes with the rest of the vault

- The site you **build for the client** still uses `03_BUILD_FLOW/` and `04_FEATURES/`. Nothing changes there.
- `04_FEATURES/06_accessibility.md`, `11_legal_pages.md`, and `04_seo_basics.md` matter more on client sites than personal ones — clients expect them.
- The optional `## Client` block in `_PROJECT_STATE.md` (added by Claude when you say a project is for a client) tracks contract / deposit / final-invoice state alongside the build progress.

---

## Routing back to features

If a question is really about **building**, not **business**, route back:

| Question | Goes back to |
|---|---|
| "How do I take their payment?" | `04_FEATURES/01_stripe_payments.md` (note: their payment to the *client*, not to you — for client paying you, see `05_invoicing_and_payment.md`) |
| "How do I add a contact form to their site?" | `04_FEATURES/02_forms_and_email.md` |
| "How do I set up their custom domain?" | `03_BUILD_FLOW/05_custom_domain.md` |
| "How do I let them edit the site?" | `04_FEATURES/09_cms_handoff.md` |

---

## Not legal advice

Multiple files in this folder discuss contracts, taxes, and policy. **Templates and patterns only.** For anything that affects your liability, hire a lawyer. The "when to escalate" thresholds are spelled out per-file.