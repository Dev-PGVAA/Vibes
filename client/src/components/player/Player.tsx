'use client'

import cn from 'clsx'
import { type FC, useState } from 'react'

import { useTrack } from '@/hooks/useTrack'

import { LikeBtn } from '../ui/buttons/LikeBtn'

import { PlayerButtons } from './player-buttons/PlayerButtons'
import { PlayerSlider } from './player-slider/PlayerSlider'
import { PlayerTitle } from './player-title/PlayerTitle'
import styles from './player.module.scss'

const Player: FC = () => {
	const [isShowPlayer, setIsShowPlayer] = useState(false)
	const { data } = useTrack()

	return (
		<div
			className={cn(
				styles.player,
				data && 'relative -bottom-28 duration-300 hidden'
			)}
		>
			{!data && (
				<>
					<PlayerTitle className={styles.title} />
					<LikeBtn isLike={true} />
					<PlayerSlider className={styles.slider} />
					<PlayerButtons className={styles.buttons} />
				</>
			)}
		</div>
	)
}
export default Player
