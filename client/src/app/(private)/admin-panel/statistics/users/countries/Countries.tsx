'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MdQuestionMark } from 'react-icons/md'

import SkeletonLoader from '@/components/ui/loaders/SkeletonLoader'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip/tooltip'

import { useGetCountriesRating } from '../../hooks/users/useGetCountriesRating'

import styles from './Countries.module.scss'

export function Countries() {
	const { data, isLoading } = useGetCountriesRating()

	return (
		<div className={styles.containerBox}>
			<div className={styles.heading}>
				<h3>Top Countries</h3>
				<TooltipProvider delayDuration={500}>
					<Tooltip>
						<TooltipTrigger>
							<MdQuestionMark
								className={styles.questionTooltip}
								size={24}
							/>
						</TooltipTrigger>
						<TooltipContent
							side='top'
							sideOffset={5}
							className={styles.tooltip}
							arrowClassName={styles.tooltipArrow}
						>
							<p>Where users are from</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			{isLoading ? (
				<SkeletonLoader
					repeat={5}
					className={styles.loader}
				/>
			) : (
				<>
					{data?.slice(0, 5)?.map((item, _) => (
						<div
							className={styles.item}
							key={_}
						>
							<span className={styles.number}>{_ + 1}</span>
							<div className={styles.details}>
								<Image
									src={item.icon}
									height={35}
									width={35}
									alt='i'
									className='rounded-full'
								/>
								<p>{item.country}</p>
							</div>
							<span className={styles.value}>{item.count}</span>
						</div>
					))}
				</>
			)}
			<Link href='#'>Check all</Link>
		</div>
	)
}
