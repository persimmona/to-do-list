import React from 'react';

export const Select = ({options, defaultValue, ...props}) => {
	return (
		<select {...props}>
			<option disabled value="">{defaultValue}</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>{option.name}</option>
			))}
		</select>
	);
}