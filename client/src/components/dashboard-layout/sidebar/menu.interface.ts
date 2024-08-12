import type { IconType } from 'react-icons'

export interface IMenuItem {
	link: string
	name: string
	icon: IconType
	nested?: IMenuItem[]
}
