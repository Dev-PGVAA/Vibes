import { UserRole } from '@/services/user/auth/auth.interface'

export interface IUser {
	id: number
	name: string
	email: string
	role: UserRole
	avatar: string
}

export interface IFormData extends Pick<IUser, 'email'> {
	name: string
	FirstName?: string
	LastName?: string
	password: string
}
