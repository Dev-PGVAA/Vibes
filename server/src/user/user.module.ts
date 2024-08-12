import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { PrismaService } from 'src/prisma.service'
import { SingerModule } from 'src/singer/singer.module'
import { MailModule } from 'src/utils/mail/mail.module'
import { AuthResolver } from './auth/auth.resolver'
import { AuthService } from './auth/auth.service'
import { SocialController } from './auth/social/social.controller'
import { SocialService } from './auth/social/social.service'
import { GoogleStrategy } from './auth/social/strategies/google.strategy'
import { JwtStrategy } from './guards/strategies/jwt.strategy'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
	exports: [UserModule],
	controllers: [SocialController],
	providers: [
		UserResolver,
		UserService,
		AuthResolver,
		AuthService,
		PrismaService,
		JwtStrategy,
		SocialService,
		GoogleStrategy,
	],
	imports: [
		ConfigModule,
		SingerModule,
		MailModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	]
})
export class UserModule {}
