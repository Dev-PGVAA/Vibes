import { useTrack } from '@/hooks/useTrack'
import { BadgeAgeLimit } from '@/ui/badges/badgeAgeLimit/BadgeAgeLimit'
import SkeletonLoader from '@/ui/loaders/SkeletonLoader'
import Image from 'next/image'
import { usePlayer } from '../hooks/usePlayer'
import styles from '../player.module.scss'

export function PlayerTitle({ className }: { className?: string }) {
	const { data, isLoading } = useTrack()
	const { player } = usePlayer()

	return (
		<div className={className}>
			{isLoading ? (
				<>
					<p className='w-[60px] h-[60px] translate-x-4'>
						<SkeletonLoader className='w-[60px] h-[60px] rounded-md' />
					</p>
					<div className='ml-4'>
						<p className='w-[120px] h-6 mb-1'>
							<SkeletonLoader className='w-[120px] h-4 rounded' />
						</p>
						<p className='w-[120px] h-4'>
							<SkeletonLoader className='w-[120px] h-4 rounded' />
						</p>
					</div>
				</>
			) : (
				<>
					<Image
						src={data?.GetTracksByName[player.playId].cover ?? ''}
						height={60}
						width={60}
						className='rounded-md'
						draggable={false}
						unoptimized
						alt={''}
					/>
					<div>
						<div className={styles.title}>
							<p>{data?.GetTracksByName[player.playId].name}</p>
							{/* TODO: only if isHaveAgeLimit */}
							{data?.GetTracksByName[player.playId].isHaveAgeLimit && (
								<BadgeAgeLimit />
							)}
						</div>
						<p>{data?.GetTracksByName[player.playId].author}</p>
					</div>
				</>
			)}
		</div>
	)
}
