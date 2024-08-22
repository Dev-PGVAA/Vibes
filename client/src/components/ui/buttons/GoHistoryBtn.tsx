import { usePathname } from 'next/navigation'
import { MdChevronLeft } from 'react-icons/md'

import styles from './GoHistoryBtn.module.scss'

export function GoHistoryBtn({ action }: { action: 'back' | 'forward' }) {
	const pathname = usePathname()

	const goHistory = () => {
		if (action === 'back')
			document.referrer.replace(
				process.env.NEXT_PUBLIC_CLIENT_URL || 'https://localhost:3000',
				''
			) !== pathname && history.back()
		else history.forward()
	}

	return (
		<button
			onClick={() => goHistory()}
			className={styles.historyButton}
		>
			<MdChevronLeft
				size={20}
				//@ts-ignore
				className={action === 'forward' && styles.actionForward}
			/>
		</button>
	)
}
