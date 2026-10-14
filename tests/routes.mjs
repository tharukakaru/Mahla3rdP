import assert from 'node:assert/strict';
const origin = process.env.TEST_ORIGIN || 'http://localhost:3000';
const queue = ['/en'];
const seen = new Set();
const assets = new Set();
while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, `${path} must load`);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path} has one main heading`);
  assert.match(html, /name="robots" content="noindex, nofollow"/, `${path} stays unindexed in preview`);
  assert.match(html, /rel="canonical"/, `${path} has a canonical`);
  for (const [, href] of html.matchAll(/href="(\/en[^"#?]*)/g)) if (!seen.has(href)) queue.push(href);
  for (const [, src] of html.matchAll(/(?:src|srcSet)="(\/media\/[^" ]+)/g)) assets.add(src);
}
for (const asset of assets) assert.equal((await fetch(origin + asset)).status, 200, `Asset ${asset}`);
for (const path of ['/en/not-a-page', '/fa', '/unknown']) assert.equal((await fetch(origin + path)).status, 404, `${path} should not publish content`);
for (const path of ['/contact', '/booking', '/articles/what-is-the-3rd-point']) {
  const response = await fetch(origin + path, { redirect: 'manual' });
  assert.equal(response.status, 308, `${path} should preserve old links through a redirect`);
}
console.log(JSON.stringify({ pages: seen.size, assets: assets.size, missingRoutes: 3, redirects: 3, result: 'pass' }));
