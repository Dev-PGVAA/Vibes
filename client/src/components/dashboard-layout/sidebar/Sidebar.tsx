'use client'

import cn from 'clsx'
import Link from 'next/link'
import { memo } from 'react'
import { PiListPlusBold } from 'react-icons/pi'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import { useProfile } from '@/hooks/useProfile'

import styles from '../dashboard-layout.module.scss'
import { useToggleSidebar } from '../hooks/useToggleSidebar'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

function Sidebar() {
	const { user } = useProfile()
	const { isOpenSidebar } = useToggleSidebar()

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
					</header>
					<div>
						{MENU.map(item => (
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
							<PiListPlusBold className='flex ml-auto' />
						</button>
						<a>Favorite music</a>
						<a>User playlists .... </a>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default memo(Sidebar)
