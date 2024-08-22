import cn from 'clsx'
import { HiMiniArrowTrendingDown, HiMiniArrowTrendingUp } from 'react-icons/hi2'

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
						<SkeletonLoader className={styles.loader1} />
						<SkeletonLoader className={styles.loader2} />
						<SkeletonLoader className={styles.loader3} />
					</>
				) : (
					<>
						{item.isPositive ? (
							<HiMiniArrowTrendingUp
								size={25}
								fill='#1CDB2C'
							/>
						) : (
							<HiMiniArrowTrendingDown
								size={25}
								fill='#C3191A'
							/>
						)}

						<p
							className={cn(
								styles.value,
								item.isPositive ? styles.positive : styles.negative
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
