import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type CustomSkeletonProps = SkeletonProps & {
	repeat?: number
}

const SkeletonLoader: FC<CustomSkeletonProps> = ({
	className,
	repeat = 1,
	...rest
}) => {
	return (
		<>
			{Array(repeat)
				.fill(null)
				.map((_, i) => (
					<Skeleton
						{...rest}
						baseColor='#151619'
						highlightColor='#1F2125'
						className={className}
						key={i}
					/>
				))}
		</>
	)
}

export default SkeletonLoader
