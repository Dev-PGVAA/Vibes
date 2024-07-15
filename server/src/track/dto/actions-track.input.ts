import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateTrackInput {
	@Field()
	name: string

	@Field()
	duration: number

	@Field()
	cover: string

	@Field()
	audio: string

	@Field()
	isHaveAgeLimit: boolean

	@Field()
	genreId: string

	@Field()
	authorId: string
}

@InputType()
export class UpdateTrackInput {
	@Field()
	id: string

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	duration: number

	@Field({ nullable: true })
	cover: string

	@Field({ nullable: true })
	audio: string

	@Field({ nullable: true })
	isHaveAgeLimit: boolean

	@Field({ nullable: true })
	genreId: string

	@Field({ nullable: true })
	authorId: string
}
