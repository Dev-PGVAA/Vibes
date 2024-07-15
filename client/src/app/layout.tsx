import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'

import '@/assets/styles/globals.scss'
import { Providers } from './providers'

const arimo = DM_Sans({
	subsets: ['latin-ext', 'latin'],
	weight: ['300', '400', '700'],
	display: 'swap',
	variable: '--font-DM_Sans',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	icons: '/favicon.svg',
	manifest: '/manifest.json',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='theme-color' content='#161616' />
			</head>
			<body className={arimo.className} id='body' data-theme='dark'>
				<Providers>
					{children}
					<Toaster theme='light' position='top-right' duration={4500} />
				</Providers>
			</body>
		</html>
	)
}
