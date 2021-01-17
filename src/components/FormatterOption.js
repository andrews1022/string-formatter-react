import React from 'react';

const FormatterOption = ({ formatter, checkDispatch }) => {
	return (
		<li className='formatter__item'>
			<input
				className='formatter__input'
				type='checkbox'
				name={formatter.id}
				id={formatter.id}
				onChange={checkDispatch}
			/>
			<label className='formatter__check-label' htmlFor={formatter.id}>
				{formatter.label}
			</label>
		</li>
	);
};

export default FormatterOption;
