import { spawnSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';

const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit', env: { ...process.env, MAHLA_STATIC_EXPORT: '1' },
});
if (result.status !== 0) process.exit(result.status || 1);
if (!existsSync('out/en/index.html')) throw new Error('Expected static home page is missing.');
writeFileSync('out/index.html', '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/en/"><title>Mahla — The Third Point</title><a href="/en/">Enter Mahla — The Third Point</a></html>');
const redirects = [
  '/ /en/ 302',
  ...['contact','about','method','booking','birth-chart','work-with-mahla','academy','journal','privacy','terms','portal','sign-in'].map(p=>`/${p} /en/${p}/ 301`),
  '/articles/what-is-the-3rd-point /en/journal/a-position-beyond-duality/ 301',
  '/articles/quantum-scheduling-lunar-cycles /en/journal/a-different-relationship-with-timing/ 301',
  '/articles/what-is-the-matrix /en/journal/recognising-the-pattern/ 301',
  '/articles /en/journal/ 301', '/classes /en/academy/ 301',
];
writeFileSync('out/_redirects', redirects.join('\n')+'\n');
writeFileSync('out/_headers', '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n');
console.log('Static site created in out/. Upload its contents to a static host.');
