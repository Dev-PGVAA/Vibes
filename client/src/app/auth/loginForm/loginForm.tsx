'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Captcha from '@/components/ui/captcha/Captcha'
import { PUBLIC_PAGES } from '@/config/page-url.config'
import authService from '@/services/user/auth/auth.service'
import type { IFormData } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { toast } from 'sonner'
import styles from '../auth.module.scss'

export function LoginForm({
	redirectOnSuccess,
}: {
	redirectOnSuccess: string | null
}) {
	const [isShowPassword, setIsShowPassword] = useState(false)
	const [errorMsg, setErrorMsg] = useState<string | null>(null)
	const { register, handleSubmit, reset, getValues } = useForm<IFormData>()
	const { replace } = useRouter()

	const [captchaToken, setCaptchaToken] = useState<string | null>(null)

	const onCaptchaChange = (token: string) => setCaptchaToken(token)

	const { mutate, isPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.main('login', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			redirectOnSuccess
				? replace(redirectOnSuccess)
				: replace(PUBLIC_PAGES.HOME)
		},
		onError(error) {
			setErrorMsg((error as Error).message)
		},
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
		if (data.password.length < 6) {
			setErrorMsg('Password must be at least 6 characters!')
			return
		}
		if (!captchaToken) {
			setErrorMsg('Captcha is required!')
			return
		}
		mutate(data)
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						placeholder='E.g yourname@gmail.com'
						className={styles.input}
						onInput={() => setErrorMsg('')}
						{...register('email', {
							required: 'Email is required!',
						})}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type={isShowPassword ? 'text' : 'password'}
						placeholder='Enter your password'
						className={styles.input}
						minLength={8}
						onInput={() => setErrorMsg('')}
						{...register('password', {
							required: 'Password is required!',
						})}
					/>
					<i
						className={styles.eyeIcon}
						onClick={() => setIsShowPassword(!isShowPassword)}
					>
						{isShowPassword ? (
							<FaRegEye size={25} />
						) : (
							<FaRegEyeSlash size={25} />
						)}
					</i>
					<p>Must be at least 8 characters</p>
				</div>
				<h5 className='text-red-600 my-2 text-start text-sm max-w-[19.125rem] truncate'>
					{errorMsg}
				</h5>
				<Captcha
					onToken={onCaptchaChange}
					show={!!Object.values(getValues()).filter(Boolean).length}
				/>
				<button disabled={isPending} className=' disabled:bg-[#1F57DF]'>
					Sign in
				</button>
			</form>
			<button className={styles.forgotPassword}>Forgot Password</button>
		</>
	)
}
