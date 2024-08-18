'use client'

import { useCallback, useEffect, useState } from 'react'

export const useToggleSidebar = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true)

	const toggleSidebar = useCallback(() => {
		setIsOpenSidebar(!isOpenSidebar)
	}, [isOpenSidebar])

	useEffect(() => {
		document.addEventListener('keyup', e => {
			if (e.key === '[') toggleSidebar()
		})

		return () => {
			document.removeEventListener('keyup', e => {
				if (e.key === '[') toggleSidebar()
			})
		}
	}, [isOpenSidebar, toggleSidebar])

	return { isOpenSidebar, toggleSidebar }
}
