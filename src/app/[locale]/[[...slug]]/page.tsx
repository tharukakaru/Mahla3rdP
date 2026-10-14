import { SignInPage } from '@/components/sign-in';
import { SpacePreview } from '@/components/space-preview';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, localPath, publishedLocales } from '@/lib/i18n';
import { siteUrl } from '@/lib/config';
import { services } from '@/content/services';
import { articles } from '@/content/articles';
import { Home } from '@/components/home';
import { AboutPage, AcademyPage, ArticlePage, BookingPage, ChartPage, ContactPage, JournalPage, LegalPage, MethodPage, PortalPage, ServicePage, WorkPage, marketingPaths } from '@/components/pages';

type Params = { locale: string; slug?: string[] };
export const dynamicParams = false;
export function generateStaticParams() { return [...marketingPaths, ...articles.map(article => `journal/${article.slug}`)].map(path => ({ slug: path ? path.split('/') : [] })); }
function details(locale: string, path: string) {
  const d = getDictionary(locale);
  const entries: Record<string, [string, string]> = {
    '': ['MAHLA — The Third Point', d.hero.body], method: ['The Third Point Method', d.method.intro],
    'work-with-mahla': ['Work with Mahla', d.work.body], about: ['About Mahla', d.about.body],
    contact: ['Contact Mahla', d.contact.body], booking: ['Book a private session', d.booking.body],
    academy: ['The Academy', d.academy.body], 'birth-chart': ['The Natal Map', d.chart.body],
    'sign-in': ['Sign in', d.portal.body], portal: ['Your private space', d.portal.body], journal: ['Notes from the Third Point', d.journal.body],
    privacy: ['Privacy', d.legal.privacy[0].body], terms: ['Terms', d.legal.terms[0].body],
  };
  const service = services.find(item => path === `services/${item.slug}`);
  if (service) return [service.title, service.detail];
  const article = articles.find(item => path === `journal/${item.slug}`);
  if (article) return [article.title, article.excerpt];
  return entries[path];
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = (slug || []).join('/');
  const info = details(locale, path);
  if (!info) return {};
  const canonical = `${siteUrl}${localPath(locale, path ? `/${path}` : '')}`;
  return { title: path ? info[0] : { absolute: info[0] }, description: info[1],
    alternates: { canonical, languages: Object.fromEntries([...publishedLocales.map(item => [item.code, `${siteUrl}${localPath(item.code, path ? `/${path}` : '')}`]), ['x-default', `${siteUrl}/en${path ? `/${path}` : ''}`]]) },
    openGraph: { title: info[0], description: info[1], url: canonical, siteName: 'MAHLA — The Third Point', locale: locale === 'en' ? 'en_US' : locale, type: path.startsWith('journal/') ? 'article' : 'website' },
  };
}
export default async function MarketingPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  const path = (slug || []).join('/');
  const d = getDictionary(locale);
  const props = { locale, d };
  let content: React.ReactNode;
  const service = services.find(item => path === `services/${item.slug}`);
  const article = articles.find(item => path === `journal/${item.slug}`);
  if (service) content = <ServicePage {...props} service={service}/>;
  else if (article) content = <ArticlePage {...props} article={article}/>;
  else switch (path) {
    case '': content = <Home {...props}/>; break;
    case 'method': content = <MethodPage {...props}/>; break;
    case 'work-with-mahla': content = <WorkPage {...props}/>; break;
    case 'about': content = <AboutPage {...props}/>; break;
    case 'contact': content = <ContactPage {...props}/>; break;
    case 'booking': content = <BookingPage {...props}/>; break;
    case 'academy': content = <AcademyPage {...props}/>; break;
    case 'birth-chart': content = <ChartPage {...props}/>; break;
    case 'sign-in': content = <SignInPage locale={locale}/>; break;
    case 'portal': content = <SpacePreview locale={locale}/>; break;
    case 'journal': content = <JournalPage {...props}/>; break;
    case 'privacy': content = <LegalPage {...props} kind="privacy"/>; break;
    case 'terms': content = <LegalPage {...props} kind="terms"/>; break;
    default: notFound();
  }
  const schema = service ? { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.detail, provider: { '@type': 'Person', name: 'Mahla' } }
    : path === 'about' ? { '@context': 'https://schema.org', '@type': 'Person', name: 'Mahla', description: d.about.body, url: `${siteUrl}/en/about` }
    : { '@context': 'https://schema.org', '@type': 'WebPage', name: details(locale, path)?.[0], url: `${siteUrl}${localPath(locale, path ? `/${path}` : '')}` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>{content}</>;
}
