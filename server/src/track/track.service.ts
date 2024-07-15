import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateTrackInput } from './dto/actions-track.input'

@Injectable()
export class TrackService {
	constructor(private readonly prisma: PrismaService) {}

	async createTrack(data: CreateTrackInput) {
		return this.prisma.track.create({
			data: {
				name: data.name,
				duration: data.duration,
				cover: data.cover,
				audio: data.audio,
				genre: {
					connect: {
						id: data.genreId
					}
				},
				isHaveAgeLimit: data.isHaveAgeLimit,
				author: {
					connect: {
						id: data.authorId
					}
				}
			}
		})
	}

	async getTracksByName(name: string) {
		const tracks = await this.prisma.track.findMany({
			where: { name: { contains: name } },
			take: 15
		})

		const authors = this.prisma.$transaction(
			tracks.map(track => {
				return this.prisma.singer.findUnique({
					where: { id: track.authorId },
					select: { name: true }
				})
			})
		)

		return Promise.all([tracks, authors]).then(([tracks, authors]) => {
			return tracks.map((track, index) => {
				return {
					...track,
					author: authors[index].name
				}
			})
		})
	}

	async getTrackById(id: string) {
		const track = await this.prisma.track.findUnique({
			where: { id: id }
		})

		const author = await this.prisma.singer.findUnique({
			where: { id: track.authorId },
			select: { name: true }
		})

		return {
			...track,
			author: author.name
		}
	}

	async updateTrack(data: any) {
		return this.prisma.track.update({
			where: { id: data.id },
			data: { ...data }
		})
	}

	async deleteTrack(id: string) {
		const isDeleted = await this.prisma.track.delete({
			where: { id: id }
		})
		return { isDeleted: !!isDeleted }
	}
}
