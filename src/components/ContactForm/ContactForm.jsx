import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ contacts, setContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.form__label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name*"
          required
          // pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          value={name}
          onChange={event => setName(event.target.value)}
          className={style.form__input}
        />
      </label>
      <label className={style.form__label}>
        Phone number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number*"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
          className={style.form__input}
        />
      </label>
      <button type="submit" className={style.form__button}>
        Add Contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  seContacts: PropTypes.func,
};
