/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ifeanyi-aladi.vercel.app",
  generateRobotsTxt: false, // We've already created a custom robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    // Add any dynamic paths here if needed
    return [];
  },
};
