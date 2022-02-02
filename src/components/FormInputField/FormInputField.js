import React from 'react';

import Icon from '../Icons/Icon';
import * as styles from './FormInputField.module.css';

const FormInputField = ({
  id,
  type = 'text',
  labelName,
  value,
  pattern,
  min,
  max,
  handleChange,
  placeholder,
  disabled,
  note,
  error,
  icon,
}) => {
  return (
    <div className={`formField ${styles.formField}`}>
      {labelName !== undefined && 
      <label htmlFor={id} className={styles.label}>
        {labelName}
      </label>}
      {((type === 'text') || (type === 'input')) && (
        <input
          id={id}
          name={id}
          type="text"
          value={value}
          pattern={pattern}
          placeholder = {placeholder}
          className={`${styles.input} ${ icon ? styles.conditionalIconPadding : ''} ${error && error ? styles.fieldRequired : ''}`}
          onChange={e => handleChange(id, e.target.value)}
          disabled={disabled}
        />
      )}
      {(type === 'number') && (
        <input
          id={id}
          name={id}
          type="number"
          min={min}
          max={max}
          value={value}
          pattern={pattern}
          placeholder = {placeholder}
          className={`${styles.input} ${error && error ? styles.fieldRequired : ''}`}
          onChange={e => handleChange(id, e.target.value)}
          disabled={disabled}
        />
      )}
      {(type === 'password') && (
        <input 
          id={id}
          name={id}
          type="password" 
          value={value}
          placeholder = {placeholder}
          pattern={pattern}
          className={`${styles.input} ${error && error ? styles.fieldRequired : ''}`}
          onChange={e => handleChange(id, e.target.value)}
          disabled={disabled}
        />
      )}
      {(type === 'email') && (
        <input 
          id={id}
          name={id}
          type="email"
          value={value}
          pattern={pattern}
          placeholder = {placeholder}
          className={`${styles.input} ${error ? styles.fieldRequired : ''}`}
          onChange={e => handleChange(id, e.target.value)}
          disabled={disabled}
        />
      )}
      {(type === 'textarea') && (
        <textarea
          id={id}
          name={id}
          value={value}
          pattern={pattern}
          className={`${styles.textarea} ${error ? styles.fieldRequired : ''}`}
          onChange={e => handleChange(id, e.target.value)}
          disabled={disabled}
        /> 
      )}
      {note && (
        <span className={styles.note}>{note}</span>
      )}
      {error && (
        <span className={'error'}>{error}</span>
      )}
      {icon && (
        <div className={styles.iconContainer}>
          <Icon symbol={icon} />
        </div>
      )}
    </div>
  );
};

export default FormInputField;
