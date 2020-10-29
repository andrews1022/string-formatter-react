import React, { useState, useRef } from 'react';

const StringFormatter = () => {
	const [output, setOutput] = useState('');

	const inputRef = useRef(null);
	const outputRef = useRef(null);

	// get value from input text area
	// const getInputValue = (e) => {
	// 	e.preventDefault();
	// 	return inputRef.current.value;
	// };

	// set output value in output text area
	// const setOutputValue = (e) => {
	// 	e.preventDefault();
	//   const inputValue = getInputValue(e);
	//   setOutput(output.current.value)
	// };

	const mirrorText = (e) => {
		e.preventDefault();

		const inputValue = inputRef.current.value;
		outputRef.current.value = setOutput(inputValue);
	};

	return (
		<form className='formatter'>
			<div className='formatter__row'>
				<div className='formatter__box'>
					<label className='formatter__label' htmlFor='input'>
						Input
					</label>
					<textarea
						className='formatter__textarea formatter__textarea--input'
						name='input'
						id='input'
						ref={inputRef}
					></textarea>
					<input className='formatter__button' type='submit' value='Format' onClick={mirrorText} />
				</div>
				<div className='formatter__box'>
					<span className='formatter__label'>Options (Pick 1)</span>
					<div className='formatter__group'>
						<input
							className='formatter__check'
							type='checkbox'
							name='format-lowercase'
							id='format-lowercase'
						/>
						<label className='formatter__check-label' htmlFor='format-lowercase'>
							all lowercase
						</label>
					</div>
					<div className='formatter__group'>
						<input
							className='formatter__check'
							type='checkbox'
							name='format-uppercase'
							id='format-uppercase'
						/>
						<label className='formatter__check-label' htmlFor='format-uppercase'>
							ALL UPPERCASE
						</label>
					</div>
					<div className='formatter__group'>
						<input
							className='formatter__check'
							type='checkbox'
							name='format-web'
							id='format-web-ready'
						/>
						<label className='formatter__check-label' htmlFor='format-web'>
							web-ready
						</label>
					</div>
					<div className='formatter__group'>
						<input
							className='formatter__check'
							type='checkbox'
							name='format-people-fucking-dying'
							id='format-people-fucking-dying'
						/>
						<label className='formatter__check-label' htmlFor='format-people-fucking-dying'>
							PeOPleFucKInGDyINg
						</label>
					</div>
					<div className='formatter__group'></div>
				</div>
			</div>
			<div className='formatter__row'>
				<div className='formatter__box'>
					<label className='formatter__label' htmlFor='output'>
						Output
					</label>
					<textarea
						className='formatter__textarea formatter__textarea--output'
						name='output'
						id='output'
						ref={outputRef}
						value={output}
						readOnly={true}
					></textarea>
					<button className='formatter__button'>Copy</button>
				</div>
			</div>
		</form>
	);
};

export default StringFormatter;
