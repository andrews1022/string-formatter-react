import React from 'react';
import Heading from './components/Heading';

export default class StringFormatter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			output: ''
		};
	}

	render() {
		return (
			<div className='wrapper'>
				<Heading />
			</div>
		);
	}
}
