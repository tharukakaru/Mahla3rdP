# MAHLA — The Third Point

The public website redesign built from the supplied brief. The original D:\Maha web folder was empty: this is a new Next.js application, not a migration of the missing existing backend.

## Run

Requires Node.js 22.18 or later (Node.js 24 is recommended and was used for verification).

```sh
npm install
npm run dev
```

Open http://localhost:3000/en. For production: `npm run build`, then `npm start`.

## Included

- 21 statically rendered English pages: homepage, method, pathways, five service pages, about, contact, booking, academy, chart introduction, sign-in handoff, member-space design preview, journal, three notes, privacy and terms.
- Cloud hero with the original golden olive tree; only detached leaves animate with simulated wind, drag and gravity. Pause control, reduced-motion support and offscreen/background suspension.
- White navigation with Sign in, responsive pastel pages, glass cards, local fonts and tactile hover/press interactions.
- Original cloud, tree and aura artwork reused from the approved design. Previous architectural media remains available in public/media but the hero does not load a 3D model or video.
- Real portrait reused from the existing public site; no invented identity, credentials, pricing, testimonials or outcomes.
- Typed content, language publication registry, English fallback, route-preserving locale helper, RTL/script CSS.
- Accessible native dialog, focus restoration, semantic forms, journal filters, booking pathway selection, metadata, sitemap, robots and structured data.

## Existing functionality / integration boundary

Booking continues to https://mahla3rdpoint.com/booking. Birth charts, classes and sign-in link to the current application. Selection is not transferred as a reservation; the visitor must confirm the service in the live booking tool. No fake availability, payments, chart calculations or login is implemented.

The contact form prepares a mailto draft and offers copyable text; it does not claim to send mail. Native HTML validation covers required fields and email; message limits keep drafts bounded. A server email handler can replace this after the existing integration is supplied.

The PDF only showed the portal interface. Its implementation, accounts, database, support, Telegram/Google connections, calendar and payment integrations remain unavailable. To integrate them, provide the original repository/source. No live backend was changed.

## Content and launch

- Edit `src/content/en.ts`, `services.ts` and `articles.ts`. The notes are new editorial introductions based on the brief, with links to the original published journal; no publication date or author is fabricated.
- English is the only published language. Add a reviewed dictionary to `src/lib/i18n.ts` and change its status to published to add a language. Extend content models with translated services/articles when publishing that locale. Do not publish mixed-language records as fully translated content.
- Policies are descriptive drafts for this preview; approve final business, cancellation and privacy policies before launch.
- Copy `.env.example` to `.env.local` for deployment configuration. Do not store private credentials in NEXT_PUBLIC variables.
- Set the final marketing origin and use a **distinct existing-application origin** for booking/portal hand-offs if replacing the live domain. Otherwise those links will loop. Preserve the original backend routes with reverse-proxy routing or a separate application subdomain.
- Set `SITE_INDEXABLE=true` only after domain routing, business content, policies and translations are approved. Preview defaults to noindex and disallow-all robots.

## Checks

```sh
npm run typecheck
npm test
npm run build
```

Architecture, audit, media manifest and integration risks are documented in `docs/ARCHITECTURE.md`. Actual verification results and outstanding checks are in `docs/QA.md`.

No deployment or production DNS changes are included.
