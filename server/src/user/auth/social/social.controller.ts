import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { SocialService } from './social.service'

@Controller('auth')
export class SocialController {
	constructor(private readonly socialService: SocialService) {}

	// Google
	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth() {}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleAuthRedirect(@Req() req, @Res() res) {
		return this.socialService.googleLogin(req, res)
	}

	@Get('google/redirect')
	async googleAuthRedirectError(@Res() res, @Query('error') error) {}

	// Github
	@Get('github')
	@UseGuards(AuthGuard('github'))
	async githubAuth() {}

	@Get('github/redirect')
	@UseGuards(AuthGuard('github'))
	async githubAuthRedirect(@Req() req, @Res() res) {
		return this.socialService.githubLogin(req, res)
	}
}
