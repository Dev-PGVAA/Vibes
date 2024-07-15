import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/client'
import { GqlAuth } from 'src/user/decorators/auth.decorator'
import { TakeSingersInput } from './dto/take-singers.input'
import { BanSinger, TakeSingers } from './entities/track.entity'
import { SingerService } from './singer.service'

@Resolver('Singer')
export class SingerResolver {
	constructor(private readonly singerService: SingerService) {}

	@Query(() => TakeSingers)
	@GqlAuth(Role.ADMIN)
	async TakeSingers(@Args('data') data: TakeSingersInput) {
		return this.singerService.takeSingers(data)
	}

	@Mutation(() => BanSinger)
	@GqlAuth(Role.ADMIN)
	async BanSinger(@Args('id') id: string) {
		return this.singerService.banSinger(id)
	}
}
