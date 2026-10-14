import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, getLocale, publishedLocales } from '@/lib/i18n';
import { indexable, siteUrl } from '@/lib/config';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import '../globals.css';
import '../aura.css';
import '../review-polish.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'MAHLA — The Third Point', template: '%s | MAHLA' },
  description: 'Astrology, strategic reflection and sovereign coaching. See the pattern. Change your position. Design your direction.',
  icons: { icon: '/favicon.svg' },
  robots: { index: indexable, follow: indexable },
};
export const dynamicParams = false;
export function generateStaticParams() { return publishedLocales.map(locale => ({ locale: locale.code })); }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const config = getLocale(locale);
  if (!config) notFound();
  const d = getDictionary(locale);
  return <html data-scroll-behavior="smooth" lang={locale} dir={config.direction} data-script={config.script}><body><Navigation locale={locale} d={d}/><main id="main" tabIndex={-1}>{children}</main><Footer locale={locale} d={d}/></body></html>;
}
