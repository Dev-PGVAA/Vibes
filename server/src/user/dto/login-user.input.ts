import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsString, MinLength } from 'class-validator'

@InputType()
export class LoginUserInput {
	@Field()
	@IsString()
	@IsEmail()
	email: string

	@Field()
	@IsString()
	@MinLength(8, {
		message: 'Password must be at least 8 characters'
	})
	password: string
}
