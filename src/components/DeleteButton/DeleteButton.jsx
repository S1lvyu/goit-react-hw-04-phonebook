import React from 'react';
import styles from './DeleteButton.module.css';
import PropTypes from 'prop-types';
import { usePhonebook } from 'store/PhoneBookContext';

export default function DeleteButton({ contact }) {
  const { onDelete } = usePhonebook();
  return (
    <button
      type="button"
      onClick={() => onDelete(contact)}
      className={styles.button}
    >
      Delete
    </button>
  );
}
DeleteButton.propTypes = {
  contact: PropTypes.object.isRequired,
};
