/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	// 경로 지정: 사용자가 특정 경로로 도달했을 때, 지정 경로로 이동 시키게 하는것(예전 경로를 바뀐 새로운 경로로 바꿔주는것)
	async redirects() {
		return [
			{
				source: "/products/deleted_forever",
				destination: "/products",
				permanent: true,
			},
			{
				source: "/products/deleted_temp",
				destination: "/products",
				permanent: false,
			},
		];
	},
	//해당 민감한 경로를 다른 경로로 대체할 수 있는것, 기존에 복잡하고 거추장한 url를 다른것으로 대체할 수 있음
	async rewrites() {
		return [
			{
				source: "/dam",
				destination: "/about/me/dam",
			},
			{
				source: "/items/:slug",
				destination: "/products/:slug",
			},
		];
	},
};

module.exports = nextConfig;
