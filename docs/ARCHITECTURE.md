# MAHLA — architecture and audit

## Audit, 5 October 2026
The requested D:\Maha web folder was empty. No source, lockfile, database, authentication, CMS, API, payment, calendar or deployment configuration was available to inspect. The public site and seven supplied portal screenshots are evidence of the interface, not proof that its backend works.

Verified public routes: /, /about, /contact, /booking, /classes, /articles, /sign-in and /dashboard/chart. The PDF shows Overview, Profile, saved birth charts, Bookings, Classes, Support and Settings, including Google sign-in, Telegram linking and Gregorian/Jalali calendar preference. Preserve these in the existing application; do not reproduce private data in fixtures.

Contact sources: https://mahla3rdpoint.com/contact. About source: https://mahla3rdpoint.com/about. Reference principles: https://floema.com/en. No assets or layouts copied from Floema.

## Direction and sitemap
Alabaster and obsidian public pages, emerald immersive chapters, oxidised brass details. Three displaced planes express a perspective beyond two opposing positions. Editorial typography and a real existing Mahla portrait balance abstraction with a person.

Homepage → method → pathways → service detail → branded booking hand-off. Supporting about, birth-chart introduction, academy, journal/archive, article, contact, privacy, terms and portal-entry pages.

## System
Next.js App Router, React server components, strict TypeScript, CSS design tokens. Small client islands own menus, language selection, booking selection, contact composition, article filtering, media playback and scroll-linked geometry. Native scrolling; no WebGL dependency. Server-rendered content remains visible when JavaScript is unavailable. No fake auth, availability, payments, testimonials, birth-chart computations or success messages.

## Content and languages
Typed English content lives in src/content. Service prices remain null until verified. Locale registry records native name, direction, script and review/publish status. English is canonical. Unpublished translations are excluded from navigation and indexing; translated content falls back to English. Locale switching retains route. CSS logical properties and script-aware font stacks support RTL. No machine translation is published automatically.

## Motion and mobile
One scroll-linked architectural composition; understated hover feedback and native route navigation. Mobile uses a shorter composition with readable headlines, 44px targets and ordinary vertical flow. Reduced-motion/data settings keep static posters. Videos pause offscreen and while the tab is hidden. No fake loader, scroll-jacking, cursor dependency or long pinned section.

## Media manifest
| Asset | Purpose | Format / frame | Prompt | Fallback | Target / alt |
|---|---|---|---|---|---|
| Threshold desktop | reveal a third passage beyond duality | 5s MP4 16:9 | Monumental dark architectural planes in an alabaster environment part to reveal a third sunlit passage. Smoked glass, tactile stone, restrained brass, slow dolly, no symbols, text, people or sound. | static poster | <2MB; decorative |
| Threshold mobile | same narrative, dedicated vertical framing | 5s MP4 9:16 | Same architectural direction, focal passage in central 60%, generous vertical negative space. | static poster | <1.2MB; decorative |
| Material desktop | sovereignty chapter texture | 5s MP4 16:9 | Macro study of black silk, polished stone and smoked glass in one shaft of sunlight; a third form becomes visible, physically believable, minimal, no text or symbols. | static poster | <2MB; decorative |
| Material mobile | intentional vertical material composition | 5s MP4 9:16 | Same three materials, composed vertically with central focal plane and calm negative space. | static poster | <1.2MB; decorative |
| Mahla portrait | real person behind the work | existing image / WebP | No generation; reuse the existing public site's avatar asset. | typographic profile | <150KB; descriptive alt |

## Performance and SEO
Static prerendered marketing pages, local responsive WebP posters, local fonts, lazy noncritical video, dimensioned images, no third-party analytics. Per-page titles/descriptions/canonical/OpenGraph, usable-locale sitemap/hreflang and honest structured data. Preview is noindex until production origin and integrations are configured. Lighthouse targets are goals, not unmeasured claims.

## Phases / limits
1. Audit and design system. 2. Responsive public routes and content. 3. Motion and media. 4. Accessible interactions and verified live-tool hand-offs. 5. Build/type checks and viewport/browser QA. 6. Backend migration only after source is supplied; connect actual availability, accounts, chart engine and portal theme. 7. Approved translations and policy review before launch.

New files belong only to this new folder. The existing live website and backend are not modified. Deployment to the live domain requires an explicit origin/routing plan so existing application links never loop into the new marketing site.
