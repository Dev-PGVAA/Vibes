import { Args, Query, Resolver } from '@nestjs/graphql'
import { Role } from '@prisma/client'
import { GqlAuth } from 'src/user/decorators/auth.decorator'
import { PaginationArgsWithSearchTerm } from './dto/statistics.input'
import { StatisticsCountryRatings, StatisticsSexRatings, UsersRes, UserStatistics } from './entities/statistics.entity'
import { StatisticsService } from './statistics.service'


@Resolver('Track')
export class StatisticsResolver {
	constructor(private readonly statisticsService: StatisticsService) {}


	@Query(() => [StatisticsCountryRatings])
	@GqlAuth(Role.ADMIN)
	async GetCountriesRating() {
		return this.statisticsService.getCountriesRating()
	}

	@Query(() => [StatisticsSexRatings])
	@GqlAuth(Role.ADMIN)
	async GetSexRating() {
		return this.statisticsService.getSexRating()
	}

	@Query(() => UsersRes)
	@GqlAuth(Role.ADMIN)
	async GetUsers(@Args('data') data: PaginationArgsWithSearchTerm) {
		return this.statisticsService.getUsers(data)
	}

	@Query(() => UserStatistics)
	@GqlAuth(Role.ADMIN)
	async GetUserStatistics() {
		return this.statisticsService.getUserStatistics()
	} 
}
