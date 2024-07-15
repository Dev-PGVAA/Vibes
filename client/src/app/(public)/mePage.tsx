'use client'

import { useRouter } from 'next/navigation'

import { PUBLIC_PAGES } from '@/config/page-url.config'

export function Me() {
	const { push } = useRouter()
	setTimeout(() => push(PUBLIC_PAGES.HOME), 444)

	return <></>
}
