# Technical Investigation Report: SiteBeacon Knowledge Hub

- **Project:** SiteBeacon Knowledge Hub
- **Proposed URL:** `https://help.sitebeacon.io`
- **Date:** July 29, 2026
- **Status:** Architecture Proposal

---

## 1. Executive Summary

This report outlines the proposed technical architecture for the **SiteBeacon Knowledge Hub** at `help.sitebeacon.io`. The platform will host product documentation, educational resources, FAQs, and release logs.

To ensure the best path forward, this document evaluates options for **application integration**, **UI layout frameworks**, **search scalability**, and **content authoring workflows** for both technical and non-technical staff.

---

## 2. Pre-defined Project Foundations

These tech stack and deployment parameters are pre-defined baseline requirements for the SiteBeacon Knowledge Hub project:

- **Framework:** Next.js (App Router, React Server Components by default)
- **Styling System:** Tailwind CSS (CSS-first utility styling)
- **Deployment Model:** Standalone Web Service & Git Repository (deployed independently to `help.sitebeacon.io` to ensure deployment safety, fast builds, and zero downtime risk to the main SaaS dashboard).

## 3. Documentation Layout Engine

To construct the sidebar navigation, breadcrumbs, and tables of contents, we evaluated three layout systems:

- **Option 1: Docusaurus**
  - _Description:_ Standalone React documentation compiler.
  - _Pros:_ Robust ecosystem, standard theme templates.
  - _Cons:_ Runs as an entirely separate framework. It cannot integrate directly as a sub-module or layout inside a standard Next.js stack.
- **Option 2: Nextra**
  - _Description:_ Next.js-based documentation theme framework.
  - _Pros:_ Simple file-system routing.
  - _Cons:_ Less flexibility in custom styling, and layout options are highly restricted.
- **Option 3: Fumadocs**
  - _Description:_ Next.js native, modular layout package designed for App Router.
  - _Pros:_ Runs inside our Next.js codebase, native support for React Server Components, custom Tailwind branding controls, and modular structure.
  - _Cons:_ Less mainstream than Docusaurus but highly active.

> 🏆 **Best Proposal:** **Fumadocs (Option 3)**  
> _Rationale:_ It allows us to build premium, branded layouts using our standard Next.js and Tailwind components rather than dealing with standalone framework limitations.

---

## 4. Search Engine & Scalability Options

We evaluated the performance of full-text search as content grows:

- **Option 1: Server-Side In-Memory Search (Orama)**
  - _Description:_ Search indexes compile at build-time. At runtime, the index is loaded into the server's RAM. Queries are processed instantly in memory.
  - _Pros:_ Fast response times (<10ms), zero external infrastructure costs, works out-of-the-box.
  - _Cons:_ As pages grow past 1,000+, the memory footprint on serverless/edge functions increases.
- **Option 2: Client-Side Search (FlexSearch)**
  - _Description:_ The browser downloads the compiled search index JSON file once and runs searches locally on the user's CPU.
  - _Pros:_ Zero server overhead.
  - _Cons:_ Larger initial bundle download size for visitors.
- **Option 3: Cloud Search Indexing (Orama Cloud / Algolia)**
  - _Description:_ Sync indexes to a third-party distributed search CDN during CI/CD builds.
  - _Pros:_ Insanely fast response times (<10ms) regardless of page volume (scales to 10,000+ pages).
  - _Cons:_ Requires active accounts, API key configurations, and potential third-party monthly costs.

> 🏆 **Best Proposal:** **Start with Option 1 (In-Memory), scale to Option 3 (Cloud Search) at volume.**  
> _Rationale:_ Option 1 provides lightning-fast search with zero setup complexity. When documentation exceeds 1,000 pages, the search pipeline can transition to Option 3 with minimal code changes.

---

## 5. Content Management & Authoring Workflows

To support both developer and non-developer content creators, we proposed two distinct authoring workflows.

### A. Technical Staff Workflow (Developers/Technical Writers)

- **Underlying Format:** MDX (Markdown with React Components).
- **Process:**
  1. Authors write articles as raw text files in the repository.
  2. Frontmatter is declared at the top of each file (e.g., title, description).
  3. Sidebar orders are declared in folder-level `meta.json` files.
  4. Changes are pushed to Git, triggering automatic rebuilds and index updates.

---

### B. Non-Technical Staff Workflow (Content Managers/Editors)

Since non-technical staff require a visual editing dashboard, we evaluated two CMS integration options:

- **Option 1: Traditional Headless CMS (Contentful, Sanity, Strapi)**
  - _Description:_ Content is written in an external database. Next.js fetches data via APIs at runtime.
  - _Pros:_ Standard enterprise visual editor.
  - _Cons:_ Content is decoupled from Git, requiring complex dynamic caching setups, and search indexing becomes more difficult.
- **Option 2: Git-Backed CMS (Tina CMS / Keystatic)**
  - _Description:_ A secure CMS dashboard panel is added to the website. When an editor edits an article, the CMS writes the change directly back to the GitHub repository as Markdown/MDX files.
  - _Pros:_ Provides a visual editor for non-technical writers while keeping all content in Git for fast static building and search.
  - _Cons:_ Requires a one-time configuration script.

> 🏆 **Best Proposal:** **Git-Backed CMS (Option 2)**  
> _Rationale:_ Keeps content version-controlled in the Git repository alongside developer updates, maintaining the performance and search speed of the Next.js static pipeline while providing a visual editing experience.
