import type { IconType } from 'react-icons'
import { FaUserLarge } from 'react-icons/fa6'
import { MdOutlineLogout } from 'react-icons/md'
import { PiGearFineBold } from 'react-icons/pi'

export interface IHeadingDropdown {
	name: string
	link: string
	icon: IconType
}

export const HEADING_DROPDOWN: IHeadingDropdown[] = [
	{
		name: 'Profile',
		link: '#',
		icon: FaUserLarge
	},
	{
		name: 'Settings',
		link: '#',
		icon: PiGearFineBold
	},
	{
		name: 'Logout',
		link: '#',
		icon: MdOutlineLogout
	}
]
