import React, { useState, useRef } from 'react';
import Checkbox from './Checkbox';

const StringFormatter = () => {
	const [output, setOutput] = useState('');
	const [checkedBox, setCheckedBox] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const inputRef = useRef(null);
	const outputRef = useRef(null);

	// get value from input text area
	const getInputValue = (e) => {
		e.preventDefault();
		return inputRef.current.value.trim();
	};

	// convert text to lowercase
	const formatTextLowerCase = (text) => text.toLowerCase();

	// convert text to lowercase
	const formatTextUpperCase = (text) => text.toUpperCase();

	// convert text to "web-ready"
	const formatTextWebReady = (text) => {
		return text
			.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
			.replace(/\s+/g, '-')
			.toLowerCase();
	};

	// convert text to "PeOPleFucKInGDyINg"
	const formatTextPeopleFuckingDying = (text) => {
		return text
			.split('')
			.map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
			.join('');
	};

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

	const displayErrorMessage = (message, duration) => {
		setErrorMessage(message);
		setTimeout(() => setErrorMessage(''), duration);
	};

	// mirror text from input field to output field
	const mirrorText = (e) => {
		e.preventDefault();

		// get input value
		// check if input value exists
		// if not, display error message

		const inputValue = getInputValue(e);

		if (!inputValue || checkedBox.length === 0) {
			displayErrorMessage('Please enter a value and/or select a box', 2250);
		} else {
			// if both valid, get function from formattingFn prop
			// use that function to format input value
			// set output value to that formatted value

			console.log(checkedBox);
			console.log(checkedBox.formattingFn);
			console.dir(checkedBox);
		}

		// const inputValue = inputRef.current.value;
		// const formattedText = formatTextWebReady(inputValue);
		// outputRef.current.value = setOutput(formattedText);
		// console.log(checkedBox);
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
					<Checkbox
						onChangeFn={selectCheck}
						identifier='format-lowercase'
						labelText='all lowercase'
						formattingFn={formatTextLowerCase}
					/>
					<Checkbox
						onChangeFn={selectCheck}
						identifier='format-uppercase'
						labelText='ALL UPPERCASE'
						formattingFn={formatTextUpperCase}
					/>
					<Checkbox
						onChangeFn={selectCheck}
						identifier='format-web-ready'
						labelText='web-ready'
						formattingFn={formatTextWebReady}
					/>
					<Checkbox
						onChangeFn={selectCheck}
						identifier='format-people-fucking-dying'
						labelText='PeOPleFucKInGDyINg'
						formattingFn={formatTextPeopleFuckingDying}
					/>
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
			{errorMessage && <p className='formatter__error'>{errorMessage}</p>}
		</form>
	);
};

export default StringFormatter;
