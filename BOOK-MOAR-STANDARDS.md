# Book Moar — Mandatory Design, Conversion & SEO Standards

**Mission:** Get found. Build trust. Get more bookings.

Read this file before researching, designing, coding, or launching any client website. Adapt the visual design to the individual business; never clone a reference site. SEO is foundational technical quality, not a promise of rankings or an ongoing SEO service.

## 1. Above-the-fold conversion
- In the first viewport, communicate what the business does, who it serves, why it is credible, and the next step.
- Show the strongest **verified** social proof where practical: authentic Google rating/review count, awards, credentials, years of experience, media mentions. Link to primary sources when possible. Never invent claims.
- Make a working phone link and the primary quote/request/booking action accessible without scrolling on desktop and mobile.
- A compact hero form is allowed when it improves clarity; otherwise use a prominent CTA linking to a dedicated form. Never duplicate large forms just to fill space.
- Offer supported contact channels (phone, form, text, chat) through a small, accessible widget if useful; do not imply integrations are active before they are.
- Avoid obstructive popups, tiny text, badge overload, dashboard-like grids, and floating controls that block mobile content.

## 2. Design
- Establish the client's identity and original design system first: typography, palette, photography, spacing, component patterns, mobile hierarchy.
- Prefer bold readable headlines, authentic/licensed imagery, generous whitespace, restrained motion, and varied editorial sections.
- Build the homepage around the customer journey; move detailed service information to useful supporting pages.
- Ensure contrast, keyboard access, visible focus, meaningful alt text, labeled forms, and reduced-motion support.

## 2A. Art direction: avoid the component-grid look
- **Standardize the conversion system, not the visual design.** Client sites should feel individually art-directed rather than assembled from a shared grid of cards.
- Before implementation, define a visual concept: photographic direction, typography scale, contrast, section rhythm, imagery treatments, brand-specific details, and mobile adaptation. Explain why each choice fits the actual business.
- Let authentic, properly licensed imagery do real storytelling work. Favor editorial split layouts, image-led service features, immersive sections, and occasional intentional overlaps where useful; do not make every section a row of identical cards.
- Cards remain appropriate for scannable comparisons, structured details, and forms; they are not the default layout for every service, review, credential, or location.
- Use restrained alternation between light/dark, close-up/wide imagery, dense/quiet content, and text/image sections. Avoid gratuitous diagonal shapes, parallax, heavy motion, and novelty effects.
- Feature the owner/team, actual work, equipment, and local context when authentic assets exist. Never present AI-generated people, stock imagery, or unrelated vehicles as photos of the client's actual business.
- Limit repetitive homepage sections while keeping comprehensive, useful supporting service pages and discoverable navigation. Do not remove useful content or URLs solely to shorten the homepage.
- Check visual polish at desktop and mobile: typography readability, image crops, focal points, overlay contrast, spacing, transitions, sticky/floating controls, and one obvious conversion path.
- Reference sites (including Scorpion/Go-Forth) are **quality benchmarks, not templates**. Never copy their assets, unique composition, graphic motifs, layout, copy, or trade dress. See [Art Direction Review Guide](docs/ART-DIRECTION-REVIEW.md).

## 2B. Show, don't just tell: purposeful visual storytelling
- For each major service, promise, or customer-journey step, **consider whether a useful visual can demonstrate it more clearly than another paragraph or generic card**. Selectively use authentic photos, before/after comparisons, illustrated workflows, annotated screenshots, device mockups, or short demos.
- Prefer visuals that answer a customer question or make an outcome tangible: what happens after requesting a quote, how scheduling works, what the service looks like, or what results can be documented.
- Choose the visual format based on the client and the evidence available. Do not force a phone mockup, animation, gallery, or comparison slider into every site.
- **Truth in demonstration:** distinguish an illustrative/sample message exchange from real customer correspondence, actual integrations, and live functionality. Use clearly fictional names/details in sample conversations; do not present a mockup as proof a service is active.
- Protect customer privacy; never expose real messages, addresses, phone numbers, or identifying service details without appropriate permission.
- Make important information available in semantic text outside images. Provide alt text/captions, accessible controls, responsive sizing, reduced-motion alternatives, and optimized assets.
- Use visual storytelling to support the main CTA, not distract from it or create false claims.

## 3. Technical and on-page SEO
- Use crawlable semantic HTML, a logical heading hierarchy, descriptive internal links, and server-rendered/prerendered indexable content.
- Write unique factual titles and meta descriptions; set a consistent canonical URL strategy.
- Maintain correct robots directives, XML sitemap, and indexability for production pages.
- Use accurate Organization/LocalBusiness (appropriate subtype where supported) and BreadcrumbList structured data only when applicable and validated. Do not use self-serving review schema to pursue Google star snippets.
- Create substantive service pages based on real offerings and intent. Location pages must contain genuinely useful distinct information; avoid thin doorway pages, boilerplate city swaps, and keyword stuffing.
- Show consistent verified name, address (only if public and appropriate), phone, service areas, and business hours. Do not fabricate physical offices or addresses.
- Optimize images, responsive sizes, fonts, caching, and JavaScript. Aim for Core Web Vitals at the 75th percentile: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1; measure rather than claim.
- Prioritize helpful content and mobile usability; SEO should not force a cluttered hero.

## 4. Safe demos and migrations
- Keep unapproved demos separate from production and **noindex**. Do not submit demo URLs to search engines.
- Before a migration, inventory current URLs, metadata, canonicals, indexing, backlinks where accessible, sitemap, redirects, and analytics/Search Console ownership.
- Preserve valuable URLs when possible; map changed URLs to relevant destinations with permanent redirects and verify them. Avoid mass redirects to the homepage.
- Never modify live domain, DNS, hosting, Google Business Profile, or client integrations without explicit authorization.
- **Preserve email:** export existing DNS records before any change; change only approved website records. Never alter MX, SPF, DKIM, or DMARC unless an email migration is explicitly authorized.
- Do not enable real SMS, appointment booking, payments, or CRM automation for a demo without approval.

## 5. Acceptance checks
- Review screenshots at desktop (~1440px) and mobile (~390px); verify phone, CTAs, forms, and contact widget without scrolling.
- Check every primary conversion action, form validation, keyboard access, and mobile overflow.
- Run available build, lint, type checks, Lighthouse/performance review, structured-data validation, and crawl/indexability checks.
- Verify canonical, sitemap, robots, metadata, redirects, internal links, and correct demo-vs-production indexing.
- Document verified claims, unresolved questions, tests, and migration risks before sign-off.

## Implementation order
1. Research and verify the business and existing SEO footprint.
2. Establish visual identity and above-the-fold layout.
3. Build the conversion path and homepage.
4. Build useful service/about/location pages with SEO foundations.
5. Validate mobile, accessibility, performance, and SEO.
6. Obtain approval before merging, deploying publicly, or modifying live systems.

**Non-negotiable:** Never sacrifice SEO structure for appearance, and never sacrifice user experience to stuff keywords or trust badges into the first screen.
