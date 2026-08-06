# SiteBeacon Knowledge Hub

A premium, production-ready documentation and help center for SiteBeacon, supporting product guides, educational learning resources, FAQs, and changelogs. Built with a modern, high-performance architecture supporting both developer-friendly Markdown/MDX workflows and editor-friendly visual CMS controls.

- **Production URL:** `https://help.sitebeacon.io`

---

## Tech Stack & Features

- **Framework:** Next.js (App Router, Server Components by default)
- **Styling:** Tailwind CSS v4 (CSS-first configuration with custom brand palette `#124e34` and `#388e3c`)
- **Documentation Engine:** Fumadocs (Sidebar tree, breadcrumbs, TOC, and metadata pipeline)
- **CMS (Visual Editor):** TinaCMS (Visual editing panel with local database engine sync)
- **Search Engine:** Orama Search (High-performance full-text search API)
- **Quality Checks:** ESLint, Prettier, and Husky Git hooks (pre-commit checking)
- **Package Manager:** PNPM (enforced via `only-allow pnpm`)

---

## Requirements

- **Node.js:** `>= 18.17.0`
- **PNPM:** `>= 9.0.0`

---

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the local development server:**

   ```bash
   pnpm dev
   ```

   _This starts both the Next.js dev server on `http://localhost:3000` and the TinaCMS visual editor server on port `9000`._

3. **Access local preview & CMS:**
   - Client Portal: `http://localhost:3000`
   - Visual CMS Admin Panel: `http://localhost:3000/admin` (auto-redirects to `/admin/index.html`)

---

## Repository Structure

```plaintext
content/
  ├── docs/                 # Product guides and settings documentation
  ├── learn/                # Educational resources (WCAG, Core Web Vitals, Sustainability)
  ├── faq/                  # Common questions & answers
  └── releases/             # Changelogs and release updates

app/
  ├── (home)/               # Premium landing page (includes private _components/)
  ├── api/search/           # Orama search API endpoint
  ├── docs/                 # Catch-all routes for product documentation
  ├── learn/                # Catch-all routes for learning guides
  ├── faq/                  # Catch-all routes for FAQs
  └── releases/             # Catch-all routes for releases
  └── styles.css            # Global CSS overriding brand tokens & Fumadocs theme

src/
  ├── components/           # UI components (FeedbackWidget, TinaPageWrapper)
  └── lib/
      ├── source.ts         # Fumadocs collection loaders definition
      └── create-docs-page.tsx  # Shared page factory logic for catch-all routes
```

---

## Managing Content (For Editors & Writers)

### 1. Developer Git Workflow (Local Files)

All articles are written as Markdown or MDX (`.mdx`) files inside the corresponding sub-folder in `content/`.

Every article must declare a YAML frontmatter block at the very top of the file:

```mdx
---
title: Welcome to SiteBeacon
description: Get started with SiteBeacon — your all-in-one platform for accessibility, performance, and sustainability monitoring.
---

SiteBeacon helps you monitor, measure, and improve your website...
```

_Note: Do not duplicate the `# H1` heading inside the MDX body, as the layout automatically renders the `title` and `description`._

### 2. Editor Visual Workflow (TinaCMS Panel)

Writers and non-technical editors can manage all pages visually at `/admin`.

#### A. Card Custom Blocks

Editors can insert **Card Items** directly inside the rich-text body editor. In the toolbar, click **Embed > Card Item** to add custom visual card links.

#### B. Sub-form Navigation Tip (Important UX Guideline)

TinaCMS uses a nested routing architecture for rich-text inline blocks (like `Card Item`).

- When editing a specific card item, click **`index`** in the top breadcrumbs trail (`← Documentation / index`) to return to the parent page editor.
- **Do not click the left back arrow (`←`)** next to the breadcrumbs trail, as it acts as an "Exit Editor" button and will route you completely out to the collection directory page.

#### C. Sidebar Navigation Order

The order of pages in the sidebars is defined using `meta.json` files in the folders, which can be rearranged directly via the `meta` files editor in the admin panel.

---

## Environment Variables

For production visual editor syncing, configure your `.env` file with the following variables from your Tina Cloud account:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=<tina-client-id>
TINA_TOKEN=<tina-read-write-token>
```

---

## Scripts

Use the following commands during development:

```bash
pnpm dev      # Start dev server (Next.js + TinaCMS local datalayer)
pnpm build    # Build optimized production static pages & Tina index
pnpm start    # Start Next.js production server
pnpm lint     # Run ESLint validation checks
pnpm format   # Run Prettier code formatting
```

## Quality Assurance Before Pushing

Commit quality is guarded via Husky git hooks. To ensure your commits pass the pipeline, validate locally beforehand:

```bash
pnpm lint
pnpm build
```
