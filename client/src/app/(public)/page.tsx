import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Me } from './mePage'

export const metadata: Metadata = {
	title: 'Me',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <Me />
}
