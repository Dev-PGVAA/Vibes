import { type PropsWithChildren } from 'react'

import Heading from '../heading/Heading'
import styles from './dashboard-layout.module.scss'
import Sidebar from './sidebar/Sidebar'

export default function PrivateDashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<section className={styles.section}>
			<Sidebar />

			<main className={styles.private}>
				<Heading />
				<div className={styles.content}>{children}</div>
			</main>
		</section>
	)
}
