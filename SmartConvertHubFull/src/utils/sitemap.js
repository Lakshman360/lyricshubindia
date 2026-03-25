import { TOOLS } from '../data/tools';

/**
 * Generates a basic sitemap structure for search engine indexing.
 * In a real backend, this would produce a .xml file.
 */
export const generateSitemap = () => {
  const baseUrl = 'https://smartconverthub.com';
  const routes = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    ...TOOLS.map(tool => ({
      url: `/${tool.id}`,
      priority: 0.8,
      changefreq: 'weekly'
    }))
  ];

  return routes;
};

export const sitemapAsText = () => {
  const routes = generateSitemap();
  return routes.map(r => `URL: ${r.url} | Priority: ${r.priority}`).join('\n');
};
