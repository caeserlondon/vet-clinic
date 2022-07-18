/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['ceaser-vet-clinic.vercel.app'],
	},
	loader: 'imgix',
	path: '',
}

module.exports = nextConfig
