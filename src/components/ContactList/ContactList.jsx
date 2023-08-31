import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { usePhonebook } from 'store/PhoneBookContext';

export default function ContactList() {
  const { contacts, filter } = usePhonebook();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={styles.list}>
      {filteredContacts.length === 0 ? (
        <p className={styles.message}>No contacts found</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
