import { Injectable } from '@nestjs/common'
import { createTransport } from 'nodemailer'

type TEmailData = {
	to: string
	subject: string
	html: string
}

@Injectable()
export class MailService {
	sendMail({ to, subject, html }: TEmailData) {
		const transporter = createTransport({
			service: 'gmail',
			auth: {
				user: 'ecoplannermailer@gmail.com',
				pass: 'iffl idhx awvr agnp'
			}
		})
		transporter.sendMail({
			from: 'ecoplannermailer@gmail.com',
			to: to,
			subject: subject,
			html: html
		})

		return { response: 'Email sent' }
	}
}
