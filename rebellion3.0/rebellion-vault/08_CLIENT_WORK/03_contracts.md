# Contracts

The short, signed document that protects both you and the client when something goes sideways. Pair with the scope (`02_scope_and_proposal.md`) — scope is *what*, contract is *what happens if*.

> ⚠ This file is **not legal advice**. The clauses below are common-sense patterns used by indie freelancers. For anything novel — significant project size, regulated industry, international client with complex IP — get a lawyer.

---

## When to read this

User says:
- "What should be in a contract?"
- "Do I really need one?"
- "Where do I get a template?"
- "The client wants to start without signing anything"

---

## Do you need a contract?

For paid work? **Yes, every time.** Even with friends. Especially with friends — the contract isn't about distrust, it's about alignment.

Two-sentence rule: **No contract = no work.** Don't start writing code before the contract is signed and the deposit clears. People who break this rule are the same people who post on r/freelance about getting stiffed.

Contracts can be short. A two-page contract is fine; a 20-page contract is overkill for a $5K site.

---

## The minimum-viable clauses

These nine sections are enough for a small static-site engagement. Each is one short paragraph.

### 1. The parties

```
This agreement is between Jane Doe ("Designer"), of [address], and
Oakmoss Studio ("Client"), of [address].
```

Real legal names + addresses. If the client is a company, name the company; if a sole proprietor, name the person.

### 2. Scope of work

```
Designer will deliver the project described in the attached Scope of
Work (the "Scope"), dated [date], which is incorporated by reference.
```

Reference the scope doc you sent in `02_scope_and_proposal.md`. Attach it as an appendix or a separate PDF. Don't restate the scope inside the contract — that's where conflicts come from.

### 3. Price and payment

```
Total fee: $4,800, paid as:
- 50% ($2,400) on signing
- 25% ($1,200) at design approval
- 25% ($1,200) at launch

Invoices are due within 7 days of receipt. Overdue invoices accrue
1.5% interest per month. Work is paused if any invoice is overdue
more than 14 days.
```

Mirror the schedule from your scope. The "work paused" clause is your enforcement lever.

### 4. Revisions and change orders

```
The Scope includes the number of revision rounds specified therein.
Additional work outside the Scope requires a written change order,
signed by both parties, before work begins. Change orders are billed
at $125/hour.
```

Again, refer to scope for the actual numbers.

### 5. Timeline and delays

```
Designer estimates completion within 4 weeks of receiving deposit
and required content (logo, copy, photos). Delays in content
delivery by Client extend the timeline by the equivalent number of
days.
```

The most common timeline-blower is the client being slow to send content. Lock this in.

### 6. Intellectual property

```
Upon final payment, Client owns the final delivered website content
and code. Designer retains the right to display the project in their
portfolio and on social media unless Client requests otherwise in
writing.
```

Two parts:
- Client owns what they paid for, **on final payment** (so unpaid invoices mean they don't actually own it).
- You can show it in your portfolio. This is how you build a body of work; protect it explicitly.

### 7. Confidentiality

```
Both parties agree to keep proprietary information shared during the
engagement confidential. This does not restrict Designer from
discussing project specifics in their portfolio.
```

Simple mutual NDA. If the client has a custom NDA, read it carefully (or have a lawyer read it).

### 8. Termination

```
Either party may terminate this agreement with 7 days' written
notice. Upon termination:
- Client pays for all work completed to date
- Designer delivers all work product produced to date
- The deposit is non-refundable
```

The non-refundable deposit is critical. It compensates you for committing the time / turning down other work / starting research.

### 9. Liability and warranties

```
Designer warrants the deliverables will be free of major defects for
30 days post-launch (bug fixes included). Designer is not liable for
damages exceeding the total fees paid. Designer is not responsible
for issues arising from third-party services (hosting, payment
processors, etc.) beyond their control.
```

Caps your worst-case exposure to the project's own fee. Important.

### 10. Signatures + date

```
Designer: ___________________ Date: ___________
Client:   ___________________ Date: ___________
```

Use eSign (HelloSign, Docusign, Bonsai, Notion eSign) — typed signatures are legally binding in the US, EU, UK, Canada, Australia. Don't print and scan.

---

## Templates to start from (not draft from scratch)

You should not write the contract from a blank page. Start with a vetted template.

| Source | Cost | Notes |
|---|---|---|
| **Stunning Freelance Contract** (bonsai.io/templates) | Free | Clean, designer-oriented, US-flavored |
| **AIGA Standard Form of Agreement** | Free | Design-industry standard. Heavier than you need but well-respected. |
| **Use & Modify** (useandmodify.com) | Free / pay-what-you-want | Hugh Forrest's template, very designer-friendly |
| **Bonsai / HoneyBook** (built-in templates) | Included with subscription | Best if you're already using their tools for invoicing |
| **Your country's freelancer association** | Varies | UK: IPSE. US: Freelancers Union. Country-specific clauses already in. |

Pick one, adapt the names and numbers, get it signed.

---

## When to actually pay a lawyer

The threshold isn't "every project" — it's "anything where my template might leave me exposed." Cases:

- Project fee over ~$25K
- Client in a different country with different jurisdiction
- Recurring retainer with high monthly commitment
- IP that's worth real money (e.g., the client is a media company and the work is publishable)
- Client provides their own custom contract longer than 4 pages — have a lawyer read it before signing
- Working with a regulated industry (healthcare, financial services, legal)
- Multiple parties (you + another freelancer + the client)

A one-hour contract review from a small-business lawyer is typically $200–$500. Cheap insurance.

---

## "But this client doesn't want to sign anything"

Three options, in order of preference:

1. **Send the contract anyway, frame it as protective for both sides.** Most legitimate clients sign without complaint once they read it.
2. **Send an email that summarizes the same terms and ask them to reply "agreed."** An email-confirmed agreement is legally weaker than a signed contract but better than nothing. Bills, scope, IP, termination — all in the email body.
3. **Walk away.** A client who refuses any written agreement is telling you something. Believe them.

Never start work on a verbal-only agreement past a few hundred dollars. The math: a $2K project with no contract that goes bad costs you $2K + reputation + sleep. Saying no costs you $2K.

---

## Common pitfalls

- ❌ Sending the contract **after** starting work. Order matters: scope → contract → deposit → work.
- ❌ Wall-of-text legalese copy-pasted from a template you don't understand. If you can't explain a clause in one sentence, drop it or replace it.
- ❌ No "delays caused by client extend the timeline" clause — guaranteed regret.
- ❌ Refundable deposit. The deposit's whole point is that you can't undo committed time.
- ❌ Signing the client's custom contract without reading every line. Especially anything about IP, exclusivity, or warranties.

---

## Update state

Add to `_PROJECT_STATE.md` (in the `## Client` section):

```markdown
- **Contract signed**: ✓ <date>
```

Add to `01_STATE/user_knowledge.md`:

```
| Has a client contract template | yes | <date> |
```