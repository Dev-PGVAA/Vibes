import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SingerResolver } from './singer.resolver'
import { SingerService } from './singer.service'

@Module({
	providers: [SingerResolver, SingerService, PrismaService],
	exports: [SingerService]
})
export class SingerModule {}
