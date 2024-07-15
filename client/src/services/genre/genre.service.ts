import {
	CreateGenreDocument,
	DeleteGenreDocument,
	GetAllGenresDocument,
	GetGenresBySlugDocument,
	UpdateGenreDocument,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo-client'
import { getAccessToken } from '../user/auth/auth.helper'
import type { ICreateEditGenre, IGenreResponse } from './genre.interface'

class GenreService {
	async getAllGenres() {
		const response = await apolloClient.query<IGenreResponse>({
			query: GetAllGenresDocument,
			fetchPolicy: 'network-only',
		})

		return { data: response.data.GetAllGenres }
	}

	async getGenresBySlug(slug: string) {
		const response = await apolloClient.query<IGenreResponse>({
			query: GetGenresBySlugDocument,
			variables: { slug },
		})

		return { data: response.data.GetGenresBySlug }
	}

	async createGenre(data: ICreateEditGenre) {
		const response = await apolloClient.mutate<IGenreResponse>({
			mutation: CreateGenreDocument,
			variables: { data },
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
		})

		return { data: response.data?.CreateGenre }
	}

	async updateGenre(data: ICreateEditGenre) {
		const response = await apolloClient.mutate<IGenreResponse>({
			mutation: UpdateGenreDocument,
			variables: { data },
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
		})

		return { data: response.data?.UpdateGenre }
	}

	async deleteGenre(id: string) {
		const response = await apolloClient.mutate<IGenreResponse>({
			mutation: DeleteGenreDocument,
			variables: { id },
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
		})

		return { data: response.data?.DeleteGenre }
	}
}

export default new GenreService()
