import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Singer {
	@Field()
	id: string

	@Field()
	name: string

	@Field()
	avatar: string
}

@ObjectType()
export class TakeSingers {
	@Field()
	isHasMore: boolean

	@Field(() => [Singer])
	items: Singer[]
}

@ObjectType()
export class BanSinger {
	@Field()
	isBan: boolean
}
