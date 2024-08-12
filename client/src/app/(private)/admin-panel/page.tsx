import type { Metadata } from 'next'

import { Statistics } from './statistics/Statistics'

export const metadata: Metadata = {
	title: 'Admin SSR'
}

export default async function AdminPage() {
	return <Statistics />
}
