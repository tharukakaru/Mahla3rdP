# Mahla hosting

## Local preview
Node >=22.18.0 required. Extract the source ZIP, run `npm ci`, then `.\Start-Preview.ps1`. Open http://127.0.0.1:5242/en or http://127.0.0.1:5242/en/portal. Localhost links work only on this computer.

## Static upload
MAHLA_FINAL_HOSTING_2026-10-13.zip contains the complete exported website. Upload its contents to a static host, preserving all directories. Share the host's HTTPS URL. Do not open the HTML as a local file. Recreate with `npm ci` and `npm run build:static`; upload `out` contents. Stop any server serving `out` before rebuilding on Windows. Directory index serving is required. `_redirects` and `_headers` are supplied for compatible hosts; configure equivalent rules elsewhere. Avoid a blanket SPA fallback.

The included static export is intentionally NOINDEX with local canonical/sitemap URLs for design review. Before public launch, copy `.env.example` to `.env.local`, set NEXT_PUBLIC_SITE_URL to the final HTTPS marketing origin, NEXT_PUBLIC_LEGACY_ORIGIN to the preserved application's separate HTTPS origin, and SITE_INDEXABLE=true. Rebuild after these changes.

## Existing backend must be preserved
Booking, classes, chart and sign-in hand off to the existing remote application. This marketing build does not include its account/database/payment backend. Do not replace that application with static files. Marketing and legacy origins must differ under the current configuration; same-origin path routing would require separately validated routing changes. The member space is a presentation preview. Contact opens the visitor's email client, not a new server email service.

For Node hosting instead: `npm ci`, `npm run build`, then `npm run start -- --port 3000` behind an HTTPS proxy. No hosting/DNS was changed here.

## Final acceptance
Verify public URLs, HTTPS, legal copy, videos, navigation, contact, existing account/booking/chart flows, redirects, sitemap and robots. Remote provider/account/payment acceptance was not performed. Review the tree animation visually: its three rigid branch groups approximate movement from flat artwork.

## Approved 13 October update
This package includes smaller animated statistics, control-free method videos, three looping Pinterest service videos and the new closing clip with its dark background removed by canvas alpha rendering. The original MP4 is retained; transparency is produced in the website renderer. Motion respects reduced-motion and pause settings.

For editing in VS Code, extract MAHLA_FINAL_SOURCE_2026-10-13.zip and open the folder containing package.json. Run npm ci, npm run build, npm run start; then open http://localhost:3000/en.

Navigation background: src/app/review-polish.css line 2, .site-header background. Middle capsule and white hover: line 25.
