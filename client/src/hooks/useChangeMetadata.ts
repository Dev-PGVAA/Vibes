import { SITE_NAME } from '@/constants/seo.constants'
import { useCallback, useMemo } from 'react'

export const useChangeMetadata = () => {
	const changeTitle = useCallback((title: string, isPlaying?: boolean) => {
		if (isPlaying === true) document.title = `${title} | ${SITE_NAME}`
		else document.title = `${title}`
	}, [])

	const changeDescription = useCallback((description: string) => {
		const meta = document.querySelector('meta[name="description"]')
		meta?.setAttribute('content', description)
	}, [])

	return useMemo(
		() => ({ changeTitle, changeDescription }),
		[changeTitle, changeDescription]
	)
}
