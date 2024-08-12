import { MdSearch } from 'react-icons/md'

import styles from './SearchInput.module.scss'

export function SearchInput({ action }: { action: () => {} }) {
	return (
		<div className={styles.search}>
			<button onClick={() => action()}>
				<MdSearch size={24} />
			</button>
			<input
				type='text'
				placeholder='Search'
			/>
		</div>
	)
}
