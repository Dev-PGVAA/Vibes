import { PUBLIC_PAGES } from '@/config/page-url.config'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import styles from './not-found.module.scss'

export const metadata: Metadata = {
	title: 'Oops! - 404',
}

const NotFoundPage: FC = () => {
	return (
		<div className={styles.notFound}>
			<Image src='/404.webp' alt='404' width={650} height={650} />
			<div>
				<h1>Oops!</h1>
				<p>
					We couldn't find the page
					<br /> you were looking for
				</p>
				<Link href={PUBLIC_PAGES.HOME}>
					<FaArrowLeftLong />
					Go home
				</Link>
			</div>
		</div>
	)
}

export default NotFoundPage
