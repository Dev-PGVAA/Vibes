import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Role } from '@prisma/client'
import { GqlAuth } from 'src/user/decorators/auth.decorator'
import { BanSinger } from './entities/track.entity'
import { SingerService } from './singer.service'

@Resolver('Singer')
export class SingerResolver {
	constructor(private readonly singerService: SingerService) {}


	@Mutation(() => BanSinger)
	@GqlAuth(Role.ADMIN)
	async BanSinger(@Args('id') id: string) {
		return this.singerService.banSinger(id)
	}
}
