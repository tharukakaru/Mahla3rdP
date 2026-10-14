'use client';
import { useEffect, useRef, useState } from 'react';

export function ResponsiveFilm({ name, label, pauseLabel, playLabel, priority = false }: { name: 'threshold' | 'material'; label: string; pauseLabel: string; playLabel: string; priority?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);
  const visible = useRef(false);
  useEffect(() => {
    const video = ref.current;
    const element = root.current;
    if (!video || !element) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = matchMedia('(max-width: 640px)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    function sync() {
      if (!video) return;
      if (visible.current && !document.hidden && !reduce.matches && !connection?.saveData && !userPaused.current) {
        const source = `/media/${name}-${mobile.matches ? 'mobile' : 'desktop'}.mp4`;
        if (video.getAttribute('src') !== source) video.src = source;
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    }
    const observer = new IntersectionObserver(entries => { visible.current = entries[0].isIntersecting; sync(); }, { threshold: 0.12 });
    observer.observe(element);
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync); mobile.addEventListener('change', sync);
    return () => { observer.disconnect(); video.pause(); document.removeEventListener('visibilitychange', sync); reduce.removeEventListener('change', sync); mobile.removeEventListener('change', sync); };
  }, [name]);
  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (!video.paused) { userPaused.current = true; video.pause(); }
    else { userPaused.current = false; if (!video.getAttribute('src')) video.src = `/media/${name}-${matchMedia('(max-width: 640px)').matches ? 'mobile' : 'desktop'}.mp4`; if (video.error) video.load(); void video.play().catch(() => setPlaying(false)); }
  }
  return <div className={`responsive-film film-${name}`} ref={root}>
    <picture><source media="(max-width: 640px)" srcSet={`/media/${name}-mobile.webp`} /><img src={`/media/${name}-desktop.webp`} alt="" width="1600" height="900" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} /></picture>
    <video ref={ref} muted playsInline loop preload="none" aria-hidden="true" style={{ visibility: failed ? 'hidden' : 'visible' }} onLoadedData={() => setFailed(false)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setFailed(true); }} />
    <button className="film-control" onClick={toggle} aria-label={`${playing ? pauseLabel : playLabel}: ${label}`}><span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span><span>{playing ? pauseLabel : playLabel}</span></button>
  </div>;
}

export function PerspectiveMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (!element) return;
    let frame = 0;
    let active = false;
    const update = () => { frame = 0; if (!active || reduce.matches) return; const box = element.getBoundingClientRect(); const progress = Math.max(0, Math.min(1, 1 - box.top / innerHeight)); element.style.setProperty('--perspective-progress', progress.toFixed(3)); };
    const schedule = () => { if (!frame && active && !document.hidden) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(entries => { active = entries[0].isIntersecting; schedule(); });
    observer.observe(element); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  return <div className="perspective-mark" ref={ref} aria-hidden="true"><i/><i/><i/></div>;
}
