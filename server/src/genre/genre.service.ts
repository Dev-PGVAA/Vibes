import { Injectable } from '@nestjs/common'
import { GraphQLError } from 'graphql'
import { PrismaService } from 'src/prisma.service'
import { slugify } from 'src/utils/slugify/slugify'
import { CreateGenreInput, UpdateGenreInput } from './dto/actions-genre.input'

@Injectable()
export class GenreService {
	constructor(private readonly prisma: PrismaService) {}

	async createGenre(data: CreateGenreInput) {
		const oldGenre = await this.getBySlug(slugify(data.title))
		if (oldGenre) throw new GraphQLError('Genre with this title already exist')

		return this.prisma.genre.create({
			data: { ...data, slug: slugify(data.title) }
		})
	}

	async getAll() {
		return this.prisma.genre.findMany({
			where: { title: { contains: '' } }
		})
	}

	async getBySlug(slug: string) {
		return this.prisma.genre.findUnique({
			where: { slug: slug }
		})
	}

	async getById(id: string) {
		return this.prisma.genre.findUnique({
			where: { id: id }
		})
	}

	async updateGenre(data: UpdateGenreInput) {
		return this.prisma.genre.update({
			where: { id: data.id },
			data: { ...data }
		})
	}

	async deleteGenre(id: string) {
		const isDeleted = await this.prisma.genre.delete({
			where: { id: id }
		})
		return { isDeleted: !!isDeleted }
	}
}
