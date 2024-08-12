'use client'

import cn from 'clsx'
import { type ReactNode } from 'react'

import Heading from '../heading/Heading'
import Player from '../player/Player'

import styles from './dashboard-layout.module.scss'
import Sidebar from './sidebar/Sidebar'

export default function DashboardLayout({
	children,
	isShowPlayer = true
}: {
	children: ReactNode
	isShowPlayer?: boolean
}) {
	return (
		<section className={styles.section}>
			<Sidebar />

			<main className={cn(isShowPlayer ? styles.public : styles.private)}>
				<Heading />
				<div className={styles.content}>{children}</div>
				{isShowPlayer && <Player />}
			</main>
		</section>
	)
}
