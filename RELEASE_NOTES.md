# Mahla refinement — 10 October 2026

- Grey navigation capsule, white hover and The Path label.
- Visible 8+, 9+, 10+ counter progression and existing 2,000+ total, replayed on viewport entry.
- Purple whole-row accordion hover/focus.
- Three dark luxury generated service images and zoom hover.
- Botanical line animation replaces closing circle.
- Member moon/card media removed; six tabs preserved.
- Narrow right-edge drawer with consistent menu fonts; header Sign in unchanged.
- Three small tree perimeter groups move independently using rigid rotations. No animated scaling/mesh deformation. Trunk/roots remain fixed; reduced-motion fallback is static. Visual approval still needed.
- Approved hero layout, portrait, method clips, Inner Orbit, YouTube and journal preserved.

Updated components: navigation, journey-stats, home, space-preview, editorial, footer, living-hero. Added branch-breeze. Updated review-polish.css, next.config.ts, package.json, Start-Preview.ps1, robots.ts and sitemap.ts. Added static build script, three luxury PNGs and documentation. Original archive/source and previous preview remain untouched.

## Actual tests
PASSED: 3 unit tests; normal production build and TypeScript; static build; 21 route pages, 9 original media assets, 3 expected 404s and 3 redirects.

PASSED browser checks: navigation hover/drawer/fonts/Escape, counter intermediate values/replay, purple rows, decoded images/zoom, tree movement/fixed roots/reduced motion, six member tabs, 20 page/viewport checks and drawers at 320/390/768/1440px. No JavaScript errors observed. Tree canvas test tolerates one channel level of readback noise.

PASSED static browser checks: root redirect, home header, client navigation, member tab, 21 page files, no observed JavaScript errors. Windows export initially failed while its output server was open; complete export passed after stopping that server.

NOT TESTED: public hosting, DNS/TLS and remote login/booking/payment/providers. No production deployment performed. See HOSTING_GUIDE.md.

## Branch visibility refinement
Increased the three branch angles to approximately 2.6–3 degrees with independent 12/15/13-second cycles. Reduced gust attenuation so movement remains visible between gusts. Fixed trunk and reduced-motion behavior preserved. Normal and static builds passed again.


## Attached leaf flutter
Branch cycles now 8.5/10.5/9.5 seconds. Six small attached foliage clusters inherit their parent branch movement plus independent gentle rigid rotation. Trunk, hero layout and reduced-motion fallback preserved. Both builds passed again.

