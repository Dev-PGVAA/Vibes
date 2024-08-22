import dayjs from 'dayjs'

export interface ILogger {
	log: (...args: any[]) => void
	warn: (...args: any[]) => void
	error: (...args: any[]) => void
	debug: (...args: any[]) => void
}

export const Logger: ILogger = {
	log: function (...args: any[]): void {
		let msg = ''
		if (args.length > 1) msg = JSON.stringify(args, null, 2)
		else msg = JSON.stringify(args[0], null, 2)

		console.log(
			`%c [Logger] - %c${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}\t %cLOG\t %c${'' + msg}`,
			'color:#B4FA72; font-weight:bold; font-size: 14px',
			'color:#fff; font-size: 14px',
			'color:#B4FA72; font-weight:bold; font-size: 14px',
			'color:#B4FA72; font-size: 14px'
		)
	},
	warn: function (...args: any[]): void {
		let msg = ''
		if (args.length > 1) msg = JSON.stringify(args, null, 2)
		else msg = JSON.stringify(args[0], null, 2)

		console.log(
			`%c [Logger] - %c${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}\t %cLOG\t %c${msg}`,
			'color:#FEFDC2; font-weight:bold; font-size: 14px',
			'color:#fff; font-size: 14px',
			'color:#FEFDC2; font-weight:bold; font-size: 14px',
			'color:#FEFDC2; font-size: 14px'
		)
	},
	debug: function (...args: any[]): void {
		let msg = ''
		if (args.length > 1) msg = JSON.stringify(args, null, 2)
		else msg = JSON.stringify(args[0], null, 2)

		console.log(
			`%c [Logger] - %c${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}\t %cLOG\t %c${msg}`,
			'color:#FFB1FF; font-weight:bold; font-size: 14px',
			'color:#fff; font-size: 14px',
			'color:#FFB1FF; font-weight:bold; font-size: 14px',
			'color:#FFB1FF; font-size: 14px'
		)
	},
	error: function (...args: any[]): void {
		let msg = ''
		if (args.length > 1) msg = JSON.stringify(args, null, 2)
		else msg = JSON.stringify(args[0], null, 2)

		console.log(
			`%c [Logger] - %c${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}\t %cLOG\t %c${msg}`,
			'color:#FF8272; font-weight:bold; font-size: 14px',
			'color:#fff; font-size: 14px',
			'color:#FF8272; font-weight:bold; font-size: 14px',
			'color:#FF8272; font-size: 14px'
		)
	}
}
