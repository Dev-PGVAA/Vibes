'use client'

import PrivateNavItem from './PrivateNavItem'
import styles from './PrivateNavigation.module.scss'
import { AdminItems } from './private-navigation.data'

export function PrivateNavigation() {
	return (
		<nav className={styles.nav}>
			<ul>
				{AdminItems.map(item => (
					<PrivateNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}
