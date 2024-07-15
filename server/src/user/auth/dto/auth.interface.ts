import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'src/user/entities/user.entity'

@ObjectType()
export class AuthReturn {
	@Field(() => User)
	user: User

	@Field()
	accessToken: string

	@Field()
	refreshToken: string
}
