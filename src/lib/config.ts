export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export const indexable = process.env.SITE_INDEXABLE === 'true';
export const legacyOrigin = (process.env.NEXT_PUBLIC_LEGACY_ORIGIN || 'https://mahla3rdpoint.com').replace(/\/$/, '');
export const business = {
  email: 'mahlashahsvn@gmail.com',
  telegram: 'https://t.me/Mahlathe3rdpoint',
  instagram: 'https://www.instagram.com/mahla3rdpoint/',
  booking: `${legacyOrigin}/booking`, classes: `${legacyOrigin}/classes`,
  chart: `${legacyOrigin}/dashboard/chart`, signIn: `${legacyOrigin}/sign-in`,
};
