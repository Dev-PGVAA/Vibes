import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TrackResolver } from './track.resolver'
import { TrackService } from './track.service'

@Module({
	providers: [TrackResolver, TrackService, PrismaService]
})
export class TrackModule {}
