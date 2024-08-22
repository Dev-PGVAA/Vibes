'use client'

import cn from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import Link from 'next/link'
import { memo, useCallback, useContext, useEffect } from 'react'
import { PiListPlusBold } from 'react-icons/pi'

import { CollapseSidebar } from '@/components/ui/buttons/CollapseSidebar'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import { useProfile } from '@/hooks/useProfile'

import styles from '../dashboard-layout.module.scss'

import { MenuItem } from './MenuItem'
import { MENU_ADMIN } from './menu.data'
import { SidebarContext } from '@/app/providers'

function Sidebar() {
	const { user } = useProfile()
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

	return (
		<aside
			className={cn(
				styles.aside,
				isOpenSidebar ? styles.showSidebar : styles.hideSidebar
			)}
		>
			<div>
				<div className={styles.menu}>
					<header>
						<Link href={PUBLIC_PAGES.HOME}>
							<img
								src='/logo.svg'
								alt='logo'
							/>
						</Link>
						<AnimatePresence>
							{isOpenSidebar && (
								<m.div
									className={cn(styles.collapse)}
									exit={{ opacity: 0, x: 25 }}
									initial={{ opacity: 0, x: 25 }}
									animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
									transition={{ type: 'just', stiffness: 200 }}
								>
									<CollapseSidebar />
								</m.div>
							)}
						</AnimatePresence>
					</header>
					<div>
						{MENU_ADMIN.map((item, _) => (
							<MenuItem
								item={item}
								key={item.link}
								role={user ? user.role : 'USER'}
							/>
						))}
					</div>
					<div className={styles.line} />
					<div className={styles.playlists}>
						<button>
							<span>Create playlist</span>
							<PiListPlusBold />
						</button>
						<a>Favorite music</a>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default memo(Sidebar)
