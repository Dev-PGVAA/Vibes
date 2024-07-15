import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'

import { PrismaService } from 'src/prisma.service'
import { FilesController } from './files.controller'
import { FilesService } from './files.service'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		})
	],
	providers: [FilesService, PrismaService],
	controllers: [FilesController]
})
export class FilesModule {}
