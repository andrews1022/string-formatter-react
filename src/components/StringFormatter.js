import React, { useState, useRef } from 'react';

const StringFormatter = () => {
	const [output, setOutput] = useState('');
	const [checkedBox, setCheckedBox] = useState([]);

	const inputRef = useRef(null);
	const outputRef = useRef(null);

	// get value from input text area
	// const getInputValue = (e) => {
	// 	e.preventDefault();
	// 	return inputRef.current.value;
	// };

	// get clicked on checkbox (regardless of state)
	// const currentCheck = (e) => {
	// console.log(e.target);
	// console.log(e.target.checked);
	// };

	// convert text to lowercase
	// const formatTextLowerCase = (text) => text.toLowerCase();

	// convert text to lowercase
	// const formatTextUpperCase = (text) => text.toUpperCase();

	// convert text to "web-ready"
	// const formatTextWebReady = (text) => {};

	// convert text to "PeOPleFucKInGDyINg"
	// const formatTextPeopleFuckingDying = (text) => {}

	// limit number of checkboxes checked
	const selectCheck = (e) => {
		const selectedCheckbox = e.target;
		const selectedCheckboxIsChecked = selectedCheckbox.checked;
		const limit = 1;

		if (selectedCheckboxIsChecked) {
			if (checkedBox.length < limit) {
				setCheckedBox((currentState) => [...currentState, selectedCheckbox]);
			} else {
				e.preventDefault();
				e.target.checked = false;
			}
		} else {
			// reset to initial state
			setCheckedBox(() => []);
		}
	};

	// mirror text from input field to output field
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
						className='formatter__textarea'
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
							onChange={selectCheck}
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
							onChange={selectCheck}
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
							onChange={selectCheck}
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
							onChange={selectCheck}
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
						className='formatter__textarea'
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
