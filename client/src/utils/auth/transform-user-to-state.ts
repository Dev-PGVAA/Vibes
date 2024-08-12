import {
	type TProtectUserData,
	UserRole
} from '@/services/user/auth/auth.interface'

export type TUserDataState = {
	id: number
	role: UserRole
	isAdmin: boolean
	isLoggedIn: boolean
}

export const transformUserToState = (
	user: TProtectUserData
): TUserDataState | null => {
	return {
		...user,
		isAdmin: user.role === UserRole.Admin,
		isLoggedIn: true
	}
}
