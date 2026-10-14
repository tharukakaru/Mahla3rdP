 'use client';
import {useEffect,useRef,useState} from 'react';
import {Crown} from './crown';
export function JourneyStats(){const ref=useRef<HTMLElement>(null);const [progress,setProgress]=useState(1);
 useEffect(()=>{const el=ref.current;if(!el)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,inView=false;
 const finish=()=>{cancelAnimationFrame(frame);setProgress(1)};
 const start=()=>{cancelAnimationFrame(frame);if(reduce.matches){finish();return}setProgress(0);const started=performance.now();const tick=(now:number)=>{const t=Math.min(1,(now-started)/2600);setProgress(1-Math.pow(1-t,2));if(t<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick)};
 // Replay when the visitor genuinely scrolls away and returns, not just once at hydration.
 const ob=new IntersectionObserver(entries=>{const visible=entries[0].intersectionRatio>=.5;if(visible&&!inView)start();if(!entries[0].isIntersecting){cancelAnimationFrame(frame);setProgress(reduce.matches?1:0)}inView=visible},{threshold:[0,.5]});ob.observe(el);const sync=()=>{if(reduce.matches)finish()};reduce.addEventListener('change',sync);return()=>{ob.disconnect();cancelAnimationFrame(frame);reduce.removeEventListener('change',sync)};
 },[]);
 return <section ref={ref} className="journey-stats is-revealed" aria-label="Mahla’s experience and community"><div className="stat-pair">{[{value:10,label:'Years of practice'},{value:2000,label:'Clients'}].map(stat=><div className="journey-stat" key={stat.label}><span className="sr-only">{stat.value.toLocaleString('en-US')}+ {stat.label}</span><div className="stat-number" aria-hidden="true">{Math.floor(stat.value*progress).toLocaleString('en-US')}+</div><span className="stat-label" aria-hidden="true">{stat.label}</span></div>)}</div><p className="stats-worldwide"><Crown/> A personal connection. Wherever you are.<span>Online worldwide</span></p></section>;
}