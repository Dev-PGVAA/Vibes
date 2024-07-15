import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Track {
	@Field()
	id: string

	@Field()
	name: string

	@Field()
	duration: string

	@Field()
	cover: string

	@Field()
	audio: string

	@Field()
	genreId: string

	@Field()
	isHaveAgeLimit: boolean

	@Field()
	author: string

	@Field()
	albom?: string
}

@ObjectType()
export class DeleteTrack {
	@Field()
	isDeleted: boolean
}
