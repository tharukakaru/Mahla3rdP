'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/en';
import { locales, localPath, switchLocalePath } from '@/lib/i18n';
import { business } from '@/lib/config';
import { BrandLogo } from './brand-logo';

export function Navigation({ locale, d }: { locale: string; d: Dictionary }) {
  const path = usePathname();
  const [open, setOpen] = useState<'menu' | 'language' | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const node = dialog.current;
    const previous = document.body.style.overflow;
    node?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { node?.close(); document.body.style.overflow = previous; trigger.current?.focus(); };
  }, [open]);
  function show(kind: 'menu' | 'language', button: HTMLButtonElement) { trigger.current = button; setOpen(kind); }
  return <>
    <a className="skip-link" href="#main">{d.ui.skip}</a>
    <header className={`site-header ${path.replace(/\/$/, '') === `/${locale}` ? "on-home" : ""}`}>
      <Link href={localPath(locale)} className="brand" aria-label={`${d.brand.name} — ${d.brand.line}`}><BrandLogo/></Link>
      <nav className="desktop-nav" aria-label={d.ui.menu}>{[{label:'The Path',hash:'method'},{label:'Services',hash:'services'},{label:'About',hash:'about'},{label:'Journal',hash:'journal'}].map(item=><Link key={item.hash} href={`${localPath(locale)}#${item.hash}`}>{item.label}</Link>)}<Link href={localPath(locale,'/contact')}>{d.ui.contact}</Link></nav>
      <div className="header-controls"><Link href={localPath(locale, '/sign-in')} className="portal-link">Sign in</Link><button className="language-button" onClick={event => show('language', event.currentTarget)} aria-label={d.ui.language} aria-haspopup="dialog">{locale.toUpperCase()}<span aria-hidden="true">⌄</span></button><button className="menu-button" onClick={event => show('menu', event.currentTarget)} aria-label={d.ui.openMenu} aria-haspopup="dialog"><span>{d.ui.menu}</span><span className="menu-lines" aria-hidden="true"><i/><i/></span></button></div>
    </header>
    <noscript><nav className="no-script-nav" aria-label={d.ui.menu}>{d.nav.map(item => <Link key={item.path} href={localPath(locale, item.path)}>{item.label}</Link>)}<Link href={localPath(locale, '/contact')}>{d.ui.contact}</Link><Link href={localPath(locale, '/booking')}>{d.ui.book}</Link></nav></noscript>
    <dialog ref={dialog} className={`nav-dialog ${open === 'language' ? 'language-dialog' : ''}`} aria-labelledby="dialog-title" onCancel={() => setOpen(null)} onClick={event => { if (event.target === event.currentTarget) setOpen(null); }}>
      <div className="dialog-top"><span className="brand"><BrandLogo/></span><button autoFocus className="close-button" onClick={() => setOpen(null)}>{d.ui.close}<span aria-hidden="true">×</span></button></div>
      {open === 'menu' ? <><h2 id="dialog-title" className="sr-only">{d.ui.menu}</h2><nav className="full-nav" aria-label={d.ui.menu}>{[...d.nav, { label: 'Sign in', path: '/sign-in' }, { label: d.ui.contact, path: '/contact' }].map((item, i) => <Link href={localPath(locale, item.path)} key={item.path} onClick={() => setOpen(null)}><small>{String(i + 1).padStart(2, '0')}</small><span>{item.label}</span><span className="nav-arrow" aria-hidden="true">↗</span></Link>)}</nav><div className="dialog-bottom"><button onClick={() => setOpen('language')}>{d.ui.language} / {locale.toUpperCase()}</button><a href={business.instagram}>Instagram ↗</a><a href={business.telegram}>Telegram ↗</a></div></> : <div className="language-content"><h2 id="dialog-title">{d.ui.languageTitle}</h2><p>{d.ui.languageNote}</p><ul>{locales.map(item => <li key={item.code}>{item.status === 'published' ? <Link href={switchLocalePath(path, item.code)} lang={item.code} aria-current={item.code === locale ? 'true' : undefined} onClick={() => { try { localStorage.setItem('mahla-locale', item.code); } catch {} setOpen(null); }}>{item.name}<span aria-hidden="true">{item.code === locale ? '●' : '↗'}</span></Link> : <span lang={item.code}>{item.name}<small>{d.ui.soon}</small></span>}</li>)}</ul></div>}
    </dialog>
  </>;
}
