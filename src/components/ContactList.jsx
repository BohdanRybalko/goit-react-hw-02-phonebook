import React, { Component } from 'react';

import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteContact } = this.props;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
