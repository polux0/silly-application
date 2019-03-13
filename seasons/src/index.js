import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

	constructor(props){

		super(props);

		this.state = {
						latitude: null,
					  	longitude: null,
					  	errorMessage: null

					 };

		console.log('Component says hi from a constructor');
	}
	componentDidMount(){

		navigator.geolocation.getCurrentPosition(

	    	position => {
	    		this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
	    	},
	    	err => {
	    		this.setState({errorMessage: err.message})
	    	}
		)	

	}
	componentDidUpdate(){
		console.log('Component did update!!!');
	}
	render(){


			if(this.state.errorMessage && !this.state.latitude){

				return <div> Error : {this.state.errorMessage} </div>;
			}
			if(!this.state.errorMessage && this.state.latitude){

				return <div> <SeasonDisplay latitude = {this.state.latitude} /> </div>;
			}
			else return <div> Loading... </div>;
		
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);