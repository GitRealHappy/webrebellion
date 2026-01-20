---
title: "The Cascade"
module: 6
module_title: "CSS Fundamentals"
order: 23
estimated_time: "30 min"
layout: lesson
---

<div class="lesson-block" markdown="1">
### When Styles Collide: The Cascade Decides

You wrote CSS. It *should* work. But sometimes, rules conflict. Why? The Cascade. It's CSS's built-in system for deciding which styles win when multiple rules target the same element. Browser defaults also play a role. Understanding the Cascade prevents CSS headaches.

The Cascade primarily uses three factors to resolve conflicts:

1. **Specificity:** How targeted is the selector?
2. **Inheritance:** Do child elements inherit properties from parents?
3. **Rule Order:** Which rule came last in the CSS?
</div>

<div class="lesson-block" markdown="1">
### Specificity: The Tie-Breaker

More specific rules override less specific ones. Here's the hierarchy:

1. **Inline Styles:** Highest specificity (rarely the right choice for anything complex).
2. **ID Selectors (`#`):** Very specific.
3. **Class Selectors (`.`), Attribute Selectors, Pseudo-classes:** Medium specificity.
4. **Type Selectors (`p`, `div`), Universal Selector (`*`), Combinators (space, `>`, `+`, `~`):** Lowest specificity.

- **Analogy:** Think of it like a competition. An ID is a star athlete. A class is a strong team. A type selector is just a participant.
- **Tie-breaker within a level:** If two rules have the same highest specificity level (e.g., both use class selectors), the one with *more* selectors of that type wins. Rule `.main .content` is more specific than `.content`.

**Example:**

```html
<div class="main">
  <p class="content alert">This text is red.</p>
</div>
```

```css
/* Rule 1: Low specificity (type + class) */
.content { color: blue; }

/* Rule 2: Higher specificity (two classes) */
.main .content { color: red; }
```
Rule 2 wins because it uses more class selectors.

**Important:** Universal selectors (`*`) and combinators (spaces, `>`) do *not* add to specificity.
</div>

<div class="lesson-block" markdown="1">
### Inheritance: Passing Down Styles

Certain properties (like `color`, `font-family`, `font-size`) are *inherited* by child elements. If you set `color: blue;` on a `div`, all text inside that `div` will be blue *unless* a more specific rule overrides it.

- **Check MDN:** You can determine if a property is inherited in its documentation.
- **Direct Targeting Wins:** A rule directly targeting a child element (even with lower specificity) overrides inherited styles.

**Example:**

```html
<div id="parent">
  <p class="child">This text is blue.</p>
</div>
```

```css
/* Rule 1: High specificity ID, but style is inherited */
#parent { color: red; }

/* Rule 2: Lower specificity class, but directly targets the element */
.child { color: blue; }
```
The `.child` rule wins because it directly targets the `p` element.
</div>

<div class="lesson-block" markdown="1">
### Rule Order: Last Rule Wins

If specificity and inheritance can't decide, the rule that appears *last* in your CSS file wins. This is the final tie-breaker.

**Example:**

```css
.message { color: yellow; }
.message { color: green; } /* This one wins */
```

When building, aim for clear specificity. Relying on the cascade order or inheritance alone can lead to complex, hard-to-debug CSS.
</div>
