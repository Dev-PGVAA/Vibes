'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Captcha from '@/components/ui/captcha/Captcha'
import { PUBLIC_PAGES } from '@/config/page-url.config'
import authService from '@/services/user/auth/auth.service'

import type { IFormData } from '@/services/user/auth/auth.types'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { toast } from 'sonner'
import styles from '../auth.module.scss'

export function SignUpForm({
	redirectOnSuccess,
}: {
	redirectOnSuccess: string | null
}) {
	const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<string | null>(null)
	const { replace } = useRouter()

	const [token, setToken] = useState<string | undefined>()

	const { register, handleSubmit, reset, getValues } = useForm<IFormData>()

	const { mutate, isPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.main('register', data),
		onSuccess() {
			toast.success('Successfully sign up!')
			reset()
			redirectOnSuccess
				? replace(redirectOnSuccess)
				: replace(PUBLIC_PAGES.HOME)
		},
		onError(error) {
			setErrorMsg((error as Error).message)
		},
	})

	const onSubmit: SubmitHandler<IFormData> = async data => {
		if (data.password.length < 6) {
			setErrorMsg('Password must be at least 6 characters!')
			return
		}
		if (!token && process.env.NEXT_PUBLIC_NODE_ENV !== 'development') {
			setErrorMsg('Captcha is required!')
			return
		}
		data.name = `${data.FirstName} ${data.LastName}`
		delete data.FirstName
		delete data.LastName
		mutate(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div>
				<div>
					<label htmlFor='FirstName'>First Name</label>
					<input
						id='FirstName'
						type='text'
						placeholder='eg. John'
						className={styles.input}
						onInput={() => setErrorMsg('')}
						{...register('FirstName', {
							required: 'FirstName is required!',
						})}
					/>
				</div>
				<div>
					<label htmlFor='LastName'>Last Name</label>
					<input
						id='LastName'
						type='text'
						placeholder='eg. Francisco'
						className={styles.input}
						{...register('LastName', {
							required: 'LastName is required!',
						})}
						onInput={() => setErrorMsg('')}
					/>
				</div>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					placeholder='Enter your email'
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
			<button disabled={isPending}>Sign Up</button>
			<p className='line' />
		</form>
	)
}
