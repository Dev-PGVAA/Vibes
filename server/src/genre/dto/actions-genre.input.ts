import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateGenreInput {
	@Field()
	title: string

	@Field()
	description: string
}

@InputType()
export class UpdateGenreInput {
	@Field()
	id: string

	@Field({ nullable: true })
	title: string

	@Field({ nullable: true })
	description: string
}
