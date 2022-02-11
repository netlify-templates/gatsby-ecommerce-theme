import React from 'react';
import * as styles from './Banner.module.css';

const Banner = ({children, image}) => {
  return (
    <div className={styles.root} style={{backgroundImage: `url(${image})`}}>
      {children}
    </div>
  );
};

export default Banner;
