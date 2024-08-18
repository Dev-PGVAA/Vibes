import { Injectable, Logger } from '@nestjs/common'
import { Prisma, Sex } from '@prisma/client'
import { isHasMorePagination } from 'src/base/pagination/is-has-more'
import { PrismaService } from 'src/prisma.service'
import { PaginationArgsWithSearchTerm } from './dto/statistics.input'
import { TAllMonth, TFormattedDataFunction } from './types/statistics.types'

@Injectable()
export class StatisticsService {
	constructor(private readonly prisma: PrismaService) {}

	async getCountriesRating() {
		const countries = await this.prisma.user.groupBy({
			by: ['country'],
			_count: {
				id: true
			},
			where: {
				country: {
					not: null
				}
			},
			orderBy: {
				_count: {
					id: 'desc'
				}
			}
		})

		const countiesCount = await this.prisma.$transaction(
			countries.map(country => 
				this.prisma.user.count({
					where: {
						country: country.country
					}
				})
			)
		)

		return countries.map((country, index) => {
			return {
				...country,
				count: countiesCount[index]
			}
		})
	}

	async getSexRating() {
		const sexCount = await this.prisma.$transaction(
			Object.values(Sex).map(sex => 
				this.prisma.user.count({
					where: {
						sex: { in: [sex] }
					},
				})
			)
		)

		return Object.values(Sex).map((sex, index) => {
			return {
				sex,
				count: sexCount[index]
			}
		}).sort((a, b) => b.count - a.count)
	}

	async getUsers(data: PaginationArgsWithSearchTerm) {
		const searchTermQuery = data?.searchTerm
			? this.getSearchTermFilter(data?.searchTerm)
			: {}

		const users = await this.prisma.user.findMany({
			skip: data?.skip,
			take: data?.take,
			where: searchTermQuery,
		})

		const totalCount = await this.prisma.user.count({
			where: searchTermQuery,
		})

		const isHasMore = isHasMorePagination(totalCount, data?.skip, data.take)

		return { items: users, isHasMore }
	}

	async getUserStatistics(){
		const currentMonth = new Date().getMonth()
		const currentYear = new Date().getFullYear() 

		const startDate = new Date(currentYear - 1, currentMonth, 1)
		const endDate = new Date(currentYear, currentMonth + 1)

		const allMonths = this.generateMonths(startDate, endDate)

		const registrations = await this.prisma.user.groupBy({
			by: ['createdAt'],
			_count: true,
			orderBy: {
				createdAt: 'asc',
			},
			where: {
				createdAt: {
					gte: startDate, 
					lte: endDate, 
				},
			},
		})

		const activeUsers = await this.prisma.user.groupBy({
			by: ['updatedAt'],
			_count: true,
			orderBy: {
				updatedAt: 'asc',
			},
			where: {
				updatedAt: {
					gte: startDate, 
					lte: endDate, 
				},
			},
		})

		const registrationMap = new Map<string, number>()
		const activeUsersMap = new Map<string, number>()

		for (const reg of registrations) {
			const month = reg.createdAt.getMonth() + 1 
			const year = reg.createdAt.getFullYear() 
			const key = `${year}-${month}` 

			if (registrationMap.has(key)) 
				registrationMap.set(key, registrationMap.get(key) + reg._count)
			else 
				registrationMap.set(key, reg._count)
		}

		for (const act of activeUsers) {
			const month = act.updatedAt.getMonth() + 1 
			const year = act.updatedAt.getFullYear() 
			const key = `${year}-${month}`

			if (activeUsersMap.has(key)) {
				Logger.debug(`if ${activeUsersMap.get(key) + act._count}`)
				activeUsersMap.set(key, activeUsersMap.get(key) + act._count)
			}
			else {
				Logger.debug(`else ${act._count}`)
				activeUsersMap.set(key, act._count)
			}
		}

		allMonths.pop()
		const registeredUsers = this.formatData(allMonths, registrationMap)
		const activeUsersFormatted = this.formatData(allMonths, activeUsersMap)

		return {
			registrations: registeredUsers,
			activeUsers: activeUsersFormatted,
		}
	}

	private formatData(allMonths: TAllMonth, map: Map<string, number>): TFormattedDataFunction{
		const formattedData = allMonths.map(({ month, year }) => {
			const key = `${year}-${month}`
			const monthName = (new Date(year, month - 1)).toLocaleString('en-US', { month: 'short' })
			return {
				month: monthName,
				year,
				count: map.get(key) || 0,
			}
		})

		return formattedData
	}

	private generateMonths(
		start: Date,
		end: Date
	): { month: number; year: number }[] {
		const current = new Date(start) 
		const endMonth = new Date(end) 
		const months = [] 

		while (current < endMonth) {
			months.push({
				month: current.getMonth() + 1,
				year: current.getFullYear(),
			})
			current.setMonth(current.getMonth() + 1)
		}

		months.push({
			month: endMonth.getMonth() ,
			year: endMonth.getFullYear(), 
		})

		return months 
	}

	private getSearchTermFilter(searchTerm: string): Prisma.UserWhereInput {
		return {
			OR: [
				{
					email: {
						contains: searchTerm,
						mode: 'insensitive',
					},
				},
				{
					name: {
						contains: searchTerm,
						mode: 'insensitive',
					},
				},
				{
					country: {
						contains: searchTerm,
						mode: 'insensitive',
					},
				},
			],
		}
	}
}
 