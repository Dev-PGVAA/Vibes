import { Field, InputType } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@InputType()
export class CreateGenreInput {
	@Field()
	@IsString()
	title: string

	@Field()
	@IsString()
	description: string
}

@InputType()
export class UpdateGenreInput {
	@Field()
	@IsString()
	id: string

	@Field({ nullable: true })
	@IsString()
	title?: string

	@Field({ nullable: true })
	@IsString()
	description?: string
}
