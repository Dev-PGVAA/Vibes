import { Field, InputType } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class CreateSingerInput {
	@Field()
	@IsString()
	name: string

	@Field()
	@IsString()
	avatar: string

	@Field()
	@IsString()
	genreId: string
}
