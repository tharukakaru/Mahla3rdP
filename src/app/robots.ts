export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { indexable, siteUrl } from '@/lib/config';
export default function robots(): MetadataRoute.Robots { return { rules: indexable ? { userAgent: '*', allow: '/', disallow: ['/api/', '/dashboard/', '/sign-in'] } : { userAgent: '*', disallow: '/' }, sitemap: `${siteUrl}/sitemap.xml` }; }
