import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (newContact) => {
    this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact] }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={(value) => this.setState({ filter: value })} />
        <ContactList contacts={contacts} filter={filter} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
