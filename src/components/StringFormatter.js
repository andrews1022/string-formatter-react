import React, { useState, useRef } from 'react';
import Checkbox from './Checkbox';
import {
	formatTextLowerCase,
	formatTextUpperCase,
	formatTextWebReady,
	formatTextPeopleFuckingDying
} from './../functions/FormattingFunctions';

const StringFormatter = () => {
	// const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [checkedBox, setCheckedBox] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [copy, setCopy] = useState('Copy');

	const inputRef = useRef(null);
	const outputRef = useRef(null);

	// get value from input text area
	const getInputValue = (e) => {
		e.preventDefault();
		return inputRef.current.value.trim();
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

		const inputValue = getInputValue(e);

		if (!inputValue || checkedBox.length === 0) {
			displayErrorMessage('Please enter a value and/or select a box', 2250);
		} else {
			switch (checkedBox[0].id) {
				case 'format-lowercase':
					outputRef.current.value = setOutput(formatTextLowerCase(inputValue));
					break;

				case 'format-uppercase':
					outputRef.current.value = setOutput(formatTextUpperCase(inputValue));
					break;

				case 'format-web-ready':
					outputRef.current.value = setOutput(formatTextWebReady(inputValue));
					break;

				case 'format-people-fucking-dying':
					outputRef.current.value = setOutput(formatTextPeopleFuckingDying(inputValue));
					break;

				default:
					break;
			}
		}
	};

	const copyOutputToClipboard = (e) => {
		if (navigator.clipboard) {
			e.preventDefault();

			const textToCopy = outputRef.current.value;

			try {
				navigator.clipboard.writeText(textToCopy);
				setCopy('Copied!');
				setTimeout(() => setCopy('Copy'), 1500);
			} catch (error) {
				console.log('oops!', error);
			}
		}
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
						className='formatter__textarea formatter__textarea--output'
						name='output'
						id='output'
						ref={outputRef}
						value={output}
						readOnly={true}
					></textarea>
					<button className='formatter__button' onClick={copyOutputToClipboard}>
						{copy}
					</button>
				</div>
			</div>
			{errorMessage && <p className='formatter__error'>{errorMessage}</p>}
		</form>
	);
};

export default StringFormatter;
