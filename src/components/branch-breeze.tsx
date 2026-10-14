'use client';
import { useEffect, useRef } from 'react';

// Only three perimeter branch/twig groups move. Every layer is rigid: no mesh,
// skew or time-varying scale. The original image remains the loading fallback.
const groups = [
  { points: [[10,655],[160,619],[270,663],[355,722],[395,780],[350,921],[30,965]], pivot:[354,743], period:4.8, phase:0.3, angle:0.060 },
  { points: [[935,410],[1015,301],[1104,262],[1235,303],[1240,524],[1132,580],[1023,528]], pivot:[965,476], period:6.0, phase:2.8, angle:0.055 },
  { points: [[406,0],[637,0],[640,118],[606,184],[552,265],[508,223],[460,158]], pivot:[555,244], period:5.3, phase:4.7, angle:0.053 },
];
// Small foliage clusters inherit their branch motion, with a lighter flutter
// around their own stem. Rigid rotations preserve the leaf shapes.
const foliage = [
  [{x:100,y:740,r:44},{x:105,y:870,r:46}],
  [{x:1150,y:360,r:40},{x:1170,y:480,r:42}],
  [{x:520,y:90,r:44},{x:578,y:145,r:30}],
];

export function BranchBreeze() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const target=canvas.current;
    if(!target) return;
    const node=target;
    const ctx=node.getContext('2d');
    const original=node.parentElement?.querySelector<HTMLImageElement>('.olive-tree');
    if(!ctx || !original) return;
    const image=original;
    const preference=matchMedia('(prefers-reduced-motion: reduce)');
    let disposed=false, frame=0, visible=false, elapsed=0, last=0;
    const make=()=>{const c=document.createElement('canvas');c.width=1240;c.height=1254;return c;};
    const base=make(); const baseCtx=base.getContext('2d')!;
    const layers:HTMLCanvasElement[]=[];
    const leaves:HTMLCanvasElement[][]=[];
    function path(c:CanvasRenderingContext2D,points:number[][]){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();}
    function prepare(){
      baseCtx.drawImage(image,0,0,1240,1254);
      groups.forEach((group,index)=>{
        const layer=make(), lc=layer.getContext('2d')!, mask=make(), mc=mask.getContext('2d')!;
        path(mc,group.points);mc.fill();
        lc.drawImage(image,0,0,1240,1254);lc.globalCompositeOperation='destination-in';lc.drawImage(mask,0,0);
        // Keep a narrow stationary overlap at the cut boundary so small rotations
        // don't expose a gap. Unlike a whole-canopy warp, bark proportions stay fixed.
        mc.globalCompositeOperation='destination-out';mc.lineWidth=18;path(mc,group.points);mc.stroke();
        baseCtx.globalCompositeOperation='destination-out';baseCtx.drawImage(mask,0,0);
        lc.globalCompositeOperation='source-over';
        leaves.push(foliage[index].map(({x,y,r})=>{
          const leaf=document.createElement('canvas');leaf.width=leaf.height=r*2;
          const leafCtx=leaf.getContext('2d')!;
          leafCtx.beginPath();leafCtx.arc(r,r,r,0,Math.PI*2);leafCtx.clip();
          leafCtx.drawImage(layer,x-r,y-r,r*2,r*2,0,0,r*2,r*2);
          // Retain a small overlap at the joint, avoiding a moving cut-out gap.
          lc.globalCompositeOperation='destination-out';lc.beginPath();
          lc.arc(x,y,r-7,0,Math.PI*2);lc.fill();
          return leaf;
        }));
        layers.push(layer);
      });
      baseCtx.globalCompositeOperation='source-over';
    }
    function still(){image.style.visibility='';node.hidden=true;}
    function draw(now:number){
      const dt=last?Math.min((now-last)/1000,.05):0;last=now;elapsed+=dt;
      const width=image.clientWidth,height=image.clientHeight,ratio=Math.min(devicePixelRatio,2);
      if(node.width!==Math.round(width*ratio)||node.height!==Math.round(height*ratio)){
        node.width=Math.round(width*ratio);node.height=Math.round(height*ratio);
        node.style.width=width+'px';node.style.height=height+'px';
      }
      ctx!.setTransform(1,0,0,1,0,0);ctx!.clearRect(0,0,node.width,node.height);
      ctx!.setTransform(node.width/1240,0,0,node.height/1254,0,0);
      ctx!.drawImage(base,0,0);
      groups.forEach((g,i)=>{
        // Maintain visible motion even between gusts; each rigid branch has its
        // own phase and period instead of stretching the canopy in unison.
        const gust=.82+.18*Math.pow(.5+.5*Math.sin(elapsed*.14+g.phase),2);
        const angle=g.angle*gust*Math.sin(elapsed*Math.PI*2/g.period+g.phase);
        ctx!.save();ctx!.translate(g.pivot[0],g.pivot[1]);ctx!.rotate(angle);ctx!.translate(-g.pivot[0],-g.pivot[1]);ctx!.drawImage(layers[i],0,0);
        foliage[i].forEach(({x,y,r},j)=>{
          const phase=g.phase+j*2.1;
          const flutter=.080*Math.sin(elapsed*Math.PI*2/(2.2+i*.4+j*.3)+phase)
            +.015*Math.sin(elapsed*2.2+phase);
          ctx!.save();ctx!.translate(x,y+r*.65);ctx!.rotate(flutter);
          ctx!.drawImage(leaves[i][j],-r,-r*1.65);ctx!.restore();
        });
        ctx!.restore();
      });
      image.style.visibility='hidden';node.hidden=false;frame=requestAnimationFrame(draw);
    }
    function sync(){cancelAnimationFrame(frame);last=0;if(layers.length===3&&!preference.matches&&visible&&!document.hidden)frame=requestAnimationFrame(draw);else still();}
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});observer.observe(node.parentElement!);
    preference.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
    void image.decode().then(()=>{if(!disposed){prepare();sync();}}).catch(still);
    return()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();preference.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);still();};
  },[]);
  return <canvas ref={canvas} className="branch-breeze" aria-hidden="true"/>;
}
