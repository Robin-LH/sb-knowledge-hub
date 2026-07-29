# SiteBeacon Knowledge Hub

A premium, production-ready documentation and help center for SiteBeacon, supporting product guides, educational learning resources, FAQs, and changelogs.

- **Production URL:** `https://help.sitebeacon.io`

---

## Tech Stack & Features

- **Framework:** Next.js (App Router, Server Components by default)
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Documentation Engine:** Fumadocs (Sidebar tree, breadcrumbs, TOC, and metadata pipeline)
- **Search Engine:** Orama Search (High-performance full-text search API)
- **Quality Checks:** ESLint, Prettier, and Husky Git hooks (pre-commit checking)
- **Package Manager:** PNPM (enforced via `only-allow pnpm`)

---

## Requirements

- **Node.js:** `>= 18.17.0`
- **PNPM:** `>= 9.0.0`

---

## Quick Start

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the local development server:

   ```bash
   pnpm dev
   ```

3. Open `http://localhost:3000` to view the landing page and docs.

---

## Repository Structure

```plaintext
content/
  ├── docs/                 # Product guides and settings documentation
  ├── learn/                # Educational resources (WCAG, Core Web Vitals, Sustainability)
  ├── faq/                  # Common questions & answers
  └── releases/             # Changelogs and release updates

app/
  ├── (home)/               # Landing page with central search widget
  ├── api/search/           # Orama search API endpoint
  ├── docs/                 # Catch-all routes for product documentation
  ├── learn/                # Catch-all routes for learning guides
  ├── faq/                  # Catch-all routes for FAQs
  └── releases/             # Catch-all routes for releases

src/
  ├── components/           # UI components (CustomHeader, FeedbackWidget, Cards)
  └── lib/
      ├── source.ts         # Fumadocs collection loaders definition
      └── create-docs-page.tsx  # Shared page factory logic for catch-all routes
```

---

## Managing Content (For Editors & Writers)

### 1. File Structure

All articles are written as Markdown or MDX (`.mdx`) files inside the corresponding sub-folder in `content/`.

### 2. Declaring Frontmatter

Every article must declare a YAML frontmatter block at the very top of the file:

```mdx
---
title: Welcome to SiteBeacon
description: Get started with SiteBeacon — your all-in-one platform for accessibility, performance, and sustainability monitoring.
---

SiteBeacon helps you monitor, measure, and improve your website...
```

_Note: Do not duplicate the `# H1` heading inside the MDX body, as the layout automatically renders the `title` and `description` from your frontmatter._

### 3. Sidebar Order

The ordering of files and sections in the sidebars is defined using `meta.json` files in the directories. E.g., to order your documents:

```json
{
  "pages": [
    "getting-started",
    "accessibility",
    "performance",
    "carbon",
    "projects-workspaces",
    "reports",
    "billing",
    "account-settings"
  ]
}
```

---

## Scripts

Use the following commands during development:

```bash
pnpm dev      # Start Next.js development server
pnpm build    # Build optimized production static pages
pnpm start    # Start Next.js production server
pnpm lint     # Run ESLint validation check
pnpm format   # Run Prettier format formatting
```

---

## Recommended Before Push

Husky runs checks on every commit. To ensure your commits pass the pipeline, check validation locally beforehand:

```bash
pnpm lint
pnpm build
```
