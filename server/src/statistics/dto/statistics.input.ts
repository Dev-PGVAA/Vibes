import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsOptional, IsString } from 'class-validator'

@InputType()
export class PaginationArgs {
	@Field()
	@IsNumber()
	@IsOptional()
	skip?: number

	@Field()
	@IsNumber()
	@IsOptional()
	take?: number
}

@InputType()
export class PaginationArgsWithSearchTerm extends PaginationArgs {
	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	searchTerm?: string
}