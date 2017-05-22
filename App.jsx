import React from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonAbout from './ButtonAbout';
import Contacts from './Contacts';

class App extends React.Component{
   render() {
      const CONTACTS = [
         {id: 1,nama_depan : 'Nur', nama_belakang : 'Diarto', telp : '09128031', alamat : 'Alamat'},
         {id: 2,nama_depan : 'Nasrul', nama_belakang : 'Gifari', telp : '2342134', alamat : 'Alamat 2'},
         {id: 3,nama_depan : 'Rahmat', nama_belakang : 'Fauzi', telp : '124123', alamat : 'Alamat 3'}

      ]
      return (
      	<div>
            <div>
               <div><ButtonAdd /><ButtonAbout /></div>
               <h1>Contact Book</h1>
            </div>
            <div>
               <Contacts lists={CONTACTS} />
            </div>
		</div>
      );
   }
}

export default App;