export interface IUser {
	name: string
	email: string
	avatar: string
	role: string
}

export interface IAuthResponse {
	Login: {
		accessToken: string
		user: IUser
	}
	Register: {
		accessToken: string
		user: IUser
	}
	GetNewTokens: {
		accessToken: string
	}
}

export enum UserRole {
	User = 'USER',
	Premium = 'PREMIUM',
	Singer = 'SINGER',
	Support = 'SUPPORT',
	Admin = 'ADMIN'
}

export interface ITokenInside {
	id: number
	role: UserRole
	iat: number
	exp: number
}

export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>
