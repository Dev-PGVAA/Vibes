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
	item,
	index
}: {
	item: IMenuItem
	index?: number
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
							pathname.includes(item.link)
								? styles.activeNested
								: styles.inactive,
							styles.nested
						)}
					>
						<Link
							href={item.link}
							className={styles.link}
						>
							<item.icon size={22} />
							<span>{item.name}</span>
						</Link>
						<m.button
							onClick={() => setIsOpenMenu(!isOpenMenu)}
							className={styles.nestedCollapseButton}
							whileTap={{ scale: 0.87, opacity: 0.6 }}
						>
							<CgChevronDown
								size={22}
								className={cn(isOpenMenu && styles.activeNestedButton)}
							/>
						</m.button>
					</div>
					<AnimatePresence>
						{isOpenMenu && (
							<div className={styles.nestedMenu}>
								{item.nested.map((item, _) => (
									<MenuItem
										key={item.link}
										item={item}
										index={_ + 1}
										role={user ? user.role : 'USER'}
									/>
								))}
							</div>
						)}
					</AnimatePresence>
				</div>
			) : (
				<m.div
					animate={index ? { x: 0, y: 0, opacity: 1 } : {}}
					exit={index ? { x: '120%', opacity: 0, y: '-50%' } : {}}
					initial={index ? { x: '-80%', opacity: 0, y: '-50%' } : {}}
					transition={{
						type: 'spring',
						delay: index ? index * 0.025 : 0,
						duration: 0.45
					}}
				>
					<Link
						href={item.link}
						className={cn(
							styles.link,
							pathname === item.link ? styles.active : styles.inactive
						)}
					>
						<item.icon size={22} />
						<span>{item.name}</span>
					</Link>
				</m.div>
			)}
		</>
	)
}
