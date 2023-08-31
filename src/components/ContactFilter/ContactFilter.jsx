import React from 'react';
import styles from './ContactFilter.module.css';
import PropTypes from 'prop-types';

export default function ContactFilter({ filter, setFilter }) {
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
