import cn from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CgChevronDown } from 'react-icons/cg'

import { useProfile } from '@/hooks/useProfile'

import styles from '../dashboard-layout.module.scss'

import type { IMenuItem } from './menu.interface'

export function MenuItem({
	item
}: {
	item: IMenuItem
	role: string | undefined
}) {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const { user } = useProfile()

	const pathname = usePathname()

	return (
		<>
			{item.nested ? (
				<div>
					<div
						className={cn(
							pathname.includes(item.link) ? 'text-white' : styles.inactive,
							'flex items-center'
						)}
					>
						<Link
							href={item.link}
							className='flex items-center py-2 pr-layout pl-2 transition-colors cursor-pointer gap-5 mt-2'
						>
							<item.icon size={22} />
							<span className='font-light -translate-x-1 text-sm'>
								{item.name}
							</span>
						</Link>
						<m.button
							onClick={() => setIsOpenMenu(!isOpenMenu)}
							className='absolute right-5 translate-y-1'
							whileTap={{ scale: 0.87, opacity: 0.6 }}
						>
							<CgChevronDown
								size={22}
								className={cn('duration-200', isOpenMenu && 'rotate-180')}
							/>
						</m.button>
					</div>
					<AnimatePresence>
						{isOpenMenu && (
							<m.div
								className='pl-6 duration-150'
								exit={{ opacity: 0, y: -25 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								{item.nested.map(item => (
									<MenuItem
										key={item.link}
										item={item}
										role={user ? user.role : 'USER'}
									/>
								))}
							</m.div>
						)}
					</AnimatePresence>
				</div>
			) : (
				<div>
					<Link
						href={item.link}
						className={cn(
							'flex items-center py-2 pr-layout pl-2 transition-colors cursor-pointer gap-5 mt-2',
							pathname === item.link ? styles.active : styles.inactive
						)}
					>
						<item.icon size={22} />
						<span className='font-light -translate-x-1 text-sm'>
							{item.name}
						</span>
					</Link>
				</div>
			)}
		</>
	)
}
