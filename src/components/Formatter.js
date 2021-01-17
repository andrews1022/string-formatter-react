import React, { useState, useEffect, useReducer } from 'react';
import FormatterOption from './FormatterOption';
import { initialState, reducer } from '../reducers/formattingReducer';
import { formatters } from './../data/formatters';

const Formatter = () => {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		// set format button disabled value if either state is not met
		if (!state.input || !state.checkedID.length) {
			setButtonIsDisabled(true);
		} else {
			setButtonIsDisabled(false);
		}

		// cleanup
		return () => {
			setButtonIsDisabled(true);
		};
	}, [state.input, state.checkedID.length]);

	// keep here, as it is used on every check group
	const checkDispatch = (e) => {
		dispatch({ type: 'box_checked', target: e.target, id: e.target.id });
	};

	return (
		<div className='formatter'>
			<div className='formatter__row'>
				{/* left hand box (input/output) */}
				<div className='formatter__box'>
					<div className='formatter__group'>
						<label className='formatter__textarea-label' htmlFor='input'>
							Input
						</label>
						<textarea
							className='formatter__textarea'
							name='input'
							id='input'
							value={state.input}
							onChange={(e) => dispatch({ type: 'set_input', input: e.target.value })}
						></textarea>
						<button
							className={`formatter__button ${buttonIsDisabled ? 'disabled' : 'active'}`}
							disabled={buttonIsDisabled}
							onClick={() => dispatch({ type: 'format_input' })}
						>
							Format
						</button>
					</div>

					<div className='formatter__group'>
						<label className='formatter__textarea-label' htmlFor='output'>
							Output
						</label>
						<textarea
							className='formatter__textarea'
							name='output'
							id='output'
							readOnly={true}
							value={state.output}
						></textarea>
						<button
							className={`formatter__button ${!state.output ? 'disabled' : 'active'}`}
							disabled={!state.output}
							onClick={() => dispatch({ type: 'copy_output' })}
						>
							{state.buttonText}
						</button>
					</div>
				</div>

				{/* right hand box (check boxes) */}
				<div className='formatter__box'>
					<h2 className='formatter__options'>Options (Pick 1)</h2>
					<ul className='formatter__list'>
						{formatters.length
							? formatters.map((formatter, idx) => (
									<FormatterOption
										formatter={formatter}
										checkDispatch={checkDispatch}
										key={idx < 10 ? `0${idx}` : idx}
									/>
							  ))
							: null}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Formatter;
