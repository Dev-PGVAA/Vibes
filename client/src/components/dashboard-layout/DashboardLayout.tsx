import { type PropsWithChildren } from 'react'
import Heading from '../heading/Heading'
import Player from '../player/Player'
import styles from './dashboard-layout.module.scss'
import Sidebar from './sidebar/Sidebar'

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<section className={styles.section}>
			<Sidebar />

			<main className={styles.public}>
				<Heading />
				<div className={styles.content}>{children}</div>
				<Player />
			</main>
		</section>
	)
}
