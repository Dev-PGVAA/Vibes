export function formatTime(time: number, type?: 'hours') {
	if (time > 3600) {
		const hours = Math.floor(time / 3600)
		const minutes = Math.floor((time % 3600) / 60)
		const seconds = Math.floor((time % 3600) % 60)

		return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
	} else {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
	}
}
