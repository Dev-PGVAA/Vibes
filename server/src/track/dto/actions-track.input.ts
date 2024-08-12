import { Field, InputType } from '@nestjs/graphql'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

@InputType()
export class CreateTrackInput {
	@Field()
	@IsString()
	name: string

	@Field()
	@IsNumber()
	duration: number

	@Field()
	@IsString()
	cover: string

	@Field()
	@IsString()
	audio: string

	@Field()
	@IsBoolean()
	isHaveAgeLimit: boolean

	@Field()
	@IsString()
	genreId: string

	@Field()
	@IsString()
	authorId: string
}

@InputType()
export class UpdateTrackInput {
	@Field()
	@IsString()
	id: string

	@Field({ nullable: true })
	@IsString()
	name?: string

	@Field({ nullable: true })
	@IsNumber()
	duration?: number

	@Field({ nullable: true })
	@IsString()
	cover?: string

	@Field({ nullable: true })
	@IsString()
	audio?: string

	@Field({ nullable: true })
	@IsBoolean()
	isHaveAgeLimit?: boolean

	@Field({ nullable: true })
	@IsString()
	genreId?: string

	@Field({ nullable: true })
	@IsString()
	authorId?: string
}
