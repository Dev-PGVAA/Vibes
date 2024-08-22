'use client'

import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { toast } from 'sonner'

import Captcha from '@/components/ui/captcha/Captcha'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import styles from '../auth.module.scss'

import { calculateProgressPasswordStrength } from './calculateProgressPasswordStrength'
import { RegisterDocument } from '@/__generated__/output'
import { saveTokenStorage } from '@/services/user/auth/auth.helper'
import type { IAuthResponse } from '@/services/user/auth/auth.interface'
import type { IFormData } from '@/services/user/auth/auth.types'

export function SignUpForm({
	redirectOnSuccess
}: {
	redirectOnSuccess: string | null
}) {
	const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<string | null>(null)
	const { replace } = useRouter()
	const [token, setToken] = useState<string | undefined>()
	const { register, handleSubmit, reset, getValues } = useForm<IFormData>()
	const [passwordStrength, setPasswordStrength] = useState<string | undefined>(
		''
	)

	const [mutate, { loading: isPending, error, data }] =
		useMutation<IAuthResponse>(RegisterDocument, {
			onError(error) {
				setErrorMsg((error as Error).message)
			},
			onCompleted() {
				if (!error) {
					if (data?.Register.accessToken)
						saveTokenStorage(data.Register.accessToken)
					toast.success('Successfully sign up!')
					reset()
					redirectOnSuccess
						? replace(redirectOnSuccess)
						: replace(PUBLIC_PAGES.HOME)
				}
			}
		})

	const onSubmit: SubmitHandler<IFormData> = async data => {
		if (!token && process.env.NEXT_PUBLIC_NODE_ENV !== 'development') {
			setErrorMsg('Captcha is required!')
			return
		}
		data.name = `${data.FirstName} ${data.LastName}`
		delete data.FirstName
		delete data.LastName
		mutate({ variables: { data } })
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={styles.name}>
				<div>
					<label htmlFor='FirstName'>First Name</label>
					<input
						id='FirstName'
						type='text'
						placeholder='eg. John'
						className={styles.input}
						onInput={() => setErrorMsg('')}
						{...register('FirstName', {
							required: 'FirstName is required!'
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
							required: 'LastName is required!'
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
						required: 'Email is required!'
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
					onInput={e => {
						setErrorMsg('')
						setPasswordStrength(
							calculateProgressPasswordStrength(
								(e.target as HTMLInputElement).value
							)
						)
					}}
					{...register('password', {
						required: 'Password is required!'
					})}
				/>
				<button
					className={styles.eyeIcon}
					onClick={e => {
						e.preventDefault()
						setIsShowPassword(!isShowPassword)
					}}
				>
					{isShowPassword ? (
						<FaRegEye size={25} />
					) : (
						<FaRegEyeSlash size={25} />
					)}
				</button>
				<div className={styles.strength}>
					<div className={passwordStrength} />
				</div>
				<p>Must be at least 8 characters</p>
			</div>
			<Captcha
				setToken={setToken}
				show={!!Object.values(getValues()).filter(Boolean).length}
			/>
			<h5 className={styles.error}>{errorMsg}</h5>
			<button
				disabled={isPending}
				className={styles.submit}
			>
				Sign Up
			</button>
		</form>
	)
}
