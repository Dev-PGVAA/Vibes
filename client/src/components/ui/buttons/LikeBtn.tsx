import type { Dispatch, SetStateAction } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'

import styles from './LikeBtn.module.scss'

export function LikeBtn({
	isLike,
	setIsLike
}: {
	isLike: boolean
	setIsLike?: Dispatch<SetStateAction<boolean | undefined>>
}) {
	return (
		<button>
			<TiHeartFullOutline
				size={32}
				className={styles.likeButton}
				fill='transparent'
				stroke='#ffffff33'
				strokeWidth={2}
			/>
		</button>
	)
}
