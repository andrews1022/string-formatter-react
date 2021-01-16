import React from 'react';
import Header from './components/Header';
import StringFormatter from './components/StringFormatter';
import Footer from './components/Footer';
import './scss/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<StringFormatter />
			<Footer />
		</div>
	);
};

export default App;
