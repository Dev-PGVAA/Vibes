import { SINGER_PAGES } from '@/config/page-url.config'
import Link from 'next/link'
import { IoIosCreate } from 'react-icons/io'
import styles from './singerPanel.module.scss'

export function SingerPanel() {
	return (
		<div>
			<div className={styles.card}>
				<Link href={SINGER_PAGES.CREATE_TRACK}>
					<h2>
						Create track <IoIosCreate />
					</h2>
					<p>Create your own track</p>
				</Link>
			</div>
		</div>
	)
}
