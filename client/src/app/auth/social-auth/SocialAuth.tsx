import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

import { SERVER } from '@/config/page-url.config'

import styles from '../auth.module.scss'

export function SocialAuth() {
	return (
		<>
			<div className={styles.variants}>
				<Link href={SERVER.GOOGLE_AUTH}>
					<FcGoogle size={23} />
					<p>Google</p>
				</Link>
			</div>

			<div className={styles.orSignInWith}>
				<div className={styles.line} />
				<p>Or</p>
				<div className={styles.line} />
			</div>
		</>
	)
}
