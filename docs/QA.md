# Verification — 5 October 2026

## Passed
- Next.js production build and strict TypeScript check. 20 public content routes are statically generated, plus robots/sitemap/not-found support.
- Three data/locale tests: route-preserving language switching, unpublished-locale protection and English fallback, unique content slugs and no fabricated prices.
- HTTP route crawl: 20 linked pages return 200, each has one H1, canonical metadata and preview noindex. Five referenced image assets return 200. Three nonexistent/unpublished routes return 404. Three legacy paths redirect correctly.
- Chromium in-app-browser homepage overflow checks at 320, 360, 390, 430, 768, 1024, 1440 and 1920 widths.
- Major page templates captured at phone, larger phone, tablet, desktop and wide-screen sizes. Viewport capture dimensions were checked; early incorrectly sized supplementary captures were replaced.
- Manual screenshot review of homepage, method, service detail, About, Contact, Academy, booking, journal and portal entry. Fixed portrait intrinsic-height sizing and Academy tablet media overflow found during review.
- Mobile dialog opens; Escape closes; keyboard focus returns to the invoking menu button. Language dialog focus returns correctly and exposes only English as available.
- Booking URL selection picks Matrix Audit; selecting Sovereign Flow updates both checked radio and summary. Browser timezone appears. Final action points to the existing live booking URL.
- Journal Timing filter returns only the timing article.
- Submitting an empty contact form is blocked by native validation; name receives focus and page URL stays unchanged. No real message was sent.
- Private script-stripped HTML fixture with Persian sample headings and RTL direction: no overflow at 390 and 1440 widths; static posters and core content remain visible. This is a layout test, not an approved translation.
- Browser console checks returned no application errors on the reviewed routes.
- Four generated films compressed to roughly 334–436 KB each, silent H.264 MP4 with fast-start. WebP posters are small; real portrait is about 62 KB.

## Implemented, but not claimed as independently certified
Reduced-motion and save-data handling, offscreen/hidden-tab playback pause, video error poster fallback, no-script navigation, CSS logical layout, semantic input labels, focus indicators and minimum interactive targets.

## Not verified / still required before production
- Actual iOS Safari, Firefox, Samsung Internet, physical Android devices, screen-reader runs and 200% browser zoom.
- Lighthouse or real-user Core Web Vitals; no score is claimed. Production hosting/network performance is unmeasured.
- Full translated content and linguistic review. Only English is published.
- Existing backend/source audit, end-to-end login, payments, availability, chart computation, classes, support and account settings. These remain in the live application.
- A real outgoing email and clipboard fallback across mail clients. Contact currently composes a draft in the visitor's own email app, not server delivery.
- Final business/price/content/policy approval and production routing. The local folder had no existing app source, so the portal cannot be migrated yet.
- Deployment is not performed. The preview is noindex. Same-origin marketing/application configurations are rejected to prevent hand-off loops.

Local screenshots are under work/qa and are excluded from the source distribution. The deliverable preview images are provided separately.
