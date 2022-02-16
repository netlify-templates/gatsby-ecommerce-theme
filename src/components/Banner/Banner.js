import React from 'react';
import * as styles from './Banner.module.css';
import Title from '../Title';

const Banner = (props) => {
  
  const {maxWidth, name, subtitle, color, bgColor='var(--standard-light-grey)'} = props;
  return (
    <div className={styles.root} style={{backgroundColor: bgColor}}>
      <Title 
        maxWidth={maxWidth}
        name={name}
        subtitle={subtitle}
        color={color}
      />
    </div>
  );
};

export default Banner;