'use client';
import { useEffect, useState } from 'react';
import type { Dictionary } from '@/content/en';
import { services } from '@/content/services';
import { business } from '@/lib/config';
import { Action, Eyebrow, PointMark } from './primitives';
export function BookingFlow({ d }: { d: Dictionary }) {
  const options = services.filter(item => item.destination === 'booking');
  const [selected, setSelected] = useState(options[0].slug);
  const [timezone, setTimezone] = useState('');
  useEffect(() => { const requested = new URLSearchParams(window.location.search).get('service'); if (requested && options.some(item => item.slug === requested)) setSelected(requested); setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const service = options.find(item => item.slug === selected) || options[0];
  return <div className="booking-flow"><fieldset><legend className="eyebrow">{d.booking.choose}</legend>{options.map(item => <label className={`booking-option ${item.slug === selected ? 'selected' : ''}`} key={item.slug}><input type="radio" name="pathway" value={item.slug} checked={item.slug === selected} onChange={() => setSelected(item.slug)}/><span><small>{item.duration}</small><strong>{item.title}</strong><span>{item.description}</span></span><PointMark/></label>)}</fieldset><div className="booking-summary"><Eyebrow>{d.booking.next}</Eyebrow><h2>{service.title}</h2><p>{service.detail}</p><p className="eyebrow">{service.duration}</p><div className="booking-timezone"><small>{d.booking.timezone}</small><p>{timezone || '—'}</p><small>{d.booking.timezoneNote}</small></div><Action href={business.booking}>{d.booking.continue}</Action><p className="form-note">{d.booking.note}</p><p className="form-note">{d.booking.handoff}</p></div></div>;
}
