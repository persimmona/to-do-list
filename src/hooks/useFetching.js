import { useState } from 'react'

// Используется из-за того, что делается колесо загрузки
// Асинхронная функция внутри асинхронной функции

export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	// Выполяет фетчинг и возвращает ошибку
	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		} 
	}

	return [fetching, isLoading, error];
}