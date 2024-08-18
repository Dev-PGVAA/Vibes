import {
	CanActivate,
	ExecutionContext,
	ForbiddenException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Role, User } from '@prisma/client'

export class OnlyAdminGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext().req.user as User

		if (user.role !== Role.ADMIN)
			throw new ForbiddenException('You are not admin!')

		return true
	}
}
export class OnlySingerGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext().req.user as User

		if (user.role !== Role.SINGER)
			throw new ForbiddenException('You are not singer!')

		return true
	}
}

export class OnlyAdminAndSingerGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext().req.user as User

		if (user.role !== Role.SINGER && user.role !== Role.ADMIN)
			throw new ForbiddenException('You are not singer or admin!')

		return true
	}
}
