// convert text to lowercase
export const formatTextLowerCase = (text) => text.toLowerCase();

// convert text to lowercase
export const formatTextUpperCase = (text) => text.toUpperCase();

// convert text to "web-ready"
export const formatTextWebReady = (text) => {
	return text
		.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
		.replace(/\s+/g, '-')
		.toLowerCase();
};

// convert text to "PeOPleFucKInGDyINg"
export const formatTextPeopleFuckingDying = (text) => {
	return text
		.split('')
		.map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
		.join('');
};
