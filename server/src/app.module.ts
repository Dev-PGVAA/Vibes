import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { GenreModule } from './genre/genre.module'
import { MediaModule } from './media/media.module'
import { SingerModule } from './singer/singer.module'
import { StatisticsModule } from './statistics/statistics.module'
import { TrackModule } from './track/track.module'
import { UserModule } from './user/user.module'
import { MailModule } from './utils/mail/mail.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: process.env.NODE_ENV === 'development',
			autoSchemaFile: 'src/graphql/schema.gql',
			context: ({ req, res }) => ({ req, res })
		}),
		UserModule,
		MediaModule,
		SingerModule,
		TrackModule,
		GenreModule,
		StatisticsModule,
		MailModule
	]
})
export class AppModule {}
