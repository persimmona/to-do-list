import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PostItem } from '../PostItem/PostItem';
import './animation.css';

export const PostList = ({posts, title, removeFn}) => {
	if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}> Посты не найдены!</h1>
        )
    }

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, i) =>
				
					<CSSTransition
						key={post.id} 
						timeout={500}
						classNames="post"
					>
						<PostItem removeFn={removeFn} post={post} number={i + 1} />
					</CSSTransition>
				)}
				
			</TransitionGroup>
				
		</div>
	);
}