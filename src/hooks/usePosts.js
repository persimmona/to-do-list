import { useMemo } from 'react';

// Чтобы незагромождать код
export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		return sort ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts;
	}, [sort, posts]);

	return sortedPosts;
}
// Computed property
// Чтобы не проводить манипуляции для большого числа записей
// Таким образом не нужно перезаписывать значения selectedSort и сами посты
export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const searchAndSortedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [sortedPosts, query]);

	return searchAndSortedPosts;
}

