import React from 'react';

class ButtonAbout extends React.Component{
	render(){
		function about(e) {
		    e.preventDefault();
		    console.log('Ini Klik About .');
		    alert("About BUTTON !");
		}
		return (
		<div>
			<button onClick={about}>
				About
			</button>
		</div>
		);
	}
}

export default ButtonAbout;
