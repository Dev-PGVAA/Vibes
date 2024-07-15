import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/client'
import { GqlAuth } from 'src/user/decorators/auth.decorator'
import { CreateTrackInput, UpdateTrackInput } from './dto/actions-track.input'
import { DeleteTrack, Track } from './entities/track.entity'
import { TrackService } from './track.service'

@Resolver('Track')
export class TrackResolver {
	constructor(private readonly trackService: TrackService) {}

	@Mutation(() => Track)
	@GqlAuth(Role.SINGER)
	async CreateTrack(@Args('data') data: CreateTrackInput) {
		return this.trackService.createTrack(data)
	}

	@Query(() => [Track])
	async GetTracksByName(@Args('name') name: string) {
		return this.trackService.getTracksByName(name)
	}

	@Query(() => Track)
	async GetTrackById(@Args('id') id: string) {
		return this.trackService.getTrackById(id)
	}

	@Mutation(() => Track)
	@GqlAuth([Role.SINGER, Role.ADMIN])
	async UpdateTrack(@Args('data') data: UpdateTrackInput) {
		return this.trackService.updateTrack(data)
	}

	@Mutation(() => DeleteTrack)
	@GqlAuth([Role.SINGER, Role.ADMIN])
	async DeleteTrack(@Args('id') id: string) {
		return this.trackService.deleteTrack(id)
	}
}
