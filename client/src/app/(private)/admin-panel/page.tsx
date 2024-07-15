import type { Metadata } from 'next'
import { AdminPanel } from './AdminPanel'

export const metadata: Metadata = {
	title: 'Admin SSR',
}

export default async function AdminPage() {
	return <AdminPanel />
}
