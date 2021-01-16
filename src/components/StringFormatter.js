import React, { useReducer } from 'react';
import * as F from './../functions/formattingFunctions';

const initialState = {
	input: '',
	output: '',
	checkedID: [],
	limit: 1,
	buttonText: 'Copy'
};

// dynamically return the appropiate formatting function based on the id passed in
const formatDecider = (id) => {
	switch (id) {
		case 'format_lowercase':
			return F.formatTextLowerCase;

		case 'format_uppercase':
			return F.formatTextUpperCase;

		case 'format_web_ready':
			return F.formatTextWebReady;

		case 'format_people_fucking_dying':
			return F.formatTextPeopleFuckingDying;

		case 'format_sentence_case':
			return F.formatTextSentenceCase;

		default:
			break;
	}
};

const reducer = (state, action) => {
	switch (action.type) {
		// handle checking boxes
		case 'box_checked':
			if (state.checkedID.includes(action.id)) {
				// remove currently checked item from state
				return {
					...state,
					checkedID: state.checkedID.filter((id) => id !== action.id)
				};
			} else if (state.checkedID.length >= state.limit) {
				// a different item is already in the state
				document.getElementById(state.checkedID).checked = false;
				state.checkedID = [];
				return {
					...state,
					checkedID: [...state.checkedID, action.id]
				};
			} else {
				// added checked item to state
				return {
					...state,
					checkedID: [...state.checkedID, action.id]
				};
			}

		// handle setting input
		case 'set_input':
			return {
				...state,
				input: action.input
			};

		// handle deciding how to format the input
		case 'format_input':
			if (!state.checkedID.length) {
				alert('Please select an option');
				return state;
			} else {
				// store returned function in this variable
				const formatter = formatDecider(state.checkedID[0]);

				return {
					...state,
					output: formatter(state.input) // use dynamic text formatter
				};
			}

		case 'copy_output':
			navigator.clipboard.writeText(state.output);
			alert('Text copied!');
			return state;

		default:
			return state;
	}
};

const StringFormatter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='formatter'>
			<div className='row'>
				<div className='box'>
					<div className='group'>
						<label htmlFor='input'>Input</label>
						<textarea
							name='input'
							id='input'
							cols='30'
							rows='10'
							value={state.input}
							onChange={(e) => dispatch({ type: 'set_input', input: e.target.value })}
						></textarea>
						<button disabled={!state.input} onClick={() => dispatch({ type: 'format_input' })}>
							Format
						</button>
					</div>
					<div className='group'>
						<label htmlFor='output'>Output</label>
						<textarea
							name='output'
							id='output'
							cols='30'
							rows='10'
							readOnly={true}
							value={state.output}
						></textarea>
						<button disabled={!state.output} onClick={() => dispatch({ type: 'copy_output' })}>
							{state.buttonText}
						</button>
					</div>
				</div>

				<div className='box'>
					<h2>Options (Pick 1)</h2>
					<ul className='list'>
						<li className='item'>
							<input
								type='checkbox'
								name='format_lowercase'
								id='format_lowercase'
								onChange={(e) =>
									dispatch({ type: 'box_checked', target: e.target, id: e.target.id })
								}
							/>
							<label htmlFor='format_lowercase'>lowercase</label>
						</li>

						<li className='item'>
							<input
								type='checkbox'
								name='format_uppercase'
								id='format_uppercase'
								onChange={(e) =>
									dispatch({ type: 'box_checked', target: e.target, id: e.target.id })
								}
							/>
							<label htmlFor='format_uppercase'>UPPERCASE</label>
						</li>

						<li className='item'>
							<input
								type='checkbox'
								name='format_web_ready'
								id='format_web_ready'
								onChange={(e) =>
									dispatch({ type: 'box_checked', target: e.target, id: e.target.id })
								}
							/>
							<label htmlFor='format_web_ready'>web-ready</label>
						</li>

						<li className='item'>
							<input
								type='checkbox'
								name='format_people_fucking_dying'
								id='format_people_fucking_dying'
								onChange={(e) =>
									dispatch({ type: 'box_checked', target: e.target, id: e.target.id })
								}
							/>
							<label htmlFor='format_people_fucking_dying'>PeOPleFucKInGDyINg</label>
						</li>

						<li className='item'>
							<input
								type='checkbox'
								name='format_sentence_case'
								id='format_sentence_case'
								onChange={(e) =>
									dispatch({ type: 'box_checked', target: e.target, id: e.target.id })
								}
							/>
							<label htmlFor='format_sentence_case'>Sentence case</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default StringFormatter;
