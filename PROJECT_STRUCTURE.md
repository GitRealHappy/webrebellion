# Web Design Rebellion - Project Structure

This document outlines the architecture, file structure, and unique interactive elements of the Web Design Rebellion website.

## Overview

This is a **Jekyll-based** static site designed for the "Web Design Rebellion" course. It features a unique terminal-based entry point, a long-form sales page, and a gated student dashboard protected by a lightweight client-side authentication mechanism.

**Tech Stack:**
- Jekyll (static site generator)
- Minima theme (base)
- Kramdown (Markdown processor)
- Vanilla JavaScript (terminal, interactions)
- Stripe (payment integration)

## Directory Structure

### Core Jekyll Directories

*   **`_layouts/`**: Contains the templates for different page types.
    *   `default.html`: The base layout for inner pages (dashboard, curriculum, etc.).
    *   `lesson.html`: Layout for individual course lessons (from `_lessons` collection).
    *   `page.html`: Standard page layout.
    *   `prompt.html`: Layout for individual prompt library entries (from `_prompts` collection).
    *   `prompts-index.html`: Layout for the main prompt library grid page.

*   **`_includes/`**: Reusable HTML snippets.
    *   `head.html`: Meta tags, stylesheets, fonts.
    *   `header.html`: Site navigation bar with hamburger menu for mobile.
    *   `footer.html`: Site footer.
    *   `login-guard.html`: Critical component that checks for `localStorage` access tokens and redirects unauthorized users.
    *   `modal.html`: Reusable modal component for prompt previews.

*   **`_lessons/`**: Collection containing course modules/lessons.
    *   Currently: `module-01-intro.md`
    *   Outputs to: `/curriculum/:slug/`

*   **`_prompts/`**: Collection containing AI prompts for the library.
    *   Currently: `4-page-static-site.md`, `jekyll-starter.md`, `layout-refine.md`
    *   Outputs to: `/prompts/:slug/`

*   **`assets/`**: Static assets.
    *   `css/main.css`: Global styles for inner pages (dashboard, lessons, prompts).
    *   `js/prompts.js`: JavaScript for the prompt library (filtering, modal).
    *   `js/login.js`: Legacy login script (deprecated).
    *   `images/`: Site images, social cards, prompt previews.

### Key Pages

*   **`index.html`**: The main public entry point. A standalone single-page experience containing:
    *   The Terminal Emulator
    *   The Sales Page (long-form copy)
    *   Holiday countdown timer
    *   Stripe payment integration
    *   *Note: This page has its own inline CSS and does NOT use the shared `main.css`.*

*   **`dashboard.md`**: The main student hub (protected).
*   **`curriculum.md`**: Course outline with links to lessons (protected).
*   **`prompts.md`**: The Prompt Library index with filtering (protected).
*   **`resources.md`**: Additional resources (protected).
*   **`faq.md`**: Frequently Asked Questions (protected).

### Configuration

*   **`_config.yml`**: Jekyll configuration including:
    *   Collections: `lessons`, `prompts`
    *   Navigation structure
    *   Permalink settings (`pretty`)
    *   Default layouts per content type

## The Terminal Experience (`index.html`)

The homepage is a self-contained single-page application built with vanilla JavaScript. It presents a macOS-style terminal interface that acts as a gatekeeper.

### Visual Design
- Dark burgundy background with radial gradient
- macOS-style terminal window with traffic light buttons
- Draggable terminal window (desktop)
- Typewriter text effect for intro sequence
- SF Mono / monospace typography

### Interaction Logic

The terminal accepts specific text commands:

1.  **"yes"** (or "y"):
    *   **Action**: Unlocks the site for potential students.
    *   **Result**: Terminal fades out, sales page fades in with scroll enabled.

2.  **"no"** (or "n"):
    *   **Action**: User declines the "rebellion."
    *   **Result**: Terminal fades out, "Declined Screen" appears with a "Freedom" link to reset.

3.  **"thethirdway"** (Secret Passcode):
    *   **Action**: Bypass for existing students/admins.
    *   **Result**: 
        *   Sets `localStorage.setItem('lia_rebel_access', 'true')`.
        *   Redirects immediately to `/dashboard/`.

### Features
- Input is available immediately (no need to wait for typing animation)
- Typing animation can be skipped by submitting early
- Responsive design with mobile adjustments

## Authentication & Access Control

Access to the course material (Dashboard, Curriculum, etc.) is managed via client-side "soft gating."

*   **Mechanism**: A key `lia_rebel_access` is stored in the browser's `localStorage`.
*   **Enforcement**: The `_includes/login-guard.html` snippet is included in protected layouts. It checks for this key; if missing, it redirects the user to the homepage.
*   **Important**: This is client-side only—it's intended to prevent casual access, not secure sensitive data.

## Design System

### Sales Page (`index.html`)
*   Colors: `--bg: #2e0f1b` (burgundy), `--accent: #17a149` (green), `--text: #f7f3e8` (eggshell)
*   Typography: System fonts + SF Mono for terminal

### Inner Pages (`main.css`)
*   Colors: `--color-royal-indigo: #463B6A`, `--color-dark-violet: #1F1622`, `--color-fire-orange: #E67328`
*   Typography: Montserrat
*   Container width: 780px

## Deprecated / To Be Deleted

The following files are legacy or unused and are marked for deletion:

*   **`login.html`**: An old standalone login form. The "thethirdway" terminal command replaces this.
*   **`assets/js/login.js`**: The logic associated with the old login form.
*   **`index.md`**: Empty/unused duplicate of `index.html`.
*   **`copy2.md`**: Draft/alternate copy file.
