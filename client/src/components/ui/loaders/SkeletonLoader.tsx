import cn from 'clsx'
import type { FC } from 'react'

import styles from './SkeletonLoader.module.scss'

type SkeletonProps = {
	className?: string
	repeat?: number
}

const SkeletonLoader: FC<SkeletonProps> = ({
	className,
	repeat = 1,
	...rest
}) => {
	return (
		<>
			{Array(repeat)
				.fill(null)
				.map((_, i) => (
					<div
						className={cn(styles.skeleton, className)}
						key={i}
					/>
				))}
		</>
	)
}

export default SkeletonLoader
