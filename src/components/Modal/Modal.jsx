import React from 'react';
import styles from './Modal.module.css'
import cn from 'classnames';

export const Modal = ({children, visible, setVisible}) => {

	return (
		<div 
			className={cn(styles.modal, {
				[styles.active]: visible
			})}
			onClick={() => setVisible(false)}
		>
			<div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}