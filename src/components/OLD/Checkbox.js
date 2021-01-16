import React from 'react';

const Checkbox = ({ formatter, selectCheck }) => {
	return (
		<div className='formatter__group'>
			<input
				className='formatter__check'
				type='checkbox'
				name={formatter.id}
				id={formatter.id}
				onChange={selectCheck}
			/>
			<label className='formatter__check-label' htmlFor={formatter.id}>
				{formatter.label}
			</label>
		</div>
	);
};

export default Checkbox;
