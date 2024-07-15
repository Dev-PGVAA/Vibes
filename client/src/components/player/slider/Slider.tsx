'use client'

import cn from 'clsx'
import { useState } from 'react'
import { usePlayer } from '../hooks/usePlayer'
import styles from './Slider.module.scss'

export function Slider({ value }: { value: number }) {
	const [isDragging, setIsDragging] = useState(false)
	const { actions, audio } = usePlayer()

	return (
		<div className='mx-3 w-full flex items-center'>
			<input
				type='range'
				min={0}
				max={100}
				step={0.000_000_000_001}
				value={!isDragging ? value : undefined}
				className={cn('w-full h-1', styles.slider)}
				onMouseDown={() => setIsDragging(true)}
				onMouseUp={() => setIsDragging(false)}
				// TODO: перематывание музыки
				onChange={e => actions.rewind(Number(e.currentTarget.value))}
			/>
		</div>
	)
}
