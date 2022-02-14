import React from 'react';
import * as styles from './Banner.module.css';
import Button from '../Button';

const Banner = (props) => {
  
  const {title, subtitle, ctaText, ctaAction, image, maxWidth, ctaStyle} = props;
  return (
    <div className={styles.root} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.content} style={{maxWidth: maxWidth}}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {ctaText && <Button 
          className={`${styles.ctaButton} ${ctaStyle}`} 
          level={'primary'} onClick={ctaAction}>
            {ctaText}
        </Button>}
      </div>
    </div>
  );
};

export default Banner;
