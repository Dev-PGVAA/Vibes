import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'src/user/entities/user.entity'

@ObjectType()
export class StatisticsCountryRatings {
	@Field()
	country: string

	@Field()
	count: number	
	
	@Field()
	icon: string
}

@ObjectType()
export class StatisticsSexRatings {
	@Field()
	sex: string

	@Field()
	count: number
}

@ObjectType()
export class UsersRes {
	@Field(type => [User])
	items: User[]

	@Field()
	isHasMore: boolean
}

@ObjectType()
export class ActiveUsers {
  @Field()
	month: string

  @Field()
  year: number  
	
	@Field()
	count: number
}

@ObjectType()
export class RegisteredUsers {
  @Field()
	month: string

  @Field()
  year: number  
	
	@Field()
	count: number
}

@ObjectType()
export class UserStatistics {
  @Field(type => [RegisteredUsers])
  registrations: RegisteredUsers[]  
	
	@Field(type => [ActiveUsers])
  activeUsers: ActiveUsers[]
}
