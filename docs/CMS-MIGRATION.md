# CMS & BLOG MIGRATION

> **Purpose:** Preserve existing client publishing workflows and valuable content during a Book Moar redesign without forcing every project to use the same CMS.

## Mandatory CMS Check

During discovery, determine whether the existing website uses a CMS or contains a blog, news, recipes, resources, projects, or other client-managed content.

If an existing CMS/blog is detected, do not remove, replace, or migrate it blindly.

Before implementation, determine:
- what CMS is currently used
- whether the client still publishes
- how often they publish
- who publishes
- whether they need to keep editing content themselves
- how many existing posts/content entries exist
- whether existing posts receive organic traffic, impressions, backlinks, or conversions
- the existing permalink structure
- whether categories, authors, media, recipes, or custom fields matter

Coordinate with `docs/SEO-MIGRATION.md`.

---

## Scenario 1 — Existing Content, Client Rarely Publishes

Typical case:
- relatively small archive
- client rarely or never adds posts
- existing content may still have SEO value

### Preferred Approach
Migrate useful existing content into the new Book Moar site and retire the old CMS when practical.

For WordPress, content may be extracted through the WordPress REST API or another reliable export method.

Preserve:
- titles
- slugs/permalinks where practical
- publication dates
- authors when relevant
- featured images/media
- categories/taxonomy when useful
- meaningful body content
- metadata where appropriate
- internal links
- SEO intent

Clean unnecessary theme-builder markup, shortcodes, and legacy presentation code without deleting meaningful content.

Static Markdown/MDX or another simple content format may be appropriate when the client does not need a publishing dashboard.

---

## Scenario 2 — Active WordPress Publisher

Typical case:
- client publishes regularly
- client knows WordPress
- client wants to continue using the familiar WordPress editor

### Preferred Approach
Consider preserving WordPress as a **headless CMS**.

Possible architecture:

```
Client -> WordPress Admin -> WordPress REST API -> Book Moar Frontend
```

WordPress may live at a CMS/admin subdomain while the public website is the custom Book Moar frontend.

Benefits:
- client keeps familiar publishing workflow
- existing WordPress content remains manageable
- public frontend retains Book Moar design/performance control
- migration disruption is reduced

### Important
Headless WordPress still requires:
- WordPress hosting
- updates
- backups
- security maintenance
- API integration
- media handling
- preview/publishing workflow decisions

Do not describe headless WordPress as maintenance-free or immune to security issues. The public frontend is decoupled, but the WordPress installation still exists and must be maintained.

---

## Scenario 3 — Client Needs Publishing, But WordPress Is Unnecessary

Typical case:
- client wants an easy editor
- client does not specifically need WordPress
- Book Moar wants simpler infrastructure

### Preferred Approach
Consider a lightweight Git-based or compatible CMS such as Decap CMS, TinaCMS, or another appropriate content editor.

Possible architecture:

```
Client -> Simple CMS/Admin -> Repository Content -> Build/Deploy -> Website
```

The client should have a simple publishing experience without needing GitHub knowledge.

Do not automatically install a CMS just because this option exists. Choose it only when ongoing client editing is actually required.

---

## Book Moar Default Decision Rule

### Client does not actively publish
Migrate valuable content into the new site and retire the old CMS when practical.

### Client actively publishes and wants to keep WordPress
Consider headless WordPress.

### Client actively publishes but does not care about WordPress
Consider a lightweight CMS appropriate to the project.

### Client does not need self-service editing
Prefer simple static/repository-managed content.

---

## SEO Preservation Rules

Existing content must be included in the SEO migration review.

For every meaningful existing post/page:
- preserve the existing URL when practical
- otherwise map it to the closest relevant new URL with a 301 redirect
- preserve or improve search intent and useful content
- preserve important internal links
- preserve dates/authorship where meaningful
- update canonical URLs intentionally
- include migrated content in the sitemap as appropriate
- verify important old URLs after launch

**Never allow valuable existing blog URLs to become accidental 404s.**

Matching an old URL reduces migration risk but does not guarantee unchanged rankings. Content, rendering, internal linking, metadata, site architecture, and other changes can affect organic performance.

---

## Content Ownership & Portability

Whenever practical:
- the client should retain ownership of their written content and media
- avoid unnecessary vendor lock-in
- maintain a practical export path
- document where content lives
- document how the client publishes
- document who is responsible for CMS maintenance

---

## Before Choosing a CMS Strategy

Present the recommended approach and explain why it fits this client.

Do not migrate or retire an existing CMS until:
1. the content inventory is complete,
2. SEO implications are accounted for,
3. the publishing workflow is understood, and
4. the migration approach is approved.

## Core Rule

**Preserve the client's content, SEO value, and ability to publish — not necessarily the old technology.**
