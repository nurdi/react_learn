import React from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonAbout from './ButtonAbout';
import Contacts from './Contacts';
import Add from './Add';
import { Link,Route } from 'react-router-dom';

class App extends React.Component{
   constructor(props){
      super(props);
      const CONTACTS = [
         {id: 1,nama_depan : 'Nur', nama_belakang : 'Diarto', telp : '09128031', alamat : 'Alamat'},
         {id: 2,nama_depan : 'Nasrul', nama_belakang : 'Gifari', telp : '2342134', alamat : 'Alamat 2'},
         {id: 3,nama_depan : 'Rahmat', nama_belakang : 'Fauzi', telp : '124123', alamat : 'Alamat 3'}
      ]

      this.state = {
         list : CONTACTS
      }
   }

   onAddToContact(e){
      console.log(e);
      let list = this.state.list
      list.push({id: list.length+1, nama_depan:e.nama_depan, nama_belakang:e.nama_belakang, telp:e.telp, alamat:""});
      this.setState({
         list : list
      })
   }

   render() {
     
      console.log(this.props);
      console.log(this.props.children);
      return (
      	<div>
            <div>
             {this.props.children}
               <div><Link to="add"><ButtonAdd /></Link><Link to="about"><ButtonAbout /></Link></div>
               <h1>Contact Book</h1>
            </div>
            <div>
               <Contacts lists={this.state.list} />
            </div>
            <div>
               <Add onAdd={this.onAddToContact.bind(this)}/>
            </div>
		</div>
      );
   }
}

export default App;