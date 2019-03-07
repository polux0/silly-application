import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
	return <div> Hello there, from a container </div>;
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);