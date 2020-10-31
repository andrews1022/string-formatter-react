import React from 'react';

const Checkbox = ({ onChangeFn, identifier, labelText, formattingFn }) => {
	return (
		<div className='formatter__group'>
			<input
				className='formatter__check'
				type='checkbox'
				name={identifier}
				id={identifier}
				onChange={onChangeFn}
			/>
			<label className='formatter__check-label' htmlFor={identifier}>
				{labelText}
			</label>
		</div>
	);
};

export default Checkbox;
