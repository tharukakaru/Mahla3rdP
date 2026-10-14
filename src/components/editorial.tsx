import { MotionClip } from './motion-clip';
import { TransparentMotion } from './transparent-motion';
import Link from 'next/link';
import type { Dictionary } from '@/content/en';
import { services } from '@/content/services';
import { articles } from '@/content/articles';
import { localPath } from '@/lib/i18n';
import { Action, Display, Eyebrow, ThreePoints } from './primitives';

export function MethodSteps({ d, expanded = false }: { d: Dictionary; expanded?: boolean }) {
  return <div className={`method-steps ${expanded ? 'expanded-steps' : ''}`}>{d.method.steps.map((step, i) => <div className="method-step" key={step.title}><MotionClip src={`/media/review/method-${i}.mp4`} poster={`/media/review/method-${i}.png`} label={`${step.title} — abstract visual`}/><div className="step-heading"><span className="eyebrow">0{i + 1}</span><h3>{step.title}</h3></div><p>{step.body}</p>{expanded && <p>{step.detail}</p>}<span className="eyebrow step-word">{step.word}</span></div>)}</div>;
}
export function ServiceIndex({ locale, d, all = true }: { locale: string; d: Dictionary; all?: boolean }) {
  return <div className="service-index">{services.slice(0, all ? 5 : 3).map(service => <Link className="service-row" key={service.slug} href={localPath(locale, `/services/${service.slug}`)}><span className="eyebrow service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><span className="eyebrow service-duration">{service.duration}</span><span className="service-arrow" aria-hidden="true">↗</span><span className="sr-only">{d.work.cta}</span></Link>)}</div>;
}
export function AboutPreview({ locale, d }: { locale: string; d: Dictionary }) {
  return <section className="about-section section-pad" id="about"><div className="portrait-frame"><img src="/art/mahla-portrait.png" alt={d.ui.imageAlt} width="1024" height="1536" loading="lazy"/><div className="portrait-caption"><span>{d.about.name}</span><small>{d.about.caption}</small></div></div><div className="about-copy"><Eyebrow>{d.about.label}</Eyebrow><Display>{d.about.title}</Display><p className="body-large">{d.about.body}</p><p className="about-note">{d.about.note}</p><Action href={localPath(locale, '/about')}>{d.about.cta}</Action></div></section>;
}
export function JournalPreview({ locale, d }: { locale: string; d: Dictionary }) {
  return <section className="journal-section section-pad" id="journal"><div className="section-heading"><div><Eyebrow>{d.journal.label}</Eyebrow><Display>{d.journal.title}</Display></div><Action href={localPath(locale, '/journal')}>{d.ui.journal}</Action></div><div className="journal-preview">{articles.slice(0, 2).map(article => <Link className="article-preview" key={article.slug} href={localPath(locale, `/journal/${article.slug}`)}><div className="article-image"><img src={`/media/${article.image}.webp`} alt="" width="1200" height="675" loading="lazy"/><span className="article-open" aria-hidden="true">↗</span></div><div className="article-meta eyebrow"><span>{article.category}</span><span>0{article.number.replace(/^0/, '')}</span></div><h3>{article.title}</h3></Link>)}</div></section>;
}
export function FinalThreshold({ locale, d }: { locale: string; d: Dictionary }) {
  return <section className="final-threshold section-pad"><Eyebrow>{d.threshold.label}</Eyebrow><Display>{d.threshold.title}</Display><Action href={localPath(locale, '/booking')}>{d.threshold.cta}</Action><div className="threshold-gif threshold-film" aria-hidden="true"><TransparentMotion/></div></section>;
}
