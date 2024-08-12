import { FaDatabase } from 'react-icons/fa'
import { GoGraph, GoIssueTracks } from 'react-icons/go'
import { IoDiscSharp, IoMusicalNotes } from 'react-icons/io5'
import { LuListMusic } from 'react-icons/lu'
import { MdAdminPanelSettings, MdSpatialAudioOff } from 'react-icons/md'
import { PiUsersFill } from 'react-icons/pi'
import { SiAirplayaudio } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'

import {
	ADMIN_PAGES,
	PUBLIC_PAGES,
	SINGER_PAGES
} from '@/config/page-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: TiHome,
		link: PUBLIC_PAGES.HOME,
		name: 'Home'
	},
	{
		icon: LuListMusic,
		link: PUBLIC_PAGES.COLLECTIONS,
		name: 'Collections'
	},
	{
		icon: IoDiscSharp,
		link: PUBLIC_PAGES.ALBUMS,
		name: 'Albums'
	},
	{
		icon: IoMusicalNotes,
		link: PUBLIC_PAGES.SONGS,
		name: 'Songs'
	},
	{
		icon: MdSpatialAudioOff,
		link: PUBLIC_PAGES.ARTIST,
		name: 'Artist'
	}
]
export const MENU_ADMIN: IMenuItem[] = [
	{
		icon: MdAdminPanelSettings,
		link: ADMIN_PAGES.HOME,
		name: 'Admin panel',
		nested: [
			{
				icon: GoGraph,
				link: ADMIN_PAGES.HOME,
				name: 'Statistics'
			},
			{
				icon: PiUsersFill,
				link: ADMIN_PAGES.USERS,
				name: 'Users'
			},
			{
				icon: GoIssueTracks,
				link: ADMIN_PAGES.TRACKS,
				name: 'Tracks'
			},
			{
				icon: IoDiscSharp,
				link: ADMIN_PAGES.ALBUMS,
				name: 'Albums'
			},
			{
				icon: LuListMusic,
				link: ADMIN_PAGES.PLAYLISTS,
				name: 'Playlists'
			},
			{
				icon: MdSpatialAudioOff,
				link: ADMIN_PAGES.AUTHORS,
				name: 'Authors'
			},
			{
				icon: FaDatabase,
				link: ADMIN_PAGES.GENRES,
				name: 'Genres'
			}
		]
	},
	...MENU
]
export const MENU_SINGER: IMenuItem[] = [
	{
		icon: SiAirplayaudio,
		link: SINGER_PAGES.HOME,
		name: 'Singer panel'
	},
	...MENU
]
