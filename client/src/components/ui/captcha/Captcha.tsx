import HCaptcha from '@hcaptcha/react-hcaptcha'
import React from 'react'
import { toast } from 'sonner'

export interface CaptchaProps {
	show: boolean
	onToken: (token: string) => void
}

export interface CaptchaProps {
	show: boolean
	onToken: (token: string) => void
	className?: string
}
export const Captcha: React.FunctionComponent<CaptchaProps> = ({
	show,
	onToken,
	className,
}) => {
	if (!show) return null

	return (
		<div className={className}>
			<HCaptcha
				// @ts-ignore
				sitekey={process.env.CAPTCHA_SITE_KEY}
				onVerify={onToken}
				onExpire={() => onToken('')}
				onError={err => {
					onToken('')
					toast.info('Cannot verify captcha')
				}}
			/>
		</div>
	)
}

export default Captcha
