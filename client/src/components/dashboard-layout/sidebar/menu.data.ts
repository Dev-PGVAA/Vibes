import {
	ADMIN_PAGES,
	PUBLIC_PAGES,
	SINGER_PAGES,
} from '@/config/page-url.config'

import { GoGraph } from 'react-icons/go'
import { IoDiscSharp, IoMusicalNotes } from 'react-icons/io5'
import { LuListMusic } from 'react-icons/lu'
import { MdSpatialAudioOff } from 'react-icons/md'
import { SiAirplayaudio } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'
import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: TiHome,
		link: PUBLIC_PAGES.HOME,
		name: 'Home',
	},
	{
		icon: LuListMusic,
		link: PUBLIC_PAGES.COLLECTIONS,
		name: 'Collections',
	},
	{
		icon: IoDiscSharp,
		link: PUBLIC_PAGES.ALBUMS,
		name: 'Albums',
	},
	{
		icon: IoMusicalNotes,
		link: PUBLIC_PAGES.SONGS,
		name: 'Songs',
	},
	{
		icon: MdSpatialAudioOff,
		link: PUBLIC_PAGES.ARTIST,
		name: 'Artist',
	},
]
export const MENU_ADMIN: IMenuItem[] = [
	{
		icon: GoGraph,
		link: ADMIN_PAGES.HOME,
		name: 'Admin panel',
	},
	...MENU,
]
export const MENU_SINGER: IMenuItem[] = [
	{
		icon: SiAirplayaudio,
		link: SINGER_PAGES.HOME,
		name: 'Singer panel',
	},
	...MENU,
]
