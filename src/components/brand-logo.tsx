export function BrandLogo({ emblem = false, className = '' }: { emblem?: boolean; className?: string }) {
  // The source files have transparent square canvases. The viewBox frames the
  // supplied artwork without changing or redrawing the original logo.
  return <svg className={`${emblem ? 'brand-emblem' : 'brand-logo'} ${className}`} viewBox={emblem ? '574 562 864 830' : '162 873 1691 269'} role="img" aria-label={emblem ? 'Mahla Third Point emblem' : 'mahla3rdpoint'}><image href={emblem ? '/art/mahla-emblem.png' : '/art/mahla-wordmark.png'} width="2000" height="2000"/></svg>;
}
