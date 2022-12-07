import React from 'react'
import ContactForm from './Form/Form'
import { Contacts } from './Contacts/Contacts';
import  Filter  from './Filter/Filter';
export class App extends React.Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: '',

  };


  saveContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: contact.name,
      number: contact.number,
    })
    )
    console.log('state:',this.state);
  }

  saveFilter = (filterValue) => {
    this.setState(prevState => ({
       filter:filterValue
    })
    )
    console.log('state:',this.state);
  }
  

 

  render() {
    return (
      <>
      <ContactForm
        onSubmit={this.saveContact}
      />
        <Filter 
        onChange={this.saveFilter}/>
        <Contacts
          contacts={this.state.contacts} />
        </>
    )
  }
 
}


// Додати назви
