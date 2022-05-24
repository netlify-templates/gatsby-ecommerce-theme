import React from 'react';
import * as styles from './Swatch.module.css';

const Swatch = (props) => {
  const { data, setActiveSwatch, isActive } = props;

  return (
    <div
      className={`${styles.root} ${isActive === true ? styles.isActive : ''}`}
      onClick={() => setActiveSwatch(data)}
    >
      <div
        style={{ backgroundColor: data.color }}
        className={styles.circle}
      ></div>
    </div>
  );
};

export default Swatch;
