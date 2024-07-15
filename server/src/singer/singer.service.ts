import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateSingerInput } from './dto/create-singer.input'
import { TakeSingersInput } from './dto/take-singers.input'

@Injectable()
export class SingerService {
	constructor(private readonly prisma: PrismaService) {}

	async createSinger(data: CreateSingerInput) {
		return this.prisma.singer.create({
			data: {
				name: data.name,
				avatar: data.avatar,
				genre: {
					connect: {
						id: data.genreId
					}
				}
			}
		})
	}

	async takeSingers(data: TakeSingersInput) {
		const isHasMore = (await this.prisma.singer.count()) > data.take
		const items = await this.prisma.singer.findMany({
			where: {
				name: { contains: data.name ? data.name : '' }
			},
			take: data.take,
			skip: data.skip
		})

		return { isHasMore, items }
	}

	async banSinger(id: string) {
		const singer = await this.prisma.singer.findUnique({ where: { id } })
		if (!singer) return { isBan: false }

		return this.prisma.singer.delete({ where: { id } }).then(() => {
			return { isBan: true }
		})
	}
}
