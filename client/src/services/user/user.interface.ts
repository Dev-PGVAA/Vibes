import type { IUser } from './auth/auth.types'

export interface IUserResponse {
	GetProfile: {
		profile: IUser
	}
}
