import React from 'react';
import { Button } from '../UI/Button/Button';
import styles from "./PostItem.module.css";

export const PostItem = ({post, number, removeFn}) => {
	return (
		<div className={styles.post}>
            <div>
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className={styles.post__btns}>
                <Button onClick={() => removeFn(post.id)}>Удалить</Button>
            </div>
        </div>
	);
}