# BOOK MOAR MASTER AGENT INSTRUCTIONS

This repository is the **Book Moar master website starter**.

## Core Rule
Do not treat this repository as a finished website or a client project. It exists to generate client-specific website repositories.

## CLIENT IDENTITY GATE — MANDATORY HARD STOP

Before substantive research, SEO auditing, strategy, copywriting, design, coding, or modification of client context files, establish and receive human confirmation of the client's identity.

### If the user supplied a business name and website URL
Repeat back:
- Business name
- Website/domain
- City/state if known
- Business type if known

Then STOP and ask the user to explicitly confirm that this is the correct business.

### If the business name or website URL is missing
You may perform only a minimal identity lookup sufficient to locate a likely candidate. Do not begin the normal research workflow.

Present:
- Business name
- Website/domain
- City/state
- Business type

Then STOP and ask the user to explicitly confirm that this is the correct business.

### What Does NOT Count as Confirmation
Never treat any of these as confirmation:
- workspace or folder name
- repository name
- search result
- matching or similar business name
- matching domain
- matching social profile
- matching address or phone
- your own confidence
- multiple sources that appear to agree

These may help identify a candidate, but **human confirmation is always required**.

### Before Confirmation You MUST NOT
- populate or materially modify CLIENT.md beyond a temporary candidate identity
- populate SOURCE-OF-TRUTH.md
- perform a full site crawl
- perform the SEO migration audit
- research competitors
- develop positioning or offers
- write website copy
- create a sitemap/strategy
- design pages
- write production code

Keep pre-confirmation work minimal.

### After Explicit Confirmation
Record the confirmed identity in CLIENT.md and then proceed with the normal Book Moar workflow.

**No confirmation = no substantive work.**

## Before Building
1. Read `CLIENT.md`.
2. Read all relevant files in `context/`.
3. Use the appropriate skills in `.agents/skills/`.
4. Research the client's market, audience, competitors, offer, and local service area.
5. Plan site architecture, conversion path, SEO, internal linking, and schema before implementation.

## FACTUAL CLAIMS — CLAIM SCOPE IS SACRED
Never strengthen, broaden, or embellish a verified client fact during copywriting.

A narrower source claim must remain narrow. For example, "no chemical fertilizer" does not authorize "chemical-free," "no synthetic sprays," "pesticide-free," "herbicide-free," or "organic."

Plausibility is not evidence. Marketing language must not add factual meaning that the source does not support.

Business-controlled sources such as the client's official website and official social profiles may verify facts. Record important source provenance in `context/SOURCE-OF-TRUTH.md`. If sources conflict, stop and request human review.

Before launch or prospect-demo delivery, audit substantive claims. Publish only claims that are VERIFIED or SAFE PARAPHRASES. Rewrite or remove anything UNSUPPORTED or INFERRED.

## Build Priorities
- Conversion first.
- Clear local-service positioning.
- Strong mobile UX.
- Fast performance.
- Accessible implementation.
- Real reviews and real proof when available.
- Distinct visual direction for each client.
- Avoid generic AI/SaaS aesthetics.
- Avoid overusing cards, badges, centered layouts, and repetitive section patterns.
- Do not mechanically reuse the previous client's layout.

## Launch Rule
Before launch, verify SEO, schema, analytics, accessibility, forms, booking, mobile behavior, performance, canonical URLs, sitemap, and robots directives.

## DNS / EMAIL SAFETY
When taking over or launching a client website:
- Record/export the existing DNS configuration first.
- Change only records required for the website.
- Never modify MX, SPF, DKIM, or DMARC unless email migration is explicitly part of the job.
- Preserve the client's existing @domain email setup.

## Votel
Treat Votel as the CRM/automation/booking backend, not as the website design system. Keep the Book Moar custom website independent wherever practical.

## PROJECT ISOLATION — MANDATORY
Each client/prospect website project must remain isolated from every other client/prospect project.

Unless the user explicitly instructs otherwise:
- Do not inspect, search, read, copy from, or modify sibling project directories.
- Do not use previous client/prospect projects as design references, content sources, factual sources, code fallbacks, or templates.
- Do not scan parent project folders to discover other Book Moar projects.
- Use only the current project, this starter repository, verified client/public sources, and sources explicitly authorized by the user.
- If a required starter file, instruction, or dependency cannot be found, STOP and report exactly what is missing rather than searching unrelated project directories.
- Never infer permission to access another project because it exists locally or appears related.

The process may be reused. Previous client work must not leak into the current build.
