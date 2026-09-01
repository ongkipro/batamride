import type { APIRoute } from 'astro';
import { packages } from '../data/packages';
import { destinations } from '../data/destinations';

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'tours', priority: '0.9', changefreq: 'weekly' },
  { path: 'destinations', priority: '0.9', changefreq: 'weekly' },
  { path: 'fleet', priority: '0.8', changefreq: 'monthly' },
  { path: 'faq', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' }
];

export const GET: APIRoute = () => {
  const tourPages = packages.map(p => ({
    path: `tours/${p.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const destinationPages = destinations.map(d => ({
    path: `destinations/${d.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const allPages = [...staticPages, ...tourPages, ...destinationPages];
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(
    item => `  <url>
    <loc>${item.path ? `https://batamride.com/${item.path}/` : 'https://batamride.com/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
