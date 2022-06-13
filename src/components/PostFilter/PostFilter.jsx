import React from 'react';
import { Input } from '../UI/Input/Input';
import { Select } from '../UI/Select/Select';

export const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<Input 
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder="Поиск.."
			/>
			<Select 
				value={filter.sort}
				onChange={e => setFilter({...filter, sort: e.target.value})}
				defaultValue="Сортировка"
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'}
				]} 
			/>
		</div>
	);
};