import React from 'react';

class Contacts extends React.Component{
	render(){
		console.log(this.props);
		return (
			<div>

				{this.props.lists.map((contact) => 
				    <div key={contact.id}>{contact.id} {contact.nama_depan} {contact.nama_belakang} {contact.telp}</div>
				)}

			</div>
		);
	}
}

export default Contacts;
