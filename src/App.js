import React from 'react';
import Heading from './components/Heading';
import StringFormatter from './components/StringFormatter';
import Footer from './components/Footer';

import './scss/app.min.css';

const App = () => {
	return (
		<div className='wrapper'>
			<Heading text='String Formatter' />
			<StringFormatter />
			<Footer />
		</div>
	);
};

export default App;
