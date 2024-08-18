'use client'

import dynamic from 'next/dynamic'
import { type ReactNode } from 'react'

import Heading from '../heading/Heading'

import styles from './dashboard-layout.module.scss'
import Sidebar from './sidebar/Sidebar'

const DynamicPlayer = dynamic(() => import('../player/Player'), { ssr: false })

export default function DashboardLayout({
	children,
	isShowPlayer = true
}: {
	children: ReactNode
	isShowPlayer?: boolean
}) {
	return (
		<main className={styles.main}>
			<Sidebar />

			<div className={isShowPlayer ? styles.public : styles.private}>
				<Heading />
				<div className={styles.content}>{children}</div>
				{isShowPlayer && <DynamicPlayer />}
			</div>
		</main>
	)
}
