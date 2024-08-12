import { faker } from '@faker-js/faker'
import type { IconType } from 'react-icons'
import { FaUsers } from 'react-icons/fa'
import { GrAssistListening } from 'react-icons/gr'
import { MdPayments } from 'react-icons/md'
import { VscFeedback } from 'react-icons/vsc'

export interface IAdminTopics {
	name: string
	description: string
	icon: IconType
	isPositive: boolean
	value: number
}

export const AdminTopics: IAdminTopics[] = [
	{
		name: 'Users',
		description: 'Authenticated users, segments, etc',
		icon: FaUsers,
		value: faker.number.int({ min: 0, max: 50_000_000 }),
		isPositive: faker.datatype.boolean()
	},
	{
		name: 'Payment',
		description: 'Payment statistics',
		icon: MdPayments,
		value: faker.number.float({ min: 10, max: 50_000_000 }),
		isPositive: faker.datatype.boolean()
	},
	{
		name: 'Listens',
		description: 'Listens statistics, top musics, etc',
		icon: GrAssistListening,
		value: faker.number.int({ min: 0, max: 1_000_000_000 }),
		isPositive: faker.datatype.boolean()
	},
	{
		name: 'Feedback',
		description: 'Feedback of using this site',
		icon: VscFeedback,
		value: faker.number.float({ min: 0, max: 5 }),
		isPositive: faker.datatype.boolean()
	}
]
