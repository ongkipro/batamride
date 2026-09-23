import type { APIRoute } from 'astro';

const pages = [
  'https://batamride.com/',
  'https://batamride.com/about/',
  'https://batamride.com/fleet/',
  'https://batamride.com/services/',
  'https://batamride.com/contact/',
  'https://batamride.com/faq/',
  'https://batamride.com/batam-private-driver/',
  'https://batamride.com/batam-ferry-terminal-transfer/',
  'https://batamride.com/batam-airport-transfer/',
  'https://batamride.com/singapore-to-batam/',
  'https://batamride.com/privacy-policy/',
  'https://batamride.com/booking-terms/'
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
