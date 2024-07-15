'use server'

import { verify } from 'hcaptcha'

const secretKey = process.env.CAPTCHA_SECRET_KEY || ''

export async function checkServerCaptcha(captcha?: any) {
	let isSuccess = false
	let error: string | null = null

	try {
		const token = captcha?.toString() || null

		if (!token) return (error = 'Invalid captcha')
		const { success } = await verify(secretKey, token)

		if (!success) return (error = 'Invalid captcha')
		return (isSuccess = true)
	} catch (error) {
		return (error = 'Invalid captcha')
	}
}
