import React from 'react';
import * as styles from './Swatch.module.css';

const Swatch = (props) => {
  const { data, setActiveSwatch, isActive } = props;

  return (
    <button
      className={`${styles.root} ${isActive === true ? styles.isActive : ''}`}
      onClick={() => setActiveSwatch(data)}
    >
      <div
        style={{ backgroundColor: data.color }}
        className={styles.circle}
      ></div>
    </button>
  );
};

export default Swatch;
