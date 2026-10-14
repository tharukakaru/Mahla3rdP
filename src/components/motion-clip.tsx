 'use client';
import { useEffect, useRef, useState } from 'react';
export function MotionClip({src,poster,label,controls=false}:{src:string;poster:string;label:string;controls?:boolean}) {
 const ref=useRef<HTMLVideoElement>(null);const [failed,setFailed]=useState(false);
 useEffect(()=>{const v=ref.current;if(!v)return;let visible=false;const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const sync=()=>{if(visible&&!document.hidden&&!reduce.matches&&document.documentElement.dataset.motionPaused!=='true')void v.play().catch(()=>{});else v.pause()};
 const observer=new IntersectionObserver(e=>{visible=e[0].isIntersecting;sync()},{threshold:.2});observer.observe(v);reduce.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);window.addEventListener('mahla-motion',sync);
 return()=>{observer.disconnect();v.pause();reduce.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);window.removeEventListener('mahla-motion',sync)};
 },[]);
 return <div className="motion-clip">{failed?<img src={poster} alt={label}/>:<video ref={ref} src={src} poster={poster} muted playsInline loop preload="none" controls={controls} aria-label={label} onError={()=>setFailed(true)}/>}</div>;
}
export function MotionControl(){const [paused,setPaused]=useState(false);return <button className="motion-control" aria-pressed={paused} onClick={()=>{const next=!paused;setPaused(next);document.documentElement.dataset.motionPaused=String(next);window.dispatchEvent(new Event('mahla-motion'))}}>{paused?'Play card videos':'Pause card videos'}</button>}
