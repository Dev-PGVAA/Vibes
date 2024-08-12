import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as fs from 'fs'
import { GraphQLError } from 'graphql'
import { AppModule } from './app.module'

async function bootstrap() {
	const httpsOptions = {
		key: fs.readFileSync('./src/certificates/key.pem'),
		cert: fs.readFileSync('./src/certificates/cert.pem')
	}

	const app = await NestFactory.create(AppModule, {
		httpsOptions
	})

	// const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.useGlobalPipes(
		new ValidationPipe({
			exceptionFactory: errors => {
				const result = errors
					.map(({ constraints }) => Object.values(constraints).join(', '))
					.join(', ')
				throw new GraphQLError(result)
			},
			stopAtFirstError: true
		})
	)
	app.use(cookieParser())
	app.enableCors({
		origin: ['https://localhost:3000', process.env.CLIENT_URL],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	await app.listen(4200)
}
bootstrap()
