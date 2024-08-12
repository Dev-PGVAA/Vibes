import type { InMemoryCache } from '@apollo/client'
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist'

export function initCache(cache: InMemoryCache) {
	// useEffect(() => {
	persistCache({
		cache,
		storage: new LocalStorageWrapper(window.localStorage)
	})
	// }, [])
}
