import React, {useState} from 'react';

import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = (props) => {

  const [qty, setQty] = useState(1);

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
  }
  
  return (
    <div className={styles.root}>
      <div className={styles.iconContainer} role={'presentation'} onClick={() => {
        if(qty <= 1) return;
        setQty(qty-1);
      }}>
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input onChange={(e) => handleOnChange(e)} type={'number'} value={qty}></input>
      </div>
      <div role={'presentation'} onClick={() => setQty(qty+1)} className={styles.iconContainer}>
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
