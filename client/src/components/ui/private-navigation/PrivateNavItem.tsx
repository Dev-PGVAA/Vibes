import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'

import { usePathname } from 'next/navigation'
import styles from './PrivateNavigation.module.scss'
import type { INavItem } from './private-navigation.interface'

const PrivateNavItem: FC<{ navItem: INavItem }> = ({ navItem }) => {
	const pathname = usePathname()

	return (
		<li>
			<Link
				href={navItem.link}
				className={cn(navItem.link === pathname && styles.active)}
			>
				{navItem.title}
			</Link>
		</li>
	)
}

export default PrivateNavItem
