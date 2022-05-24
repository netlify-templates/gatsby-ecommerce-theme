import React from 'react';

import BoxOption from '../BoxOption';
import * as styles from './SizeList.module.css';

const SizeList = (props) => {
  const { sizeList, setActiveSize, activeSize } = props;
  return (
    <div className={styles.root}>
      <div className={styles.sizeLabelContainer}>
        <span className={styles.label}>Size</span>
        <span className={`${styles.label} ${styles.guide}`}>Size Guide</span>
      </div>
      <div className={styles.sizeSelection}>
        {sizeList?.map((sizeOption, index) => {
          return (
            <BoxOption
              key={index}
              data={sizeOption}
              setActive={setActiveSize}
              isActive={activeSize === sizeOption}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SizeList;
