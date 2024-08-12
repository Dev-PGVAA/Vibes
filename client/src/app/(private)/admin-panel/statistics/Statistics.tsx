'use client'

import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

import SkeletonLoader from '@/components/ui/loaders/SkeletonLoader'

import { useProfile } from '@/hooks/useProfile'

import { getMonth } from '@/utils/date/month'

import styles from './Statistics.module.scss'
import { TopicItem } from './topics/TopicItem'
import { AdminTopics } from './topics/admin-topics.data'

interface IRegisterStatistics {
	day: string
	count: number
}
function createRandomStatistics(): IRegisterStatistics[] {
	let data = []
	for (let i = 0; i <= 8; i++) {
		data.push({
			day: dayjs().add(i, 'day').format('DD.MM.YYYY'),
			count: faker.number.int({ min: 5_000, max: 10_000 })
		})
	}
	return data
}

export function Statistics() {
	const { user, isLoading } = useProfile()

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
			<hr />
			<div className={styles.statistics}>
				<div>statistics</div>
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
