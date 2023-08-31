import React, { useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Section from './Section/Section';

export const App = () => {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState('');
  const onDelete = contactToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactToDelete.id)
    );
    setFilter('');
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} setContacts={setContacts} />
      </Section>
      <Section title="Contacts">
        <ContactFilter filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} filter={filter} onDelete={onDelete} />
      </Section>
    </div>
  );
};
