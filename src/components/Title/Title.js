import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Title.module.css';

const Title = (props) => {

  const {name, subtitle, link, textLink, maxWidth, color='var(--standard-black)'} = props;

  return (
    <div className={styles.root} style={{maxWidth: maxWidth}}>
      <h2 className={styles.title} style={{color: color}}>{name}</h2>
      { subtitle && 
        <span className={`${styles.subtitle}`}>
          {subtitle}
        </span>}
      { link && textLink && 
        <Link className={styles.link} to={link}>{textLink}</Link>
      }
    </div>
  );
};

export default Title;
