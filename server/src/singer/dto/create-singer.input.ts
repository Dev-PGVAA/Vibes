import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSingerInput {
	@Field()
	name: string

	@Field()
	avatar: string

	@Field()
	genreId: string
}
