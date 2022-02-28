import React from 'react';
import * as styles from './Banner.module.css';
import Title from '../Title';

const Banner = (props) => {
  
  const {maxWidth, name, subtitle, color, bgImage, height, bgColor='var(--standard-light-grey)', hideSubtitleOnMobile = true} = props;

  const customStyling = {
    backgroundColor: bgColor,
    backgroundImage: bgImage !== undefined ? `url(${bgImage})` : 'none',
    height: height,
  }

  return (
    <div className={styles.root} style={customStyling}>
      <Title 
        maxWidth={maxWidth}
        name={name}
        subtitle={subtitle}
        color={color}
        hideSubtitleOnMobile={hideSubtitleOnMobile}
        marginBottom={'0px'}
      />
    </div>
  );
};

export default Banner;