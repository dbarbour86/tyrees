# TYREE'S AUTO DETAILING — CLIENT BUILD PROMPT

```text
These screenshots show the current design Mike likes. Use them as the visual baseline. Preserve its identity while improving layout, spacing, photography, package comparison, and the appointment request flow.
Build an improved website for Tyree’s Auto Detailing using our Book Moar starter.

STARTER REPOSITORY:
https://github.com/dbarbour86/BOOKMOAR-WEBSITE-STARTER

CURRENT WEBSITE:
https://tyreesautodetailing.com/

GOAL
Mike likes his current website. Create a noticeably more polished version that preserves its identity, business details, services, photography, and useful content. Improve what we already have rather than replacing it with a generic detailing template.

This client will also be our first test of connecting a custom website to Votel. Prepare clean integration points now; live integration comes separately.

1. MANDATORY WORKSPACE PREFLIGHT
2. AUDIT BEFORE BUILDING
3. VISUAL DIRECTION
4. CONTENT AND PACKAGES
5. CUSTOMER FLOW
6. GALLERY NOW; OWNER UPLOADS LATER
7. PREPARE FOR VOTEL
8. SEO, ACCESSIBILITY, AND PERFORMANCE
9. BUILD AND VERIFY
```

---

# 🚨 BOOK MOAR WEBSITE STARTER — MASTER TEMPLATE

> **DO NOT USE THIS REPOSITORY AS A CLIENT WEBSITE.**
>
> This is the master starter used to create new Book Moar client website repositories.

## 🛡️ Mandatory Agent Safety & Workspace Guardrails

These rules apply to **every** Book Moar client project, before research, cloning, coding, testing, or deployment. They complement the Client Identity Gate and Project Isolation Gate in AGENTS.md.

### Workspace isolation
- Operate only within the **currently opened client workspace** and its explicitly authorized project files.
- Do not inspect, search, read, modify, or delete unrelated local folders, sibling client projects, or previous builds. In particular, do not access `C:\Projects\Book Moar` without explicit permission.
- Use `https://github.com/dbarbour86/BOOKMOAR-WEBSITE-STARTER` as the canonical starter source. Treat the master repository as **read-only** during client builds.
- Create client work in a separate, isolated project; never overwrite or edit the master starter or another client's repository.
- If an action requires access outside the current workspace, explain why and obtain explicit approval **before** proceeding. Narrowly scoped diagnostic access (such as reading a clone error log in a temporary directory) also requires approval when outside the workspace.

### Git, deployments, and integrations
- Never push commits, force-push, reset or delete branches, or modify remote repositories without explicit approval.
- Never deploy to Vercel, change production domains, or modify live sites without explicit approval.
- Never activate live Votel/CRM, SMS, voice, booking, or payment integrations without explicit approval.
- Keep API keys, webhook secrets, and credentials out of client-side code and commits.

### Failure handling
- If cloning, installation, or a command fails, inspect the error and attempt only safe, in-workspace remedies.
- Do **not** search unrelated local folders or reuse a previous client's project as a fallback.
- If a fix requires out-of-workspace access, stop, explain the issue, and ask first.
- Never silently replace or delete an existing project.

### Verification before completion
- Run the production build and relevant checks.
- Verify navigation, links, forms, and CTAs; inspect desktop and mobile behavior.
- Check accessibility, SEO basics, and broken assets.
- Report any incomplete, untested, or approval-dependent items accurately.

**Operating principle:** Stay within the assigned workspace. Protect existing projects. Ask before consequential actions.

> These are agent operating instructions, not an operating-system security boundary. Configure Antigravity's workspace permissions and command approvals separately where supported.

## 🚀 START HERE — First Prompt for Antigravity

Copy the prompt below when starting a new Book Moar client website. Replace the bracketed client information before sending it to Antigravity.

```text
We are beginning a completely NEW Book Moar website project for:

CLIENT: [BUSINESS NAME]
CURRENT PUBLIC WEBSITE: [DOMAIN / URL]

Use the official Book Moar Website Starter as the required foundation:
https://github.com/dbarbour86/BOOKMOAR-WEBSITE-STARTER

Create a NEW isolated client project from the starter.

CRITICAL PROJECT BOUNDARY:
- Do NOT modify BOOKMOAR-WEBSITE-STARTER.
- Do NOT locate, inspect, open, clone, modify, or borrow from previous projects for this client.
- Do NOT inspect unrelated sibling client/prospect projects.
- Do NOT use another Book Moar client site as a design, content, factual, or code fallback.
- The current PUBLIC client website may be researched as a business/content/visual/SEO reference, but its underlying repository/source project is out of scope unless I explicitly authorize it.
- All client-specific research, assets, context, code, and configuration belong in this NEW client project.

Before substantive client work:
1. Read and follow AGENTS.md. Also read BOOK-MOAR-STANDARDS.md and docs/ART-DIRECTION-REVIEW.md (mandatory); docs/DESIGN-DIRECTIONS-ROADMAP.md is future planning only.
2. Read the relevant files under /docs and /context.
3. Complete the Client Identity Gate.
4. Complete the Project Isolation Gate.
5. Follow the factual-accuracy and SOURCE-OF-TRUTH process.
6. Follow Book Moar design, CRO, SEO, forms/leads, internal-linking, Votel, QA, and launch standards where applicable.

BOOK MOAR PURPOSE:
Book Moar helps local businesses turn more leads into booked jobs — and booked jobs into repeat customers.

Core lifecycle:
Capture → Book → Remind → Follow Up → Review / Rebook

For the website, prioritize a clear customer journey and conversion experience. Do not expose unnecessary CRM/automation complexity to customers.

IMPORTANT DESIGN PRINCIPLE:
The process is standardized. The visual design is not.

Do NOT automatically reuse the visual language, layout, hero, cards, section structure, colors, typography, or aesthetic of another Book Moar client.

Research this business and determine a client-specific visual direction from its actual brand, customers, services, photography, positioning, and competitive context.

Research aggressively. Publish selectively.

FIRST PHASE — RESEARCH AND PLAN ONLY. DO NOT CODE YET.

After the identity gate is confirmed:
1. Research the current public website thoroughly.
2. Research authorized public business sources where appropriate.
3. Populate the project-specific context files and SOURCE-OF-TRUTH.md.
4. Audit the current site's visual identity and brand DNA.
5. Audit the customer/conversion journey.
6. Audit services/offers and identify any business rules that affect qualification or booking.
7. Audit public SEO, URLs, metadata, local-search footprint, and migration risks.
8. Inventory authentic usable imagery/assets.
9. Identify what should be preserved, elevated, reimagined, and removed.
10. Recommend a client-specific visual/art direction.
11. Recommend information architecture and homepage hierarchy.
12. Recommend the primary lead/booking journey.
13. Define website responsibilities versus future Votel responsibilities.
14. Identify factual gaps or decisions requiring my input.
15. Explicitly list what should NOT be built yet to prevent scope creep.

Do not invent facts, reviews, prices, services, awards, guarantees, availability, business rules, or Votel capabilities.

Do not begin implementation after completing the report.

STOP and present a concise Pre-Implementation Research & Architecture Report for my approval.

Only begin production code after I explicitly approve the direction.
```

## Design system roadmap

- **Mandatory for every client:** [Book Moar Design, Conversion & SEO Standards](BOOK-MOAR-STANDARDS.md).
- **Mandatory art direction review:** [Art Direction & Visual Review](docs/ART-DIRECTION-REVIEW.md).
- **Future, not yet implemented:** [Six candidate design directions and adoption gates](docs/DESIGN-DIRECTIONS-ROADMAP.md).
- Build client-specific designs now; do not create or impose reusable style templates until several completed projects have been reviewed.

## Purpose

This repository contains Book Moar's reusable website-building system:
- client context templates
- Book Moar operating instructions
- curated marketing/SEO skills
- design, CRO, local SEO, linking, launch, and Votel integration guidance

## New Client Workflow

1. Create a new client repository from this starter.
2. Fill in `CLIENT.md` and the files under `context/`.
3. Add client assets and research.
4. Let the coding agent plan the site before implementation.
5. Build, review, test, connect forms/booking, then deploy.

## Important

- This repo is the canonical starter.
- Client-specific work belongs in the client's own repository.
- Existing production client repos should not automatically inherit future starter changes.
- Third-party marketing skills retain their original attribution/license.
