# PROJECT SETUP WORKFLOW

Use this workflow whenever starting a new Book Moar client website.

## 0. Client Identity Gate — HARD STOP

Before intake, research, SEO auditing, or implementation, follow the mandatory Client Identity Gate in `AGENTS.md`.

If identity is not already explicitly confirmed by the user:
1. Use user-supplied information first.
2. If necessary, perform only a minimal lookup to identify one likely candidate.
3. Present business name, domain, city/state, and business type.
4. STOP.
5. Wait for explicit human confirmation.

Do not infer authorization from the project folder name or from apparently matching search results.

After confirmation, record the confirmed identity in `CLIENT.md` and continue.

## 0.5 Project Isolation Gate — HARD STOP

Before reading or generating client-specific work, confirm that the current project is isolated.

Unless explicitly authorized by the user:
1. Do not inspect, search, read, copy from, or modify any sibling client/prospect directory.
2. Do not scan parent project folders to locate prior Book Moar builds.
3. Do not use a previous client/prospect project as a fallback source for AGENTS.md, context files, code, copy, layout, imagery, or research.
4. Use only the current project, the BOOKMOAR-WEBSITE-STARTER repository, verified client/public sources, and sources the user explicitly permits.
5. If a required starter file cannot be found or cloned, STOP and report the missing file or access problem.

**Previous client work must not leak into the current project.**

## 1. Intake First
Before building anything, gather the required business information.

Read:
- CLIENT.md
- context/SOURCE-OF-TRUTH.md
- context/BRAND.md
- context/OFFER.md
- context/COMPETITORS.md
- context/RESEARCH.md

If required information is missing, ask the user for it before implementation.

## 2. Existing-Site SEO Gate

If `CLIENT.md` identifies an existing live website:

1. Read `docs/SEO-MIGRATION.md`.
2. Audit/inventory the existing site's meaningful URLs before redesigning.
3. Use Search Console data when available.
4. Complete `context/SEO-MIGRATION-PLAN.md`.
5. Preserve valuable URLs and search intent wherever practical.
6. Define required 301 redirects before implementation.

**Do not begin the redesign while existing SEO value is still unaccounted for.**

If this is a brand-new website with no existing site, mark the migration plan NOT APPLICABLE and continue.

## 3. CMS / Blog Preservation Gate

If the existing website contains a blog, news, recipes, resources, or other client-managed content, read `docs/CMS-MIGRATION.md` before deciding how the new site will handle that content.

Do not retire or replace an existing CMS until the content, SEO implications, publishing frequency, and client's editing needs are understood.

## 4. Research
Use verified client sources and public research to understand:
- services
- customers
- competitors
- service area
- trust signals
- positioning opportunities
- common objections
- local search intent

Do not overwrite verified facts with assumptions.

## 5. Plan Before Code
Produce a concise plan covering:
- recommended sitemap
- primary conversion path
- page priorities
- homepage section strategy
- service-page strategy
- local SEO approach
- internal linking
- schema
- forms / booking flow
- visual direction

Wait for approval when major strategy or positioning choices are involved.

## 6. Build Distinctly
Do not reuse a previous client's exact layout.

The process is standardized. The design is not.

Choose visual direction based on:
- the client's brand
- industry expectations
- customer psychology
- available assets
- competitor landscape
- desired positioning

## 7. Validate
Run:
- QA checklist
- SEO review
- forms and booking checks
- mobile checks
- accessibility checks
- performance checks

## 8. Launch
Use LAUNCH-CHECKLIST.md.

Never change DNS without first preserving existing DNS records and protecting email-related records.
