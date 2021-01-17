import React from 'react';
import Header from './components/Header';
import Formatter from './components/Formatter';
import Footer from './components/Footer';
import './scss/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<Formatter />
			<Footer />
		</div>
	);
};

export default App;
