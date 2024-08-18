import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from '@prisma/client'
import { GqlAuth } from 'src/user/decorators/auth.decorator'
import { CreateGenreInput, UpdateGenreInput } from './dto/actions-genre.input'
import { DeleteGenre, Genre } from './entities/genre.entity'
import { GenreService } from './genre.service'

@Resolver('Genre')
export class GenreResolver {
	constructor(private readonly genreService: GenreService) {}

	@Mutation(() => Genre)
	@GqlAuth(Role.ADMIN)
	async CreateGenre(@Args('data') data: CreateGenreInput) {
		return this.genreService.createGenre(data)
	}

	@Query(() => [Genre])
	async GetAllGenres() {
		return this.genreService.getAll()
	}

	@Query(() => Genre)
	async GetGenresBySlug(@Args('slug') slug: string) {
		return this.genreService.getBySlug(slug)
	}

	@Query(() => Genre)
	@GqlAuth(Role.ADMIN)
	async GetGenreById(@Args('id') id: string) {
		return this.genreService.getById(id)
	}

	@Mutation(() => Genre)
	@GqlAuth(Role.ADMIN)
	async UpdateGenre(@Args('data') data: UpdateGenreInput) {
		return this.genreService.updateGenre(data)
	}

	@Mutation(() => DeleteGenre)
	@GqlAuth(Role.ADMIN)
	async DeleteGenre(@Args('id') id: string) {
		return this.genreService.deleteGenre(id)
	}
}
