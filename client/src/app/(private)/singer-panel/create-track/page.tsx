import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { CreateTrack } from './CreateTrack'

export const metadata: Metadata = {
	title: 'Create track',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <CreateTrack />
}
