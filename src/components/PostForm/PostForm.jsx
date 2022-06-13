import React, { useState } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

export const PostForm = ({createFn}) => {
	const [post, setPost] = useState({title:'', body:''})
	
	const createPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now()
		}
		// To create new post we need to use callback function, as all post info are away from this component
		createFn(newPost);
		setPost({title:'', body:''})
	}
	// Get assess to stateless components through useRef
	return (
		<form>
			<Input
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type="text"
			/>
			<Input
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"
			/>
			<Button onClick={createPost} >Создать пост</Button>
		</form>
	);
}