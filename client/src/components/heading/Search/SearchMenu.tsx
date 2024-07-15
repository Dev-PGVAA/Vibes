import cn from 'clsx'
import { SearchItem } from './SearchItem'
import { ISeachItem } from './search.interface'
import styles from './search.module.scss'

export function SearchMenu() {
	const SearchItems: ISeachItem[] = [
		{
			name: 'Kaneki',
			author: 'minivill',
			cover: '',
			duration: 146,
			isHaveAgeLimit: false,
			link: 'test',
		},
	]

	return (
		<div className={cn(styles.searchMenu, 'opacity-0 delay-300')}>
			{SearchItems.map(item => (
				<SearchItem key={item.name} item={item} />
			))}
		</div>
	)
}
