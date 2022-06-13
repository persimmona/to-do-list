import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import styles from "./Pagination.module.css";
import cn from 'classnames';

export const Pagination = ({page, changePage, totalPages}) => {
	let pagesArray = getPagesArray(totalPages);
    return (
        <div className={styles.wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={cn(styles.page, {
						[styles.current]: page === p
					})}
                >
					{p}
				</span>
            )}
        </div>
    );
}