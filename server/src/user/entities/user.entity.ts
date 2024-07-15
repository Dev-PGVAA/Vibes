import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
	@Field()
	id: string

	@Field()
	avatar: string

	@Field()
	name: string

	@Field()
	email: string

	@Field()
	password: string

	@Field()
	isHaveAgeLimit: boolean

	@Field()
	role: string

	@Field()
	typeofAuth: 'DEFAULT' | 'SOCIAL'
}

@ObjectType()
export class GetProfileResponse {
	@Field()
	profile: User
}

@ObjectType()
export class ForgotPasswordResponse {
	@Field()
	isSentEmail: boolean
}
