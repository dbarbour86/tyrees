# SEO MIGRATION PLAN: TYREE'S AUTO DETAILING

## 1. Existing Website Baseline
- **Domain:** `https://tyreesautodetailing.com/`
- **Audit Date:** 2026-10-17
- **Existing Framework:** Next.js App Router (discovered from live page metadata)
- **Local Service Geo-Target:** Clayton, NC (Latitude: ~35.65, Longitude: ~-78.45) and surrounding Johnston/Wake County municipalities.

---

## 2. Existing URL Inventory & Migration Strategy

| Existing URL | Purpose / Search Intent | SEO Evidence / Value | Proposed New URL | Action | Notes |
|---|---|---|---|---|---|
| `/` | Brand homepage, Clayton auto detailing, primary appointment intent | Primary ranking asset for brand name and local Clayton searches | `/` | PRESERVE + IMPROVE | Retain black-and-blue visual identity, upgrade layout hierarchy, enhance comparison table and appointment request |
| `/services` | Services & package pricing (Gold, Platinum, Titanium, Diamond) | High commercial intent ("car detailing prices clayton nc") | `/services` | PRESERVE + IMPROVE | Add clear package comparison matrix, explicit maintenance qualification, direct package preselection |
| `/gallery` | Work portfolio (Boats, RVs, trucks, side-by-sides, cars) | Visual conversion proof, image search | `/gallery` | PRESERVE + IMPROVE | Add category filtering tabs, accessible lightbox, typed data model ready for future CMS/owner upload |
| `/service-area` | Service area hub (Johnston & Wake Counties) | Geo-relevance hub linking to municipal pages | `/service-area` | PRESERVE + IMPROVE | Maintain full internal linking network to local city landing pages |
| `/service-area/clayton-nc` | Local landing page for Clayton, NC | Core local keyword ranking | `/service-area/clayton-nc` | PRESERVE + IMPROVE | Targeted local schema, localized copy, fast text/call CTAs |
| `/service-area/smithfield-nc` | Local landing page for Smithfield, NC | Targeted city landing page | `/service-area/smithfield-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/garner-nc` | Local landing page for Garner, NC | Targeted city landing page | `/service-area/garner-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/knightdale-nc` | Local landing page for Knightdale, NC | Targeted city landing page | `/service-area/knightdale-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/wendell-nc` | Local landing page for Wendell, NC | Targeted city landing page | `/service-area/wendell-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/zebulon-nc` | Local landing page for Zebulon, NC | Targeted city landing page | `/service-area/zebulon-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/raleigh-nc` | Local landing page for Raleigh, NC | Targeted metro landing page | `/service-area/raleigh-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/apex-nc` | Local landing page for Apex, NC | Targeted city landing page | `/service-area/apex-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/holly-springs-nc` | Local landing page for Holly Springs, NC | Targeted city landing page | `/service-area/holly-springs-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/service-area/fuquay-varina-nc` | Local landing page for Fuquay-Varina, NC | Targeted city landing page | `/service-area/fuquay-varina-nc` | PRESERVE + IMPROVE | Maintain municipal search intent |
| `/about` | About Mike, 20+ years experience, company history | E-E-A-T and personal brand trust | `/about` | PRESERVE + IMPROVE | Highlight 20+ years of direct experience, practical detailing philosophy |
| `/reviews` | Verified customer reviews & Google testimonials | Social proof, trust signals | `/reviews` | PRESERVE + IMPROVE | Showcase authentic Google testimonials with Google review verification link |
| `/contact` | Contact page, phone, text, address, appointment form | Direct conversion and contact point | `/contact` | PRESERVE + IMPROVE | Unified appointment request form with package prefill, SMS/call buttons |
| `/privacy` | Privacy policy & SMS consent disclosure | Compliance & legal trust | `/privacy` | PRESERVE + IMPROVE | Add clear SMS/Votel communication disclosure (no marketing spam without consent) |
| `/terms` | Terms of service | Compliance & legal trust | `/terms` | PRESERVE + IMPROVE | Clarify estimate vs confirmed booking terms |

---

## 3. Redirect Map
All existing URLs are 100% preserved in their exact paths; zero URLs are orphaned or deleted. No 301 redirects are required for internal paths at this phase.

---

## 4. Technical SEO & Schema Specifications
- **Canonical URLs:** Self-referencing canonicals using `https://tyreesautodetailing.com`.
- **Structured Data (JSON-LD):**
  - `AutoDetailing` / `LocalBusiness` schema on all pages with NAP (Name, Address, Phone: 2809 Merchantile Ct, Clayton, NC 27520, (919) 320-3010).
  - GeoCoordinates: 35.6507, -78.4564.
  - PriceRange: `$$$`.
  - Service area definitions linking to Wake County and Johnston County.
- **Robots / Staging Directives:**
  - In staging/demo environments, apply `noindex, nofollow` to prevent indexation of development previews.
  - Production build configured with clean `robots.txt` and `sitemap.xml`.
