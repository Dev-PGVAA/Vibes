'use client'

import { useState } from 'react'

import { useScreenSize } from '@/hooks/useScreenSize'

import styles from './auth.module.scss'
import Aside from './sidebar'

export function Auth() {
	const { width } = useScreenSize()
	const [isHaveAnAccount, setIsHaveAnAccount] = useState(false)

	return (
		<section className={styles.auth}>
			{width >= 992 && (
				<div className={styles.stepContainer}>
					<div>
						<img
							src='/favicon.svg'
							alt='logo'
							width={75}
							height={75}
						/>
						<span>Vibes</span>
					</div>
					<h2>Welcome to the era of music</h2>
				</div>
			)}
			<Aside
				isHaveAnAccount={isHaveAnAccount}
				setIsHaveAnAccount={setIsHaveAnAccount}
			/>
		</section>
	)
}
