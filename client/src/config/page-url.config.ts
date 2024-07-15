class PUBLIC {
	HOME = '/home'
	COLLECTIONS = '/collections'
	ALBUMS = '/albums'
	SONGS = '/songs'
	ARTIST = '/artist'
	SETTINGS = {
		HOME: '/settings',
		SECURITY: '/settings/security',
		APPEARANCE: '/settings/appearance',
		FEEDBACK: '/settings/feedback',
	}
	AUTH = '/auth'
}

class ADMIN {
	private root = '/admin-panel'

	HOME = this.root
	STATISTICS = `${this.root}/statistics`
	USERS = `${this.root}/users`
	TRACKS = `${this.root}/tracks`
	ALBUMS = `${this.root}/albums`
	PLAYLISTS = `${this.root}/playlists`
	AUTHORS = `${this.root}/authors`
	GENRES = `${this.root}/genres`
}

class SINGER {
	private root = '/singer-panel'

	HOME = this.root
	CREATE_TRACK = `${this.root}/create-track`
}

class Server {
	private root = 'https://localhost:4200/api'

	GOOGLE_AUTH = `${this.root}/auth/google`
	GITHUB_AUTH = `${this.root}/auth/github`
}

export const PUBLIC_PAGES = new PUBLIC()
export const ADMIN_PAGES = new ADMIN()
export const SINGER_PAGES = new SINGER()
export const SERVER = new Server()
