import Image from 'next/image'

import { BadgeAgeLimit } from '@/ui/badges/badgeAgeLimit/BadgeAgeLimit'
import SkeletonLoader from '@/ui/loaders/SkeletonLoader'

import { useTrack } from '@/hooks/useTrack'

import { usePlayer } from '../hooks/usePlayer'
import styles from '../player.module.scss'

export function PlayerTitle({ className }: { className?: string }) {
	const { data, isLoading } = useTrack()
	const { player } = usePlayer()

	return (
		<div className={className}>
			{isLoading ? (
				<>
					<SkeletonLoader className={styles.loader1} />
					<div>
						<SkeletonLoader className={styles.loader2} />
						<SkeletonLoader className={styles.loader3} />
					</div>
				</>
			) : (
				<>
					<Image
						src={data?.GetTracksByName[player.playId].cover ?? ''}
						height={60}
						width={60}
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
