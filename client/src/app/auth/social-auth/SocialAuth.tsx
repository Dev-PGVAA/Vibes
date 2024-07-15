import { SERVER } from '@/config/page-url.config'
import { useRouter } from 'next/navigation'
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import styles from '../auth.module.scss'

export function SocialAuth() {
	const { push } = useRouter()

	return (
		<>
			<div className={styles.variants}>
				<button onClick={() => push(SERVER.GOOGLE_AUTH)}>
					<FcGoogle size={23} />
					<p>Google</p>
				</button>
				<button onClick={() => push(SERVER.GITHUB_AUTH)}>
					<BsGithub size={23} />
					<p>Github</p>
				</button>
			</div>

			<div className={styles.orSignInWith}>
				<div className={styles.line} />
				<p>Or</p>
				<div className={styles.line} />
			</div>
		</>
	)
}
