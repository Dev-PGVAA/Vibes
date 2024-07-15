import { useEffect, useState } from 'react'

export function useScreenSize() {
	const [width, setWidth] = useState<number>(1980)
	const [height, setHeight] = useState<number>(1080)

	useEffect(() => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}, [])

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		})
		width <= 1100 && localStorage.setItem('isMinimized', 'true')

		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth)
				setHeight(window.innerHeight)
			})
		}
	}, [width])

	return { width }
}
