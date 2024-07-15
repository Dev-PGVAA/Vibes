export interface IGenre {
	id: string
	title: string
	slug: string
	description: string
}

export type TDeleteGenre = {
	isDeleted: boolean
}

export interface IGenreResponse {
	GetAllGenres: IGenre[]
	GetGenresBySlug: IGenre[]
	CreateGenre: IGenre
	UpdateGenre: IGenre
	DeleteGenre: TDeleteGenre
}

export interface ICreateEditGenre {
	id?: string
	title: string
	description: string
}
