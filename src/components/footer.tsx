import { MotionControl } from './motion-clip';
import Link from 'next/link';
import type { Dictionary } from '@/content/en';
import { localPath } from '@/lib/i18n';
import { business } from '@/lib/config';
import { BrandLogo } from './brand-logo';
export function Footer({ locale, d }: { locale: string; d: Dictionary }) {
  return <footer className="site-footer"><div className="footer-top"><div className="footer-statement"><BrandLogo emblem/><p>{d.footer.statement}</p><small>{d.brand.disciplines}</small></div><div><p className="eyebrow">{d.footer.explore}</p>{d.nav.map(item => <Link key={item.path} href={localPath(locale, item.path)}>{item.label}</Link>)}</div><div><p className="eyebrow">{d.footer.connect}</p><Link href={localPath(locale, '/contact')}>{d.ui.contact}</Link><a href={business.instagram}>Instagram ↗</a><a href={business.telegram}>Telegram ↗</a><Link href={localPath(locale, '/portal')}>{d.ui.portal}</Link></div></div><div className="footer-logo-wrap"><BrandLogo/></div><div className="footer-bottom"><small>© {new Date().getFullYear()} {d.footer.copyright}</small><div><Link href={localPath(locale, '/privacy')}>{d.ui.privacy}</Link><Link href={localPath(locale, '/terms')}>{d.ui.terms}</Link><span lang="en">English</span></div></div><MotionControl/><p className="footer-note">{d.footer.note}</p></footer>;
}
