import React from 'react';
import Heading from './components/Heading';
import StringFormatter from './components/StringFormatter';

import './scss/app.min.css';

const App = () => {
	return (
		<div className='wrapper'>
			<Heading text='String Formatter' />
			<StringFormatter />
		</div>
	);
};

export default App;
