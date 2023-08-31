import React from 'react';
import styles from './DeleteButton.module.css';
import PropTypes from 'prop-types';

export default function DeleteButton({ contact, onDelete }) {
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
  onDelete: PropTypes.func.isRequired,
};
