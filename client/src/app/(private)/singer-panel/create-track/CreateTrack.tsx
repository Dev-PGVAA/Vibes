'use client'

import { slugify } from '@/utils/slugify/slugify'
import cn from 'clsx'
import dayjs from 'dayjs'
import { useState } from 'react'
import { BsQuestion } from 'react-icons/bs'
import styles from './createTrack.module.scss'

export function CreateTrack() {
	const [slug, setSlug] = useState('')
	const [isShowTooltip, setIsShowTooltip] = useState(false)

	return (
		<form className={styles.createMenu}>
			<h1>Create track</h1>
			<div className={styles.name}>
				<div>
					<input
						type='text'
						id='title'
						onInput={e =>
							setSlug(slugify((e.target as HTMLInputElement)?.value))
						}
						spellCheck={false}
					/>
					<label htmlFor='title'>title</label>
				</div>
				<div>
					<input type='text' value={slug} id='slug' disabled />
					<label htmlFor='slug'>
						slug
						<div
							role='button'
							tabIndex={1}
							onClick={() => setIsShowTooltip(!isShowTooltip)}
						>
							<BsQuestion size={20} fill='' />
						</div>
					</label>
					<div className={cn(styles.tooltip, !isShowTooltip && styles.hide)}>
						<article>
							<span>Slug</span> - it's <span className={styles.arrow} /> like a{' '}
							<b>shortcut</b> for a web page, making its address clear and
							unique, using only letters, numbers and hyphens. This helps people
							and search engines easily understand what the page is about
							without even opening it.
						</article>
					</div>
					<p className={styles.generate} />
				</div>
			</div>
			<div className={styles.details}>
				<div></div>
				<div>
					<input type='text' id='duration' disabled />
					<label htmlFor='duration'>duration (sec. )</label>
					<p className={styles.generate} />
				</div>
				<div>
					<input type='text' id='year' value={dayjs().get('year')} disabled />
					<label htmlFor='year'>year</label>
				</div>
			</div>

			<button type='submit' className={styles.update}>
				Create
			</button>
		</form>
	)
}
