import { en, type Dictionary } from '../content/en.ts';
export type TranslationStatus = 'missing' | 'draft' | 'machine-translated' | 'reviewed' | 'published';
export type LocaleConfig = { code: string; name: string; direction: 'ltr' | 'rtl'; script: string; status: TranslationStatus; dictionary?: Partial<Dictionary> };
export const locales: LocaleConfig[] = [
  { code: 'en', name: 'English', direction: 'ltr', script: 'latin', status: 'published', dictionary: en },
  { code: 'fa', name: 'فارسی', direction: 'rtl', script: 'arabic', status: 'draft' },
  { code: 'ar', name: 'العربية', direction: 'rtl', script: 'arabic', status: 'missing' },
  { code: 'fr', name: 'Français', direction: 'ltr', script: 'latin', status: 'missing' },
  { code: 'de', name: 'Deutsch', direction: 'ltr', script: 'latin', status: 'missing' },
  { code: 'es', name: 'Español', direction: 'ltr', script: 'latin', status: 'missing' },
];
export const publishedLocales = locales.filter(locale => locale.status === 'published');
export const getLocale = (code: string) => locales.find(locale => locale.code === code && locale.status === 'published');
function mergeFallback<T>(fallback: T, translation?: Partial<T>): T {
  if (!translation) return fallback;
  const result = { ...fallback };
  for (const key in translation) {
    const value = translation[key];
    if (value === undefined || value === null) continue;
    result[key] = typeof value === 'object' && !Array.isArray(value)
      ? mergeFallback(fallback[key], value) : value as T[Extract<keyof T, string>];
  }
  return result;
}
export const getDictionary = (code: string): Dictionary => mergeFallback(en, getLocale(code)?.dictionary);
export const localPath = (locale: string, path = '') => `/${locale}${path === '/' ? '' : path}`;
export function switchLocalePath(path: string, locale: string) {
  if (!publishedLocales.some(item => item.code === locale)) return path;
  const segments = path.split('/');
  if (locales.some(item => item.code === segments[1])) segments[1] = locale;
  else segments.splice(1, 0, locale);
  return segments.join('/') || `/${locale}`;
}
