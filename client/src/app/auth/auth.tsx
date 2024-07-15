'use client'

import { useScreenSize } from '@/hooks/useScreenSize'

import { useState } from 'react'
import styles from './auth.module.scss'
import Aside from './sidebar'

export function Auth() {
	const { width } = useScreenSize()
	const [isHaveAnAccount, setIsHaveAnAccount] = useState(false)

	return (
		<section className={styles.auth}>
			{width >= 992 && (
				<div className={styles.stepContainer}>
					<div className={styles.stepsBox}>
						<h2>Get started with Us</h2>
						<p className={styles.articleHeading}>Some info about us:</p>
						<article>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;<b>Vibes</b>{' '}
							is where the love for music meets a commitment to environmental
							sustainability.
							<br />
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our goal is
							clear: to use the universal language of music to inspire positive
							environmental action. From advocating for greener practices in the
							music industry to organizing events that raise awareness and drive
							change, we&apos;re dedicated to harmonizing melodies with a
							message of sustainability.
							<br />
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join us in
							creating a world where music not only entertains but also empowers
							us to protect our planet.&quot;
						</article>
						<p className={styles.separator}></p>
						<p>
							{!isHaveAnAccount ? (
								<>
									Complete this easy steps to register
									<br /> your account.
								</>
							) : (
								<>
									One step to login
									<br /> your account.
								</>
							)}
						</p>
						<div className={styles.steps}>
							<div className={styles.step}>
								<p>1</p>
								<h3>{isHaveAnAccount ? 'Login' : 'Sign up'} your account</h3>
							</div>
							{!isHaveAnAccount && (
								<div className={styles.step}>
									<p>2</p>
									<h3>Set up your profile</h3>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
			<Aside
				isHaveAnAccount={isHaveAnAccount}
				setIsHaveAnAccount={setIsHaveAnAccount}
			/>
		</section>
	)
}
