import React from 'react';
import * as styles from './Chip.module.css';

import Icon from '../Icons/Icon';

const Chip = (props) => {
  const { name, close } = props;
  return (
    <div className={styles.root} role={'presentation'} onClick={close}>
      <span>{name}</span>
      <Icon symbol={'cross'}></Icon>
    </div>
  );
};

export default Chip;
