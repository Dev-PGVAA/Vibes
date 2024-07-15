import { ADMIN_PAGES } from '@/config/page-url.config'
import type { INavItem } from './private-navigation.interface'

export const AdminItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_PAGES.STATISTICS,
	},
	{
		title: 'Users',
		link: ADMIN_PAGES.USERS,
	},
	{
		title: 'Tracks',
		link: ADMIN_PAGES.TRACKS,
	},
	{
		title: 'Albums',
		link: ADMIN_PAGES.ALBUMS,
	},
	{
		title: 'Playlists',
		link: ADMIN_PAGES.PLAYLISTS,
	},
	{
		title: 'Authors',
		link: ADMIN_PAGES.AUTHORS,
	},
	{
		title: 'Genres',
		link: ADMIN_PAGES.GENRES,
	},
]
