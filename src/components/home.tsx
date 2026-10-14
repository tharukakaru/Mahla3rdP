import { MotionClip } from './motion-clip';
import { Crown } from './crown';
import { CloudIntro } from './cloud-intro';
import { JourneyStats } from './journey-stats';
import { VideoLibrary } from './video-library';
import Link from 'next/link';
import type { Dictionary } from '@/content/en';
import { services } from '@/content/services';
import { Action, Display, Eyebrow } from './primitives';
import { AboutPreview, FinalThreshold, JournalPreview, MethodSteps } from './editorial';
import { LivingHero } from './living-hero';

export function Home({ locale, d }: { locale: string; d: Dictionary }) {
  return <div className="aura-home">
    <LivingHero locale={locale}/><JourneyStats/>
    <CloudIntro><div className="intro-cloud intro-cloud-left" aria-hidden="true"/><div className="intro-cloud intro-cloud-right" aria-hidden="true"/><Eyebrow>A different way of seeing</Eyebrow><h2>Your map is not your fate.<br/><em>It is a language of possibility.</em></h2><p>{d.manifesto.body}</p><Crown className="tiny-star"/></CloudIntro>
    <section className="pathways section-pad" id="method"><div className="section-heading"><div><Eyebrow>The Third Point method</Eyebrow><Display>Come back to<br/><em>your own centre.</em></Display></div><p>{d.method.intro}</p></div><MethodSteps d={d}/><Action href={`/${locale}/method`}>Discover the Sovereignty Path</Action></section>
    <section className="aura-spread"><div className="aura-poster"><span className="eyebrow">The art of becoming</span><div className="aura-halo" aria-hidden="true"><i/><i/><i/><span>☉</span></div><p>INNER<br/><em>ORBIT</em></p><small>SELF-KNOWLEDGE / CONSCIOUS CHOICE</small></div><div className="aura-spread-copy"><Eyebrow>The Sovereignty Path</Eyebrow><h2>A quieter mind.<br/>A clearer <em>direction.</em></h2><p>{d.sovereignty.body}</p><div className="architecture-index">{d.sovereignty.fields.map((field, i) => <details key={field.title}><summary><span className="eyebrow">0{i + 1}</span><span>{field.title}</span><span className="plus" aria-hidden="true">+</span></summary><p>{field.body}</p></details>)}</div></div></section>
    <section className="offer-section section-pad" id="services"><div className="section-heading"><div><Eyebrow>Private work with Mahla</Eyebrow><Display>Meet yourself<br/><em>where you are.</em></Display></div><p>{d.work.body}</p></div><div className="offer-grid">{services.slice(0,3).map((service,i) => <Link key={service.slug} className={`offer-card offer-${i}`} href={`/${locale}/services/${service.slug}`}><div className="offer-top"><span className="eyebrow">0{i+1} / {service.duration}</span><span className="round-arrow">↗</span></div><div className="service-image"><MotionClip src={`/media/review/service-pin-${i}.mp4`} poster={`/media/review/service-luxury-${i}.png`} label={`${service.title} animated artwork`}/></div><h3>{service.title}</h3><p>{service.description}</p><span className="offer-bottom">Explore your pathway <span>↗</span></span></Link>)}</div><div className="section-tail"><p>{d.work.priceNote}</p><Link href={`/${locale}/work-with-mahla`}>All consultations & classes ↗</Link></div></section>
    <AboutPreview locale={locale} d={d}/>
    <section className="video-chapter section-pad"><div className="section-heading"><div><Eyebrow>The voice of the Third Point</Eyebrow><Display>A little perspective.<br/><em>Whenever you need it.</em></Display></div><a className="text-link" href="https://www.youtube.com/@the3rdpoint" target="_blank" rel="noreferrer">Visit Mahla on YouTube ↗</a></div><VideoLibrary/></section>
    <JournalPreview locale={locale} d={d}/>
    <section className="space-teaser section-pad"><div><Eyebrow>Your space</Eyebrow><Display>Your practice.<br/><em>One quiet place.</em></Display><p>Return to your saved birth charts, consultations and classes. A space to gather what matters and continue your journey.</p><Action href={`/${locale}/sign-in`}>Sign in to continue</Action><Link className="text-link preview-link" href={`/${locale}/portal`}>Preview your space ↗</Link></div><div className="space-mini" aria-hidden="true"><span className="eyebrow">MAHLA / YOUR SPACE</span><p>Make room for<br/><em>your next chapter.</em></p><div className="mini-grid"><span>☉<small>Your natal map</small></span><span>☽<small>Your sessions</small></span><span>✧<small>Your learning</small></span></div></div></section>
    <FinalThreshold locale={locale} d={d}/>
  </div>;
}
