/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost:3000', 'ceaser-vet-clinic.vercel.app'],
		loader: 'imgix',
		path: '',
	},
}

module.exports = nextConfig
