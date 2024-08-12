import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { LoginForm } from './loginForm/loginForm'
import { SignUpForm } from './signUpForm/signUpForm'
import { SocialAuth } from './social-auth/SocialAuth'

// TODO: forgot password + correct email to btn, sign in with ...
const Aside = ({ isHaveAnAccount, setIsHaveAnAccount }: any) => {
	const searchParams = useSearchParams()
	const redirectOnSuccess = searchParams.get('redirect')
	const error = searchParams.get('error')
	const [date, setDate] = useState<Date>()

	useEffect(() => {
		if (error) toast.error(`${error} auth error!`)
	}, [])

	return (
		<aside>
			<div>
				<div className='header'>
					<h1>Sign Up Account</h1>
					<p>Enter your personal data to create account.</p>
				</div>
				<SocialAuth />
			</div>
			{isHaveAnAccount ? (
				<LoginForm redirectOnSuccess={redirectOnSuccess} />
			) : (
				<SignUpForm redirectOnSuccess={redirectOnSuccess} />
			)}
			<button onClick={() => setIsHaveAnAccount(!isHaveAnAccount)}>
				{isHaveAnAccount ? (
					<>
						Don't have an account? <b>Sign up</b>
					</>
				) : (
					<>
						Already have an account? <b>Log in</b>
					</>
				)}
			</button>
		</aside>
	)
}

export default Aside
