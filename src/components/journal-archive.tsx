'use client';
import Link from 'next/link';
import { useState } from 'react';
import type { Dictionary } from '@/content/en';
import { articles } from '@/content/articles';
import { localPath } from '@/lib/i18n';
export function JournalArchive({ locale, d }: { locale: string; d: Dictionary }) {
  const [category, setCategory] = useState(d.ui.all);
  const filtered = articles.filter(article => category === d.ui.all || article.category === category);
  return <div><div className="journal-filters" role="group" aria-label={d.ui.filter}>{d.journal.categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="journal-archive" aria-live="polite">{filtered.length ? filtered.map(article => <Link className="archive-row" href={localPath(locale, `/journal/${article.slug}`)} key={article.slug}><span className="eyebrow">{article.number}</span><div className="archive-image"><img src={`/media/${article.image}.webp`} alt="" width="800" height="450" loading="lazy"/></div><div><p className="eyebrow">{article.category}</p><h2>{article.title}</h2><p>{article.excerpt}</p><span className="text-link">{d.ui.read} ↗</span></div></Link>) : <p>{d.journal.empty}</p>}</div></div>;
}
