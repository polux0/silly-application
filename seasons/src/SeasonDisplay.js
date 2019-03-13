import React from 'react';

const getSeason = (latitude, month) => {

	if(month > 2 && month < 9){
		return latitude > 0 ? 'summer' : 'winter';
	}
	else{
		return latitude > 0 ? 'winter': 'summer';
	}
}
const SeasonDisplay = (props) => {

	const season = getSeason(props.latitude, new Date().getMonth());
	console.log(season);

	let message = 'Burr, it`s chilly'; 
	let message1 = 'Let`s hit the beach!';

	let message2 = 'snowflake';
	let message3 =  'sun';

	let text = season  === 'winter' ? message : message1;
	let icon = season  === 'winter' ? message2 : message3;

	return <div>
				 <i className={`${icon} icon`} />
				 <h1> {text} </h1>
				 <i className={`${icon} icon`} />


			</div>;
};

export default SeasonDisplay;