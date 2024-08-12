import cn from 'clsx'
import { FaBackward } from 'react-icons/fa'
import { IoPlay } from 'react-icons/io5'
import { MdOutlinePause, MdOutlineRepeat } from 'react-icons/md'
import { PiShuffleSimpleLight } from 'react-icons/pi'

import { Slider } from '@/components/player/slider/Slider'

import { useTrack } from '@/hooks/useTrack'

import { formatTime } from '@/utils/time/formatTime'

import { usePlayer } from '../hooks/usePlayer'
import styles from '../player.module.scss'

export function PlayerSlider({ className }: { className?: string }) {
	const { audioRef, actions, audio, player } = usePlayer()
	const { data } = useTrack()

	return (
		<>
			<audio
				src={data?.GetTracksByName[player.playId].audio}
				ref={audioRef}
				loop={audio.isRepeat}
			/>
			<div className={className}>
				<div>
					<button
						onClick={() => actions.toggleShuffle()}
						className={cn(player.isShuffle && 'stroke-accent')}
					>
						<PiShuffleSimpleLight size={17} />
					</button>
					<button onClick={() => actions.playPrev()}>
						<FaBackward size={18} />
					</button>
					<button
						className={styles.playButton}
						onClick={() => actions.toggleAudio()}
					>
						{audio.isPlaying ? (
							<MdOutlinePause size={25} />
						) : (
							<IoPlay size={25} />
						)}
					</button>
					<button onClick={() => actions.playNext()}>
						<FaBackward
							className={styles.playNextButton}
							size={18}
						/>
					</button>
					<button onClick={() => actions.toggleRepeat()}>
						<MdOutlineRepeat
							size={17}
							className={cn(audio.isRepeat && 'fill-accent')}
						/>
					</button>
				</div>
				<div>
					<p>{formatTime(audio.currentTime)}</p>
					<Slider value={audio.progress} />
					<p>{formatTime(audio.duration)}</p>
				</div>
			</div>
		</>
	)
}
