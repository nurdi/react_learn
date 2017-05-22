import React from 'react';

class ButtonAdd extends React.Component{
	render(){
		function add(e) {
		    e.preventDefault();
		    console.log('Ini Klik Add .');
		    alert("ADD BUTTON !");
		}
		return (
			<div>
				<button onClick={add}>
					Tambah
				</button>
			</div>
		);
	}
}

export default ButtonAdd;
