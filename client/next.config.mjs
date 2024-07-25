/** @type {import('next').NextConfig} */
import withGraphql from 'next-plugin-graphql'

const nextConfig = withGraphql({
	env: {
		GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'localhost',
				port: '4200',
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
