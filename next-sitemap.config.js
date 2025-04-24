/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_BASE_URL || "https://remotecord.app",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
