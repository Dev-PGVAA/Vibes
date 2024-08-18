import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateSingerInput } from './dto/create-singer.input'

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

	async banSinger(id: string) {
		const singer = await this.prisma.singer.findUnique({ where: { id } })
		if (!singer) return { isBan: false }

		return this.prisma.singer.delete({ where: { id } }).then(() => {
			return { isBan: true }
		})
	}
}
