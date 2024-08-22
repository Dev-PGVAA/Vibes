'use client'

import { useCallback, useContext, useEffect } from 'react'

import { SidebarContext } from '@/app/providers'

export const useToggleSidebar = () => {
	const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext)

	const toggleSidebar = useCallback(() => {
		setIsOpenSidebar(!isOpenSidebar)
	}, [isOpenSidebar])

	useEffect(() => {
		document.addEventListener('keyup', e => {
			e.preventDefault()
			if (e.key === '[') toggleSidebar()
		})

		return () => {
			document.removeEventListener('keyup', e => {
				e.preventDefault()
				if (e.key === '[') toggleSidebar()
			})
		}
	}, [isOpenSidebar, toggleSidebar])

	return { isOpenSidebar, toggleSidebar }
}
