'use client'

import { ADMIN_PAGES } from '@/config/page-url.config'
import { useRouter } from 'next/navigation'

export function AdminPanel() {
	const { push } = useRouter()
	setTimeout(() => push(ADMIN_PAGES.STATISTICS), 444)

	return <></>
}
