'use client';
import Link from 'next/link';
import { BranchBreeze } from './branch-breeze';
import { useEffect, useRef, useState } from 'react';

export function LivingHero({ locale }: { locale: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(preference.matches);
    sync(); preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    const node = canvas.current;
    const ctx = node?.getContext('2d');
    if (!node || !ctx) return;
    let width = 0, height = 0, frame = 0, last = 0, elapsed = 0, visible = true;
    const leaves = Array.from({ length: 13 }, (_, index) => ({ x: 0, y: 0, vx: 0, vy: 0, angle: index, age: -index * .8, life: 9 + index % 4, size: 0 }));
    function reset(leaf: typeof leaves[number]) {
      leaf.x = width * (.17 + Math.random() * .66);
      leaf.y = height * (.15 + Math.random() * .32);
      leaf.vx = (Math.random() - .5) * 8;
      leaf.vy = 8 + Math.random() * 12;
      leaf.angle = Math.random() * Math.PI * 2;
      leaf.age = 0; leaf.size = Math.max(4, width * (.008 + Math.random() * .004));
    }
    function resize() {
      if (!node || !ctx) return;
      width = node.clientWidth; height = node.clientHeight;
      const ratio = Math.min(devicePixelRatio, 2);
      node.width = width * ratio; node.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      leaves.forEach((leaf, i) => { reset(leaf); leaf.age = -i * .85; });
    }
    function draw(time: number) {
      if (!ctx) return;
      const dt = last ? Math.min((time - last) / 1000, .04) : 0;
      last = time; elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      for (const leaf of leaves) {
        leaf.age += dt;
        if (leaf.age < 0) continue;
        if (leaf.age > leaf.life || leaf.y > height * .95) reset(leaf);
        const wind = Math.sin(elapsed * .65 + leaf.angle) * 9 + 6;
        leaf.vx += (wind - leaf.vx) * dt * .8;
        leaf.vy += (27 - leaf.vy) * dt * .35;
        leaf.x += leaf.vx * dt; leaf.y += leaf.vy * dt;
        leaf.angle += dt * .55;
        ctx.save();
        ctx.globalAlpha = Math.min(1, leaf.age * 2, (leaf.life - leaf.age) * .6) * .85;
        ctx.translate(leaf.x, leaf.y); ctx.rotate(leaf.angle + Math.sin(leaf.age * 1.6) * .5);
        ctx.scale(.4 + Math.abs(Math.cos(leaf.age * 1.9)) * .6, 1);
        const fill = ctx.createLinearGradient(-leaf.size, 0, leaf.size, 0);
        fill.addColorStop(0, '#626e4b'); fill.addColorStop(.5, '#c6ba7d'); fill.addColorStop(1, '#e2d6a3');
        ctx.fillStyle = fill;
        ctx.beginPath(); ctx.moveTo(-leaf.size, 0);
        ctx.quadraticCurveTo(0, -leaf.size * .65, leaf.size, 0);
        ctx.quadraticCurveTo(0, leaf.size * .65, -leaf.size, 0); ctx.fill();
        ctx.strokeStyle = '#867746'; ctx.lineWidth = .6;
        ctx.beginPath(); ctx.moveTo(-leaf.size, 0); ctx.lineTo(leaf.size, 0); ctx.stroke(); ctx.restore();
      }
      frame = requestAnimationFrame(draw);
    }
    function sync() {
      cancelAnimationFrame(frame); last = 0;
      if (!reduced && !document.hidden && visible) frame = requestAnimationFrame(draw);
      else ctx?.clearRect(0, 0, width, height);
    }
    const observer = new ResizeObserver(resize); observer.observe(node); resize();
    const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }); intersection.observe(node);
    document.addEventListener('visibilitychange', sync); sync();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, [reduced]);
  return <section className="living-hero" id="home">
    <img className="sky-scene" src="/art/cloud-sanctuary.png" alt="" fetchPriority="high" width="1536" height="1024"/>
    <div className="tree-stage"><img className="olive-tree" src="/art/olive-tree.png" width="1240" height="1254" alt="A golden olive tree rooted above a sea of clouds" fetchPriority="high"/><BranchBreeze/><canvas ref={canvas} className="falling-leaves" aria-hidden="true"/></div>
    <div className="hero-mist" aria-hidden="true"/>
    <div className="living-copy"><p className="eyebrow">Astrology · Self-knowledge · Sovereignty</p><h1>Rooted in yourself.<br/><em>Open to possibility.</em></h1><p className="living-description">A living space for astrology, reflection and the Sovereignty Path.<br className="desktop-break"/> Find the patterns. Choose your direction.</p><div className="hero-actions"><Link className="pill primary" href={`/${locale}/method`}>Explore the Sovereignty Path <span>↗</span></Link><Link className="pill glass" href={`/${locale}/booking`}>Book a consultation <span>↗</span></Link></div></div>
  </section>;
}
