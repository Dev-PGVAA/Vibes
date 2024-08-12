import Image from 'next/image'
import Link from 'next/link'

import { BadgeAgeLimit } from '@/ui/badges/badgeAgeLimit/BadgeAgeLimit'

import { formatTime } from '@/utils/time/formatTime'

import type { ISeachItem } from './search.interface'
import styles from './search.module.scss'
import type { ITrack } from '@/services/track/track.interface'

export function SearchItem({ item }: { item: ITrack | ISeachItem }) {
	return (
		<Link
			href='#'
			className={styles.searchItem}
		>
			<Image
				src={item.cover}
				alt={item.name}
				height={60}
				width={60}
				className='rounded-md'
				draggable={false}
				unoptimized
			/>
			<div>
				<p>{item.name}</p>
				<p>{item.author}</p>
			</div>
			<section>
				{true && <BadgeAgeLimit />}
				<p>{formatTime(item.duration)}</p>
			</section>
		</Link>
	)
}
