import React, {useState} from 'react';
import * as styles from './AddressCard.module.css';

const AddressCard = (props) => {
  const {name, address, state, postal, country, company} = props;

  return (
    <div className={`${styles.root}`}>
      <span className={styles.name}>{name}</span>
      <span>{company}</span>
      <span>{address}</span>
      <span>{`${state} ${postal}`}</span>
      <span>{country}</span>
      <div className={styles.actionContainer}>
        <span>Edit</span>
        <span>Remove</span>
      </div>
    </div>
  );
};

export default AddressCard;
