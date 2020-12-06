import React, { useState, useRef } from 'react';
import Checkbox from './Checkbox';
import { formatters } from '../data/Formatters';
import {
	formatTextLowerCase,
	formatTextUpperCase,
	formatTextWebReady,
	formatTextPeopleFuckingDying,
	formatTextSentenceCase
} from './../functions/FormattingFunctions';

const StringFormatter = () => {
	// state
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [checkedBox, setCheckedBox] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [copy, setCopy] = useState('Copy');

	// refs
	const inputRef = useRef(null);
	const outputRef = useRef(null);

	// add what's being typed to input state
	const trackInput = () => {
		setInput(inputRef.current.value);
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

	// display error message
	const displayErrorMessage = (message, duration) => {
		setErrorMessage(message);
		setTimeout(() => setErrorMessage(''), duration);
	};

	// mirror text from input field to output field
	const mirrorText = (e) => {
		e.preventDefault();

		if (!input || checkedBox.length === 0) {
			displayErrorMessage('Please enter a value and/or select a box', 1152250);
		} else {
			switch (checkedBox[0].id) {
				case 'format-lowercase':
					setOutput(formatTextLowerCase(input));
					break;

				case 'format-uppercase':
					setOutput(formatTextUpperCase(input));
					break;

				case 'format-web-ready':
					setOutput(formatTextWebReady(input));
					break;

				case 'format-people-fucking-dying':
					setOutput(formatTextPeopleFuckingDying(input));
					break;

				case 'format-sentence-case':
					setOutput(formatTextSentenceCase(input));
					break;

				default:
					break;
			}
		}
	};

	// copy text in output field to clipboard
	const copyOutputToClipboard = (e) => {
		e.preventDefault();

		navigator.clipboard.writeText(output);
		setCopy('Copied!');
		setTimeout(() => setCopy('Copy'), 1500);
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
						onChange={trackInput}
					></textarea>
					<input className='formatter__button' type='submit' value='Format' onClick={mirrorText} />
				</div>
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
				{errorMessage && <p className='formatter__error'>{errorMessage}</p>}
			</div>
			<div className='formatter__row'>
				<div className='formatter__box'>
					<span className='formatter__label'>Options (Pick 1)</span>
					{formatters.map((formatter) => (
						<Checkbox formatter={formatter} selectCheck={selectCheck} key={formatter.id} />
					))}
				</div>
			</div>
		</form>
	);
};

export default StringFormatter;
