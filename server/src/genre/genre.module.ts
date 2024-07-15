import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { GenreResolver } from './genre.resolver'
import { GenreService } from './genre.service'

@Module({
	providers: [GenreResolver, GenreService, PrismaService]
})
export class GenreModule {}
