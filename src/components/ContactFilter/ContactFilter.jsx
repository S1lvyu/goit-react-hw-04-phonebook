import React from 'react';
import styles from './ContactFilter.module.css';
import PropTypes from 'prop-types';
import { usePhonebook } from 'store/PhoneBookContext';

export default function ContactFilter() {
  const { filter, setFilter } = usePhonebook();
  return (
    <label className={styles.name}>
      Search contact by name
      <input
        type="text"
        name="filter"
        placeholder="Enter Name"
        value={filter}
        onChange={event => setFilter(event.target.value)}
        className={styles.input}
      />
    </label>
  );
}
ContactFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
