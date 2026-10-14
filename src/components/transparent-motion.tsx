'use client';
import { useEffect, useRef } from 'react';

// The original MP4 stays untouched. Remove its dark backdrop into canvas alpha.
export function TransparentMotion() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const node = canvas.current;
    if (!node) return;
    const ctx = node.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const video = document.createElement('video');
    video.muted = true; video.loop = true; video.playsInline = true;
    video.preload = 'none'; video.src = '/media/review/closing-pin.mp4';
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false, frame = 0, last = 0, disposed = false;
    function paint(now: number) {
      if (disposed) return;
      if (video.readyState >= 2 && now - last >= 42) {
        last = now;
        const w = node!.width, h = node!.height;
        const scale = Math.max(w / video.videoWidth, h / video.videoHeight);
        ctx!.clearRect(0, 0, w, h);
        ctx!.drawImage(video, (w - video.videoWidth * scale) / 2,
          (h - video.videoHeight * scale) / 2, video.videoWidth * scale, video.videoHeight * scale);
        const pixels = ctx!.getImageData(0, 0, w, h);
        for (let i = 0; i < pixels.data.length; i += 4) {
          const light = .2126 * pixels.data[i] + .7152 * pixels.data[i + 1] + .0722 * pixels.data[i + 2];
          const t = Math.max(0, Math.min(1, (light - 38) / 105));
          pixels.data[i + 3] = Math.round(255 * t * t * (3 - 2 * t));
        }
        ctx!.putImageData(pixels, 0, 0);
      }
      frame = requestAnimationFrame(paint);
    }
    function sync() {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden && !reduce.matches && document.documentElement.dataset.motionPaused !== 'true') {
        void video.play().catch(() => {});
        frame = requestAnimationFrame(paint);
      } else {
        video.pause();
        if (reduce.matches) ctx!.clearRect(0, 0, node!.width, node!.height);
      }
    }
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
    observer.observe(node);
    reduce.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('mahla-motion', sync);
    return () => {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect();
      reduce.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('mahla-motion', sync); video.pause(); video.removeAttribute('src'); video.load();
    };
  }, []);
  return <canvas ref={canvas} width="384" height="420" className="transparent-motion" aria-hidden="true"/>;
}
