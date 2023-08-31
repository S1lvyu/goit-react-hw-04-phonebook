import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, onDelete }) {
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={styles.list}>
      {filteredContacts.length === 0 ? (
        <p className={styles.message}>No contacts found</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
