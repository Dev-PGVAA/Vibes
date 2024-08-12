import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { GraphQLError } from 'graphql'
import { forgotPassword } from 'src/mails/forgotPassword'
import { PrismaService } from 'src/prisma.service'
import { SingerService } from 'src/singer/singer.service'
import { MailService } from 'src/utils/mail/mail.service'
import { checkIsHaveAgeLimit } from 'src/utils/validator/checkIsHaveAgeLimit'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UserService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly singerService: SingerService,
		private readonly mailService: MailService
	) {}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			}
		})
	}

	async getProfile(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id }
		})
		const isHaveAgeLimit = checkIsHaveAgeLimit(user.birthday)
		const typeofAuth = user.password ? 'DEFAULT' : 'SOCIAL'

		return {
			profile: {
				...user,
				isHaveAgeLimit,
				typeofAuth
			}
		}
	}

	async getUsers() {
		return this.prisma.user.findMany({
			select: {
				name: true,
				email: true,
				role: true,
				id: true,
				password: false
			}
		})
	}

	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email }
		})
	}

	async updateProfile(id: string, data: UpdateUserInput) {
		return this.prisma.user.update({
			where: { id },
			data,
			select: {
				name: true,
				email: true
			}
		})
	}

	async forgotPassword(email: string) {
		const user = await this.getByEmail(email)

		if (!user) throw new GraphQLError('User with this email does not exist!', null)

		const code = +crypto
			.getRandomValues(new Uint32Array(1))[0]
			.toString()
			.slice(0, 6)

		await this.mailService.sendMail({
			to: email,
			subject: 'Forgot password',
			html: forgotPassword({ code })
		})

		return { isSentEmail: true }
	}

	async register(data: CreateUserInput) {
		const oldUserByEmail = await this.getByEmail(data.email)

		if (oldUserByEmail)
			throw new GraphQLError('User with this email already exists!', null)

		return await this.prisma.user.create({
			data: {
				...data,
				email: data.email.toLowerCase().trim(),
				password: await hash(data.password),
				birthday: new Date(Date.now())
			}
		})
	}
}
