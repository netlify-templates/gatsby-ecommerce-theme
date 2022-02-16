import React from 'react';
import Icon from '../Icons/Icon';
import * as styles from './Checkbox.module.css';

const Checkbox = (props) => {
  const { value, label, id, name, action, isChecked } = props;
  return (
      <div className={styles.checkboxWrapper}>
          <div className={styles.inputWrapper}>
              <input type="checkbox" className={styles.input} 
                id={id} 
                value={value} 
                name={name} 
                data-label={label} 
                onChange={(e) => action(e)}
                checked={isChecked}
              />
              <span className={styles.box} role="presentation">
                <Icon symbol="check" />
              </span>
          </div>
          <label className={styles.label} forhtml={id}>{label}</label>
      </div>
  )
};

export default Checkbox;
