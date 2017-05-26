import React from 'react';

class Contacts extends React.Component{
	render(){
		const styles= {
			id: {
				width:50,
			    justifyContent: 'center',
			    alignItems: 'center',
			    padding:0
			}
		}
		console.log(this.props);
		return (
			<div>
				<table>
				{this.props.lists.map((contact) =>
					<tbody key={contact.id}>
					<tr>
						<td rowSpan={2} style={{'width':'20%'}}><div>{contact.id}</div></td>
						<td style={{'width':'40%'}}>{contact.nama_depan} {contact.nama_belakang}</td>
						<td style={{'width':'40%'}}><button>Edit</button></td>
					</tr>
					<tr>
						<td>{contact.telp}</td>
						<td><button>Delete</button></td>
					</tr>
					</tbody>
				)}
				</table>
			</div>
		);
	}
}

export default Contacts;
