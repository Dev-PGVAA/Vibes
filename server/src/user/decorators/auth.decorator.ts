import { applyDecorators, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'
import { GqlAuthGuard } from '../guards/gql-auth.guard'
import { JwtAuthGuard } from '../guards/jwt.guard'
import {
	OnlyAdminAndSingerGuard,
	OnlyAdminGuard,
	OnlySingerGuard
} from '../guards/role.guard'

export const Auth = (role: Role = Role.USER) => {
	if (role === Role.ADMIN)
		return applyDecorators(UseGuards(JwtAuthGuard, OnlyAdminGuard))
	if (role === Role.SINGER)
		return applyDecorators(UseGuards(JwtAuthGuard, OnlySingerGuard))

	return applyDecorators(UseGuards(JwtAuthGuard))
}

export const GqlAuth = (role: Role | Role[] = Role.USER) => {
	if (role === Role.ADMIN)
		return applyDecorators(UseGuards(GqlAuthGuard, OnlyAdminGuard))

	if (role === Role.SINGER)
		return applyDecorators(UseGuards(GqlAuthGuard, OnlySingerGuard))

	if (
		Array.isArray(role) &&
		role.includes(Role.SINGER) &&
		role.includes(Role.ADMIN)
	)
		return applyDecorators(UseGuards(GqlAuthGuard, OnlyAdminAndSingerGuard))

	return applyDecorators(UseGuards(GqlAuthGuard))
}
