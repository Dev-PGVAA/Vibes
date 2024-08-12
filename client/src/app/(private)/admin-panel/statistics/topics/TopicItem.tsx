import cn from 'clsx'
import { HiMiniArrowTrendingDown } from 'react-icons/hi2'

import SkeletonLoader from '@/components/ui/loaders/SkeletonLoader'

import styles from './TopicItem.module.scss'
import type { IAdminTopics } from './admin-topics.data'

export function TopicItem({
	item,
	index
}: {
	item: IAdminTopics
	index: number
}) {
	const currency = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})
		.format(item.value)
		.toLocaleString()
	const value = item.value.toLocaleString()
	const isLoading = false

	return (
		<div
			className={styles.item}
			role='button'
			tabIndex={index}
		>
			<div className={styles.info}>
				<item.icon size={40} />
				<div>
					<p>{item.name}</p>
					<p>{item.description}</p>
				</div>
			</div>
			<div className={styles.statistics}>
				{isLoading ? (
					<>
						<SkeletonLoader className='w-7 h-7 rounded-lg mx-auto' />
						<SkeletonLoader className='w-20 h-5 rounded-lg mx-auto' />
						<SkeletonLoader className='w-16 h-3 rounded-lg mx-auto' />
					</>
				) : (
					<>
						<HiMiniArrowTrendingDown
							size={25}
							// @ts-ignore
							style={item.isPositive && { transform: 'scaleY(-1)' }}
							fill={item.isPositive ? '#1CDB2C' : '#C3191A'}
						/>
						<p
							className={cn(
								styles.value,
								item.isPositive ? 'text-[#1CDB2C]' : 'text-[#C3191A]'
							)}
						>
							{item.name === 'Payment' ? currency : value}
						</p>
						<p className={styles.period}>Last 6 month</p>
					</>
				)}
			</div>
		</div>
	)
}
