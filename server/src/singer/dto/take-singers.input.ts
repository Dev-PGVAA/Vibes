import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsString } from 'class-validator'

@InputType()
export class TakeSingersInput {
	@Field({ nullable: true })
	@IsString()
	name?: string

	@Field({ nullable: true })
	@IsString()
	genre?: string

	@Field()
	@IsNumber()
	take: number

	@Field()
	@IsNumber()
	skip: number
}
