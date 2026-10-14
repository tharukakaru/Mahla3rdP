'use client';
import { en } from '@/content/en';
export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="not-found"><h1>{en.ui.error}</h1><p>{en.ui.errorBody}</p><button className="action" onClick={reset}>{en.ui.retry}</button></div>; }
