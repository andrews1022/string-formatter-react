import React from 'react';

const Heading = (props) => <h1>{props.text}</h1>;

Heading.defaultProps = {
	text: 'String Formatter'
};

export default Heading;
