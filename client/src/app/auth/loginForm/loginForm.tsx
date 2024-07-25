'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Captcha from '@/components/ui/captcha/Captcha'

import { LoginDocument } from '@/__generated__/output'
import { PUBLIC_PAGES } from '@/config/page-url.config'
import { saveTokenStorage } from '@/services/user/auth/auth.helper'
import type { IAuthResponse } from '@/services/user/auth/auth.interface'
import type { IFormData } from '@/services/user/auth/auth.types'
import { useMutation } from '@apollo/client'
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

	const [token, setToken] = useState<string | undefined>()

	const [mutate, { loading: isPending, error, data }] =
		useMutation<IAuthResponse>(LoginDocument, {
			onError(error) {
				setErrorMsg((error as Error).message)
			},
			onCompleted() {
				if (!error) {
					if (data?.Login.accessToken) saveTokenStorage(data.Login.accessToken)
					toast.success('Successfully login!')
					reset()
					redirectOnSuccess
						? replace(redirectOnSuccess)
						: replace(PUBLIC_PAGES.HOME)
				}
			},
		})

	const onSubmit: SubmitHandler<IFormData> = data => {
		if (data.password.length < 6) {
			setErrorMsg('Password must be at least 6 characters!')
			return
		}
		if (!token && process.env.NEXT_PUBLIC_NODE_ENV !== 'development') {
			setErrorMsg('Captcha is required!')
			return
		}
		mutate({ variables: { data } })
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
				<Captcha
					setToken={setToken}
					show={
						!!Object.values(getValues()).filter(Boolean).length &&
						process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
					}
				/>
				<h5 className='text-red-600 my-2 text-start text-sm max-w-[19.125rem] truncate'>
					{errorMsg}
				</h5>
				<button disabled={isPending} className=' disabled:bg-[#1F57DF]'>
					Sign in
				</button>
			</form>
			<button className={styles.forgotPassword}>Forgot Password</button>
		</>
	)
}
