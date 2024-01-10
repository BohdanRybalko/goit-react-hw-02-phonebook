import React from 'react';

import ContactItem from './ContactItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
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
};

export default ContactList;
