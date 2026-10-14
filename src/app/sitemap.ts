export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { publishedLocales } from '@/lib/i18n';
import { siteUrl, indexable } from '@/lib/config';
import { services } from '@/content/services';
import { articles } from '@/content/articles';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  const paths = ['', '/method', '/work-with-mahla', '/about', '/contact', '/academy', '/birth-chart', '/journal', ...services.map(item => `/services/${item.slug}`), ...articles.map(item => `/journal/${item.slug}`)];
  return publishedLocales.flatMap(locale => paths.map(path => ({ url: `${siteUrl}/${locale.code}${path}`, alternates: { languages: Object.fromEntries(publishedLocales.map(item => [item.code, `${siteUrl}/${item.code}${path}`])) } })));
}
