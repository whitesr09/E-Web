import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/account', '/checkout'].map(p => ({ url: `https://example.com${p}`, lastModified: new Date() })); }
