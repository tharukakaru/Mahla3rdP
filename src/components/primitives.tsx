import Link from 'next/link';
import type { ReactNode } from 'react';

export function PointMark({ className = '' }: { className?: string }) {
  return <span className={`point-mark ${className}`} aria-hidden="true"><i /><i /><i /></span>;
}
export function Action({ href, children, light = false, className = '' }: { href: string; children: ReactNode; light?: boolean; className?: string }) {
  return <Link className={`action ${light ? 'action-light' : ''} ${className}`} href={href}><span>{children}</span><PointMark /></Link>;
}
export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return <p className="eyebrow">{number && <span className="chapter-number">{number} / </span>}{children}</p>;
}
export function Display({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`display ${className}`}>{children}</h2>;
}
export function ThreePoints({ variant = 0 }: { variant?: number }) {
  return <svg className={`three-points variant-${variant}`} viewBox="0 0 360 260" fill="none" aria-hidden="true"><path d="M60 195L300 195L180 55Z" stroke="currentColor" strokeWidth=".6" /><path d="M180 55V232M28 195H332" stroke="currentColor" strokeWidth=".6" strokeDasharray="3 6" /><circle cx="60" cy="195" r="9" fill="currentColor"/><circle cx="300" cy="195" r="9" fill="currentColor"/><circle className="third-coordinate" cx="180" cy="55" r="12" fill="currentColor"/><circle cx="180" cy="55" r="28" stroke="currentColor" strokeWidth=".6"/></svg>;
}
