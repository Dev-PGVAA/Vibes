import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { GqlContext } from 'src/app.interface'
import { CreateUserInput } from '../dto/create-user.input'
import { LoginUserInput } from '../dto/login-user.input'
import { AuthService } from './auth.service'
import { AuthReturn } from './dto/auth.interface'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => AuthReturn)
	async Login(
		@Args('data') data: LoginUserInput,
		@Context() { res }: GqlContext
	) {
		const { refreshToken, ...response } = await this.authService.login(data)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@Mutation(() => AuthReturn)
	async Register(
		@Args('data') data: CreateUserInput,
		@Context() { res }: GqlContext
	) {
		const { refreshToken, ...response } = await this.authService.register(data)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@Mutation(() => AuthReturn)
	async GetNewTokens(@Context() { req, res }: GqlContext) {
		const refreshTokenFromCookies =
			req.cookies[this.authService.REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.authService.removeRefreshTokenFromResponse(res)
			throw new GraphQLError('Refresh token not passed')
		}

		const { refreshToken, ...response } = await this.authService.getNewTokens(
			refreshTokenFromCookies
		)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@Mutation(() => Boolean)
	async Logout(@Context() { res }: GqlContext) {
		this.authService.removeRefreshTokenFromResponse(res)

		return true
	}
}
