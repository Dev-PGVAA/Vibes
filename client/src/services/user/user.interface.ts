import { IUser } from '@/types/auth.types'

export interface IUserResponse {
	GetProfile: {
		profile: IUser
	}
}
