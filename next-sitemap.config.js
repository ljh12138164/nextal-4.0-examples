/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://your-domain.com", // 请替换为你自己的网站域名
	generateRobotsTxt: true, // 生成 robots.txt
	sitemapSize: 7000, // 每个 sitemap 文件的最大 URL 数
	changefreq: "weekly", // 默认的 changefreq
	priority: 0.7, // 默认的优先级
	exclude: ["/404", "/500", "/zh/404", "/zh/500"], // 排除不需要收录的页面
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},
};
