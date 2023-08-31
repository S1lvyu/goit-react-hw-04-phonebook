import React, { useContext, createContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
const PhonebookContext = createContext();

export function PhonebookProvider({ children }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (contactExists) {
      alert('This contact already exists');
      setName('');
      setNumber('');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const onDelete = contactToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactToDelete.id)
    );
    setFilter('');
  };
  const contextValue = {
    name,
    setName,
    number,
    setNumber,
    contacts,
    filter,
    setFilter,
    handleSubmit,
    onDelete,
  };

  return (
    <PhonebookContext.Provider value={contextValue}>
      {children}
    </PhonebookContext.Provider>
  );
}
export function usePhonebook() {
  return useContext(PhonebookContext);
}
