import {
	ADMIN_PAGES,
	PUBLIC_PAGES,
	SINGER_PAGES,
} from '@/config/page-url.config'
import { usePathname } from 'next/navigation'

export const countMT = (role: 'USER' | 'ADMIN' | 'SINGER' | undefined) => {
	const pathname = usePathname()

	switch (role) {
		case 'ADMIN':
			switch (true) {
				case pathname.includes(ADMIN_PAGES.HOME):
					return 'mt-2'
				case pathname === PUBLIC_PAGES.HOME:
					return 'mt-[91px]'
				case pathname === PUBLIC_PAGES.COLLECTIONS:
					return 'mt-[140px]'
				case pathname === PUBLIC_PAGES.ALBUMS:
					return 'mt-[190px]'
				case pathname === PUBLIC_PAGES.SONGS:
					return 'mt-[240px]'
				case pathname === PUBLIC_PAGES.ARTIST:
					return 'mt-[289px]'
			}
		case 'SINGER':
			switch (true) {
				case pathname.includes(SINGER_PAGES.HOME):
					return 'mt-2'
				case pathname === PUBLIC_PAGES.HOME:
					return 'mt-[91px]'
				case pathname === PUBLIC_PAGES.COLLECTIONS:
					return 'mt-[140px]'
				case pathname === PUBLIC_PAGES.ALBUMS:
					return 'mt-[190px]'
				case pathname === PUBLIC_PAGES.SONGS:
					return 'mt-[240px]'
				case pathname === PUBLIC_PAGES.ARTIST:
					return 'mt-[289px]'
			}
		case 'USER':
			switch (pathname) {
				case PUBLIC_PAGES.HOME:
					return 'mt-2'
				case PUBLIC_PAGES.COLLECTIONS:
					return 'mt-[58px]'
				case PUBLIC_PAGES.ALBUMS:
					return 'mt-[107px]'
				case PUBLIC_PAGES.SONGS:
					return 'mt-[157px]'
				case PUBLIC_PAGES.ARTIST:
					return 'mt-[206px]'
			}
		default:
			return 'hidden'
	}
}
