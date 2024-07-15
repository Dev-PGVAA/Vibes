import { CgPlayList } from 'react-icons/cg'
import { PiMicrophoneStageFill } from 'react-icons/pi'

export function PlayerButtons({ className }: { className?: string }) {
	return (
		<div className={className}>
			<PiMicrophoneStageFill />
			<CgPlayList size={25} />
		</div>
	)
}
