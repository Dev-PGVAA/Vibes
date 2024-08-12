import type { Metadata } from 'next'

import { SingerPanel } from './SingerPanel'

export const metadata: Metadata = {
	title: 'Singer SSR'
}

export default async function AdminPage() {
	return <SingerPanel />
}
