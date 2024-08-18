'use client'

import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import { BsQuestion } from 'react-icons/bs'
import { FaCircleDot } from 'react-icons/fa6'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { RxCrosshair1 } from 'react-icons/rx'
import { ResponsiveContainer } from 'recharts'

import SkeletonLoader from '@/components/ui/loaders/SkeletonLoader'

import { ACCENT_COLOR } from '@/constants/constants'

import { useProfile } from '@/hooks/useProfile'

import { getMonth } from '@/utils/date/month'

import styles from './Statistics.module.scss'
import { TopicItem } from './topics/TopicItem'
import { AdminTopics } from './topics/admin-topics.data'

interface IRegisterStatistics {
	month: string
	count: number
	before: number
}
function createRandomStatistics(): IRegisterStatistics[] {
	let data = []
	for (let i = 0; i <= 11; i++) {
		data.push({
			month: getMonth.short[i],
			count: faker.number.int({ min: 5_000, max: 10_000 }),
			before: faker.number.int({ min: 5_000, max: 10_000 })
		})
	}
	return data
}

export function Statistics() {
	const { user, isLoading } = useProfile()
	const data = createRandomStatistics()

	return (
		<>
			<div className={styles.header}>
				<div className={styles.greeting}>
					{isLoading ? (
						<SkeletonLoader className='w-52 h-12 mb-1 rounded-lg ' />
					) : (
						<p>Hello {user?.profile?.name.split(' ')[0]}</p>
					)}
				</div>
				<p className={styles.date}>
					<MdKeyboardDoubleArrowRight /> {getMonth.long[dayjs().get('month')]}{' '}
					{dayjs().get('date')}
				</p>
			</div>
			<div className={styles.topics}>
				{AdminTopics.map((item, _) => (
					<TopicItem
						item={item}
						index={_ + 1}
						key={item.name}
					/>
				))}
			</div>
			<div className={styles.statistics}>
				<ResponsiveContainer className={styles.chart}>
					<div className='flex flex-col'>
						<div className='flex'>
							<h2 className='text-sm'>Your summary</h2>
							<div className='flex gap-4 ml-auto text-xs'>
								<p className='flex items-center gap-2 opacity-50'>
									<FaCircleDot
										size={14}
										fill={ACCENT_COLOR}
									/>
									Last 9 months
								</p>
								<p className='flex items-center gap-2 opacity-50'>
									<RxCrosshair1
										size={14}
										fill={ACCENT_COLOR}
									/>
									Same period in last year
								</p>
								<BsQuestion
									className='p-[2px] bg-white/25 rounded-full'
									size={20}
								/>
							</div>
						</div>
						<p className='text-xs opacity-50'>Nov - July</p>
					</div>
				</ResponsiveContainer>
				<div>countries / top payment categories / null</div>
			</div>
			<div className={styles.info}>
				<div>segments / null</div>
				<div>table of users / null</div>
				or table
			</div>
		</>
	)
}
