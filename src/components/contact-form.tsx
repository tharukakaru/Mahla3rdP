'use client';
import { useState, type FormEvent } from 'react';
import type { Dictionary } from '@/content/en';
import { business } from '@/lib/config';
import { PointMark } from './primitives';
export function ContactForm({ d }: { d: Dictionary }) {
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [draft, setDraft] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = String(data.get('subject') || '');
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || !data.get('consent')) { setState('error'); return; }
    setState('loading');
    const body = `${message}\n\n${name}\n${email}`;
    setDraft(body);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState('ready');
  }
  async function copy() { try { await navigator.clipboard.writeText(draft); setCopyStatus(d.contact.copied); } catch { setCopyStatus(d.contact.copyError); } }
  return <form className="contact-form" method="post" action={`mailto:${business.email}`} encType="text/plain" onSubmit={submit} aria-label={d.contact.formTitle}>
    <h2>{d.contact.formTitle}</h2><p className="form-note">{d.contact.required}</p>
    <div className="form-pair"><label>{d.contact.name}<input name="name" autoComplete="name" required maxLength={100}/></label><label>{d.contact.email}<input name="email" type="email" autoComplete="email" required maxLength={200}/></label></div>
    <label>{d.contact.subject}<select name="subject" required>{d.contact.subjects.map(subject => <option key={subject}>{subject}</option>)}</select></label>
    <label>{d.contact.message}<textarea name="message" rows={5} minLength={10} maxLength={1800} required/></label>
    <label className="checkbox-label"><input type="checkbox" name="consent" required/><span>{d.contact.consent}</span></label>
    <p className="form-note">{d.contact.note}</p>
    {state === 'error' && <p role="alert" className="form-error">{d.contact.invalid}</p>}
    <button type="submit" className="action" disabled={state === 'loading'}><span>{state === 'loading' ? d.contact.busy : d.contact.submit}</span><PointMark/></button>
    {state === 'ready' && <div className="form-result" role="status"><p>{d.contact.success}</p><p>{d.contact.fallback}</p><a href={`mailto:${business.email}`}>{business.email}</a><pre>{draft}</pre><button type="button" className="text-button" onClick={copy}>{d.contact.copy}</button><p>{copyStatus}</p></div>}
  </form>;
}
