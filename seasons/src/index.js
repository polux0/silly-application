import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {

// 	// function success(success){
// 	// 	console.log('Successfully aquired geolocation => ' + success);
// 	// }
// 	// function error(error){
// 	// 	console.log('There is an error when trying to aquire geolocation => ' + error);
// 	// }

// 	// navigator.geolocation.getCurrentPostion(error, success);

// 	return (
// 		<div> Hello there, from a container 
		
// 		</div>
// 	)
// };
class App extends React.Component {
	render(){
		return (
		<div> Lattitude
			<SeasonDisplay/>
		</div>
		) 
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);