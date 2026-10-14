'use client';
import { useEffect, useRef, useState } from 'react';
import { channelUrl, videos } from '@/content/videos';

export function VideoLibrary() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const modal = dialog.current;
    const previous = document.body.style.overflow;
    modal?.showModal(); document.body.style.overflow = 'hidden';
    return () => { modal?.close(); document.body.style.overflow = previous; opener.current?.focus(); };
  }, [selected]);
  const video = selected === null ? null : videos[selected];
  return <>
    <div className="video-library"><div className="video-library-intro"><span className="eyebrow">SELECTED FROM MAHLA’S CHANNEL</span><p>Astrology, lunar cycles and a different perspective. Videos in Persian, with English title summaries.</p></div><div className="video-grid">{videos.map((item,i) => <article className="video-tile" key={item.id}><button className="video-cover" aria-label={`Play ${item.englishTitle}`} onClick={event => { opener.current = event.currentTarget; setSelected(i); }}><img src={item.thumbnail} alt="" width="480" height="360" loading="lazy"/><span className="video-play" aria-hidden="true">▷</span><span className="video-language">فارسی · PERSIAN</span></button><div className="video-tile-copy"><p className="eyebrow">{item.category}</p><h3>{item.englishTitle}</h3><p className="video-original-title" dir="rtl" lang="fa">{item.title}</p><a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></div></article>)}</div><a className="pill glass video-all" href={channelUrl} target="_blank" rel="noopener noreferrer">Explore all videos <span aria-hidden="true">↗</span></a></div>
    <dialog ref={dialog} className="video-dialog" aria-labelledby="video-dialog-title" onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}><div className="video-modal-panel"><div className="video-modal-top"><span className="eyebrow">MAHLA / THE VOICE OF THE THIRD POINT</span><button autoFocus onClick={() => setSelected(null)} aria-label="Close video">Close <span aria-hidden="true">×</span></button></div>{video && <><div className="video-player"><iframe key={video.id} src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`} title={video.englishTitle} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div><div className="video-modal-caption"><h2 id="video-dialog-title">{video.englishTitle}</h2><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div></>}</div></dialog>
  </>;
}
