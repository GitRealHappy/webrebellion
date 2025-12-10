# Web Design Rebellion - Project Structure

This document outlines the architecture, file structure, and unique interactive elements of the Web Design Rebellion website.

## Overview

This is a **Jekyll-based** static site designed for the "Web Design Rebellion" course. It features a unique terminal-based entry point, a sales page, and a gated student dashboard protected by a lightweight client-side authentication mechanism.

## Directory Structure

### Core Jekyll Directories

*   **`_layouts/`**: Contains the templates for different page types.
    *   `default.html`: The base layout.
    *   `lesson.html`: Layout for individual course lessons (`_lessons`).
    *   `prompt.html`: Layout for the prompt library entries (`_prompts`).
    *   `prompts-index.html`: Layout for the main prompt library page.
    *   `page.html`: Standard page layout.

*   **`_includes/`**: Reusable HTML snippets.
    *   `login-guard.html`: Critical component that checks for `localStorage` access tokens and redirects unauthorized users.
    *   `header.html`, `footer.html`, `head.html`: Standard site components.
    *   `modal.html`: Reusable modal component.

*   **`_lessons/`**: Collection containing course modules/lessons.
*   **`_prompts/`**: Collection containing AI prompts for the library.
*   **`assets/`**: Static assets (CSS, JS, Images).

### Key Pages

*   **`index.html`**: The main entry point. Contains the **Terminal Emulator** and **Sales Page**.
*   **`dashboard.md`**: The main student hub (protected).
*   **`curriculum.md`**: Course outline.
*   **`prompts.md`**: The Prompt Library index.
*   **`resources.md`**: Additional resources.
*   **`faq.md`**: Frequently Asked Questions.

## The Terminal Experience (`index.html`)

The homepage (`index.html`) is a single-page application experience built with vanilla JavaScript within the Jekyll template. It presents a terminal interface that acts as a gatekeeper.

### Interaction Logic

The terminal accepts specific text commands:

1.  **"yes"** (or "y"):
    *   **Action**: Unlocks the site for potential students.
    *   **Result**: The terminal fades out, and the long-form **Sales Page** fades in.

2.  **"no"** (or "n"):
    *   **Action**: User declines the "rebellion."
    *   **Result**: The terminal fades out, and a "Declined Screen" appears with a "Freedom" link to reset the experience.

3.  **"thethirdway"** (Secret Passcode):
    *   **Action**: Bypass for existing students/admins.
    *   **Result**: 
        *   Sets `localStorage.setItem('lia_rebel_access', 'true')`.
        *   Redirects immediately to `/dashboard/`.

## Authentication & Access Control

Access to the course material (Dashboard, Curriculum, etc.) is managed via client-side "soft gating."

*   **Mechanism**: A key `lia_rebel_access` is stored in the browser's `localStorage`.
*   **Enforcement**: The `_includes/login-guard.html` snippet is included in protected layouts. It checks for this key; if missing, it redirects the user to the homepage or login.

## Deprecated / To Be Deleted

The following files are legacy or unused and are marked for deletion:

*   **`login.html`**: An old standalone login form. The "thethirdway" terminal command replaces this.
*   **`assets/js/login.js`**: The logic associated with the old login form.
