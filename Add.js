import React from 'react';

class Add extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nama_depan :"",
			nama_belakang :"",
			telp :""
		}
		console.log(this.state);
		this.onFrontChange = this.onFrontChange.bind(this);
		this.onBackChange = this.onBackChange.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.addContact = this.addContact.bind(this);
	}

	onFrontChange(event){
		console.log(event.target.value);
		this.setState({
			nama_depan : event.target.value
		})
	}

	onBackChange(event){
		console.log(event.target.value);
		this.setState({
			nama_belakang : event.target.value
		})
	}

	onPhoneChange(event){
		console.log(event.target.value);
		this.setState({
			telp : event.target.value
		})
	}

	addContact(event){
		this.props.onAdd(this.state);
		this.setState({
			nama_depan :"",
			nama_belakang :"",
			telp :""
		})
	}


	render(){
		return (
			<div>
				<h2>Add Contact</h2>
				<table>
					<tbody>
						<tr>
							<td> <input type="text" placeholder="Nama Depan" style={{'width':'100%'}} onChange={this.onFrontChange} value={this.state.nama_depan}/></td>
							<td> <input type="text" placeholder="Nama Belakang" style={{'width':'100%'}} onChange={this.onBackChange} value={this.state.nama_belakang}/></td>
						</tr>
						<tr>
							<td colSpan={2}><input type="text" placeholder="No Telpon" style={{'width':'100%'}} onChange={this.onPhoneChange} value={this.state.telp}/></td>
						</tr>
						<tr>
							<td colSpan={2}><button onClick={this.addContact}>Save </button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Add
