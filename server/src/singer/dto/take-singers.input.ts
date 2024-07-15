import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class TakeSingersInput {
	@Field({ nullable: true })
	name?: string

	@Field({ nullable: true })
	genre?: string

	@Field()
	take: number

	@Field()
	skip: number
}
