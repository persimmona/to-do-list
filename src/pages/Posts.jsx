import React, { useEffect, useState } from 'react'; // в каждый файл, где создаем компонент
import { PostForm } from '.././components/PostForm/PostForm';
import { PostList } from '.././components/PostList/PostList';
import { PostFilter } from '.././components/PostFilter/PostFilter';
import { Modal } from '.././components/Modal/Modal';
import { Button } from '.././components/UI/Button/Button';
import { usePosts } from '.././hooks/usePosts';
import PostService from '.././API/PostService';
import { Loader } from '.././components/UI/Loader/Loader';
import { useFetching } from '.././hooks/useFetching';
import { getPageCount } from '.././utils/pages';
import { Pagination } from '.././components/UI/Pagination/Pagination';

export const Posts = () => {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit));
	});

	// Используется для отслеживания жизненного цикла
	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

	// Чтобы сделать более универсальный код вызова апи, лучше оформить отдельным копнентом
	// async function fetchPosts() {
	// 	setIsPostsLoading(true);
	// 	const response = await PostService.getAll();
	// 	setIsPostsLoading(false);
	// 	setPosts(response.data);
	// }

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (id) => {
		setPosts(posts.filter(val => val.id !== id));
	}

	const changePage = (page) => {
		setPage(page)
	}

  return (
    <div className="App">
		<Button style={{marginTop: 30}} onClick={() => setModal(true)}>Создать новый пост</Button>
		
		<hr style={{margin: '15px 0'}} />

		<Modal visible={modal} setVisible={setModal}>
			<PostForm createFn={createPost}/>
		</Modal>

		<PostFilter filter={filter} setFilter={setFilter} />

		{postError && 
			<h1>Произошла ошибка ${postError}</h1>
		}

		{isPostsLoading 
			? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
			: <PostList removeFn={removePost} posts={searchAndSortedPosts} title="Nice title" />
		}

		<Pagination
			page={page}
			changePage={changePage}
			totalPages={totalPages}
		/>
    </div>
  );
}