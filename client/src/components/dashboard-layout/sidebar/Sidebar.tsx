'use client'

import Link from 'next/link'

import { PiListPlusBold } from 'react-icons/pi'
import styles from '../dashboard-layout.module.scss'

import { PUBLIC_PAGES } from '@/config/page-url.config'
import { useProfile } from '@/hooks/useProfile'
import cn from 'clsx'
import Image from 'next/image'
import React from 'react'
import { countMT } from './ActiveItem'
import { MenuItem } from './MenuItem'
import { MENU, MENU_ADMIN, MENU_SINGER } from './menu.data'

function Sidebar() {
	const { user } = useProfile()

	let typeMenu = MENU
	if (user?.profile?.role === 'SINGER') typeMenu = MENU_SINGER
	if (user?.profile?.role === 'ADMIN') typeMenu = MENU_ADMIN

	return (
		<aside className={styles.aside}>
			<div>
				<div className={styles.menu}>
					<header>
						<Link href={PUBLIC_PAGES.HOME}>
							<Image src='/logo.svg' width={100} height={20} alt='logo' />
						</Link>
					</header>
					<div className={styles.links}>
						<div>
							{typeMenu.map(item => (
								<MenuItem
									item={item}
									key={item.link}
									role={user ? user.role : 'USER'}
								/>
							))}
						</div>
						<div
							className={cn(
								styles.activeElementLine,
								countMT(user ? user.role : 'USER')
							)}
						/>
					</div>
					<div className={styles.line} />
					<div className={styles.playlists}>
						<button>
							<span>Create playlist</span>
							<PiListPlusBold className='flex ml-auto' />
						</button>
						{/* TODO: Add user playlists */}
						<a>Favorite music</a>
						<a>User playlists .... </a>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default React.memo(Sidebar)
