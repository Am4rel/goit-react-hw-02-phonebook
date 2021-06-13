import React, { Component } from 'react';
import Form from './Form/Form'
import Filter from './Filter/Filter'
import { v4 as id } from 'uuid';
import ContactsList from './ContactsList/ContactsList';
import checkList from './Elements/checkList'
import stylesDiv from './commonStyles/boxStyle.module.css'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  deleteContact = e => {
    const id = e.target.parentElement.id;
    const newContacts = this.state.contacts.filter(contact => {return contact.id !== id})

    this.setState({
      contacts: newContacts
    })
  }
  
  addContacts = (number, name) => {
    const { contacts } = this.state;

    const similarNames = checkList(contacts, "name", name);

    similarNames.length ? alert(`You already have contact ${name} in your Phonebook.`) : this.createContact(number, name);
  }

  createContact = (number, name) => {
    const contactId = id();
    const contactName = name;
    const contactNumber = number
    
    this.setState(prevState => {
      const renewedContactsList = [...prevState.contacts, { name: contactName, id: contactId, number: contactNumber }]
      return {
        contacts: renewedContactsList,
        filter: ''
      }
    })
  }

  onFilterInput = e => {
    const value = e.target.value;

    this.setState({
      filter: value
    })
  }

  render() {
    return <>
      <h2 className={stylesDiv.title}>My phonebook</h2>
      <Form onFormSubmit={this.addContacts} state={this.state} />
      <div className={stylesDiv.divBox}>
      <Filter onInput={this.onFilterInput} value={this.state.filter} />
        <ContactsList state={this.state} deleteFunc={this.deleteContact} />
      </div>
      </>
  }
}

export default App;
