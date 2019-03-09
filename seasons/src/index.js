import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {

	console.log('aloha');

	function getLocation() {
	
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(position => {
	    	if (position) {
	    		console.log("Requested geolocation => " + position);
	    		console.log(position);
	    	}
	    });
	  } else { 
	   		console.log("Your browser doesn`t support geolocation API "); 
	  }
	}

	function showPosition(position){
		console.log('Current position => ' + position.coords.latitude + " he => " + position.coords.longitude);
	}

	return (
		<div> Hello there, from a container 
			{getLocation()}
		</div>
	)
};
/// class App extends React.Component {

// 	console.log('aloha');
// 	render(){
// 		return (
// 		<div> Lattitude
// 			<SeasonDisplay/>
// 		</div>
// 		) 
// 	}
// }

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);