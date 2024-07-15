import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Genre {
	@Field()
	id: string

	@Field()
	title: string

	@Field()
	description: string

	@Field()
	slug: string
}

@ObjectType()
export class DeleteGenre {
	@Field()
	isDeleted: boolean
}
