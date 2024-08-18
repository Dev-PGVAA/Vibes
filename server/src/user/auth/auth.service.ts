import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Role } from '@prisma/client'
import { verify } from 'argon2'
import { Response } from 'express'
import { GraphQLError } from 'graphql'
import { MailService } from 'src/utils/mail/mail.service'
import { checkIsHaveAgeLimit } from 'src/utils/validator/checkIsHaveAgeLimit'
import { CreateUserInput } from '../dto/create-user.input'
import { LoginUserInput } from '../dto/login-user.input'
import { UserService } from '../user.service'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refreshToken'

	constructor(
		private jwt: JwtService,
		private userService: UserService,
		private mailService: MailService
	) {}

	async getProfile(id: string) {
		return this.userService.getById(id)
	}

	async login(data: LoginUserInput) {
		const user = await this.validateUser(data)
		const tokens = await this.issueTokens(user.id, user.role)

		const isHaveAgeLimit = checkIsHaveAgeLimit(user.birthday)

		const typeofAuth = user.password ? 'DEFAULT' : 'SOCIAL'

		return {
			user: {
				...user,
				isHaveAgeLimit,
				typeofAuth
			},
			...tokens
		}
	}

	async register(data: CreateUserInput) {
		const oldUser = await this.userService.getByEmail(data.email)

		if (oldUser) throw new GraphQLError('User already exists')

		let user = await this.userService.register(data)
		const tokens = await this.issueTokens(user.id, user.role)

		const isHaveAgeLimit = checkIsHaveAgeLimit(user.birthday)

		const typeofAuth = user.password ? 'DEFAULT' : 'SOCIAL'

		return {
			user: {
				...user,
				isHaveAgeLimit,
				typeofAuth
			},
			...tokens
		}
	}

	async getNewTokens(refreshToken: string) {
		if (!refreshToken) throw new GraphQLError('Invalid refresh token')

		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) throw new GraphQLError('Invalid refresh token')

		const user = await this.userService.getById(result.id)

		const tokens = await this.issueTokens(user.id, user.role)

		return {
			...user,
			...tokens
		}
	}

	async issueTokens(userId: string, role?: Role) {
		const data = { id: userId, role }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return { accessToken, refreshToken }
	}

	private async validateUser(data: LoginUserInput) {
		// const user = await this.userService.getByEmail(data.email)

		// if (!user) throw new GraphQLError('Email or password invalid')

		// const isValid = await verify(user.password, data.password)

		// if (!isValid) {
		// 	this.mailService.sendMail({
		// 		to: data.email,
		// 		subject: 'Login failed',
		// 		// TODO: Add more details to the email
		// 		html: `<h1>Someone tried to login to your account</h1>`
		// 	})
		// 	throw new GraphQLError(`Email or password invalid`)
		// }

		// this.mailService.sendMail({
		// 	to: data.email,
		// 	subject: 'Login success',
		// 	// TODO: Add more details to the email
		// 	html: `<h1>Someone success login to your account</h1>`
		// })

		// return user
		const user = await this.userService.getByEmail(data.email)

		if (!user) throw new GraphQLError('User not found')

		const isValid = await verify(user.password, data.password)

		if (!isValid) throw new GraphQLError('Invalid password')

		return user
	}

	addRefreshTokenToResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: process.env.DOMAIN,
			expires: expiresIn,
			secure: true,
			sameSite: 'strict'
		})
	}

	removeRefreshTokenFromResponse(res: Response) {
		res.cookie(this.REFRESH_TOKEN_NAME, '', {
			httpOnly: true,
			domain: process.env.DOMAIN,
			expires: new Date(0),
			secure: true,
			sameSite: 'strict'
		})
	}
}
