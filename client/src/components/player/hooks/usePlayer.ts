import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export function usePlayer() {
	const audioRef = useRef<HTMLAudioElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [isRepeat, setIsRepeat] = useState(false)
	const [isShuffle, setIsShuffle] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [progress, setProgress] = useState(0)
	const [playId, setPlayId] = useState(0)

	useEffect(() => {
		if (audioRef.current?.duration) {
			setDuration(audioRef.current!.duration)
		}
	}, [audioRef.current?.duration])

	const toggleAudio = useCallback(() => {
		if (!isPlaying) {
			audioRef.current?.play()
			setIsPlaying(true)
		} else {
			audioRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const rewind = useCallback(
		(inputValue: number) => {
			setCurrentTime((inputValue * duration) / 100)
		},
		[progress]
	)

	const toggleRepeat = useCallback(() => {
		if (!isRepeat) {
			setIsRepeat(true)
		} else setIsPlaying(false)
	}, [isRepeat])

	const toggleShuffle = useCallback(() => {
		if (!isShuffle) setIsShuffle(true)
		else setIsShuffle(false)
	}, [isRepeat])

	const playNext = useCallback(() => {
		setPlayId(playId + 1)
	}, [playId])

	const playPrev = useCallback(() => {
		setPlayId(playId - 1)
	}, [playId])

	const forward = () => {
		if (audioRef.current?.currentTime) audioRef.current!.currentTime += 5
	}

	const revert = () => {
		if (audioRef.current?.currentTime) audioRef.current!.currentTime -= 5
	}

	useEffect(() => {
		if (!audioRef.current) return

		const updateProgress = () => {
			setCurrentTime(audioRef.current!.currentTime)
			setProgress((audioRef.current!.currentTime / duration) * 100)
		}

		audioRef.current!.addEventListener('timeupdate', updateProgress)

		return () => {
			if (audioRef.current)
				audioRef.current.removeEventListener('timeupdate', updateProgress)
		}
	}, [duration])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ': {
					e.preventDefault()
					toggleAudio()
					break
				}
				case 'KeyK':
					playPrev()
					break
				case 'KeyL':
					playNext()
					break
				default:
					break
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	})

	return useMemo(
		() => ({
			audioRef,
			actions: {
				toggleAudio,
				toggleRepeat,
				toggleShuffle,
				forward,
				revert,
				rewind,
				playNext,
				playPrev
			},
			audio: {
				isPlaying,
				isRepeat,
				currentTime,
				duration,
				progress
			},
			player: {
				isShuffle,
				playId
			}
		}),
		[
			isPlaying,
			isRepeat,
			isShuffle,
			currentTime,
			duration,
			progress,
			toggleAudio,
			toggleRepeat,
			toggleShuffle,
			forward,
			revert
		]
	)
}
