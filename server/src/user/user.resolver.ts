import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GqlAuth } from './decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorator'
import { UpdateUserInput } from './dto/update-user.input'
import {
	ForgotPasswordResponse,
	GetProfileResponse,
	User
} from './entities/user.entity'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => GetProfileResponse)
	@GqlAuth()
	async GetProfile(@CurrentUser('id') id: string) {
		return this.userService.getProfile(id)
	}

	@Mutation(() => User)
	@GqlAuth()
	async UpdateProfile(
		@CurrentUser('id') id: string,
		@Args('data') data: UpdateUserInput
	) {
		return this.userService.updateProfile(id, data)
	}

	@Mutation(() => ForgotPasswordResponse)
	async ForgotPassword(@Args('email') email: string) {
		return this.userService.forgotPassword(email)
	}
}
