import { formatDecider } from './../functions/formatDecider';

export const initialState = {
	input: '',
	output: '',
	checkedID: [],
	limit: 1,
	buttonText: 'Copy'
};

export const reducer = (state, action) => {
	switch (action.type) {
		// handle checking boxes
		case 'box_checked':
			// remove currently checked item from state
			if (state.checkedID.includes(action.id)) {
				return {
					...state,
					checkedID: state.checkedID.filter((id) => id !== action.id)
				};
			}

			// a different item is already in the state
			if (state.checkedID.length >= state.limit) {
				document.getElementById(state.checkedID).checked = false;
				state.checkedID = [];
				return {
					...state,
					checkedID: [...state.checkedID, action.id]
				};
			}

			// added checked item to state (no box is currently checked)
			return {
				...state,
				checkedID: [...state.checkedID, action.id]
			};

		// handle setting input
		case 'set_input':
			return {
				...state,
				input: action.input
			};

		// handle deciding how to format the input
		case 'format_input':
			if (!state.checkedID.length) {
				return state;
			} else {
				// store returned function in this variable
				const formatter = formatDecider(state.checkedID[0]); // access first and only element in array

				return {
					...state,
					output: formatter(state.input) // use dynamic text formatter
				};
			}

		case 'copy_output':
			navigator.clipboard.writeText(state.output);
			return state;

		default:
			return state;
	}
};
