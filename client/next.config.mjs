/** @type {import('next').NextConfig} */
import withGraphql from 'next-plugin-graphql'

const nextConfig = withGraphql({
	env: {
		GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
		CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'localhost',
				port: '',
			},
			{
				protocol: 'https',
				hostname: '**.googleusercontent.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				port: '',
			},
		],
	},
})

export default nextConfig
