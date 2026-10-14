 'use client';
import { useRef, type ReactNode } from 'react';
export function CloudIntro({children}:{children:ReactNode}) {
 const ref=useRef<HTMLElement>(null);
 function move(x:number,y:number){const el=ref.current;if(!el || matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--cloud-x',`${((x-r.left)/r.width-.5)*22}px`);el.style.setProperty('--cloud-y',`${((y-r.top)/r.height-.5)*12}px`);}
 return <section ref={ref} className="quiet-intro section-pad" onPointerMove={e=>{if(e.pointerType==='mouse')move(e.clientX,e.clientY)}} onPointerLeave={()=>{ref.current?.style.setProperty('--cloud-x','0px');ref.current?.style.setProperty('--cloud-y','0px')}}>{children}</section>;
}