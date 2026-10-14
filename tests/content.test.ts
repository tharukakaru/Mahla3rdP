import assert from 'node:assert/strict';
import test from 'node:test';
import { getDictionary, getLocale, publishedLocales, switchLocalePath } from '../src/lib/i18n.ts';
import { services } from '../src/content/services.ts';
import { articles } from '../src/content/articles.ts';

test('locale switching preserves the equivalent page and query', () => {
  assert.equal(switchLocalePath('/fa/services/matrix-audit?ref=journal', 'en'), '/en/services/matrix-audit?ref=journal');
  assert.equal(switchLocalePath('/en/contact', 'en'), '/en/contact');
});
test('unreviewed languages never become published or redirect destinations', () => {
  assert.deepEqual(publishedLocales.map(locale => locale.code), ['en']);
  assert.equal(getLocale('fa'), undefined);
  assert.equal(switchLocalePath('/en/contact', 'fa'), '/en/contact');
  assert.equal(getDictionary('missing').hero.lines[0], 'NOT THIS.');
});
test('all pathway and article slugs are unique and prices are not fabricated', () => {
  assert.equal(new Set(services.map(service => service.slug)).size, services.length);
  assert.equal(new Set(articles.map(article => article.slug)).size, articles.length);
  assert.ok(services.every(service => service.price === null));
  assert.ok(articles.every(article => new URL(article.source).pathname.startsWith('/articles/')));
});
