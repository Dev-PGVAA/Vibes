import type { FunctionComponent } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export interface CaptchaProps {
	show: boolean
	setToken: any
	className?: string
}
export const Captcha: FunctionComponent<CaptchaProps> = ({
	show,
	setToken,
	className,
}) => {
	if (!show) return null

	return (
		<div className={className}>
			<ReCAPTCHA
				sitekey={process.env.RECAPTCHA_SITE_KEY || ''}
				onChange={setToken}
			/>
		</div>
	)
}

export default Captcha
