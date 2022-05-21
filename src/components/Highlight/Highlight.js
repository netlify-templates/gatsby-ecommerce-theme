import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Highlight.module.css';

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    description,
    textLink,
    link,
  } = props;

  return (
    <div className={styles.root}>
      <img alt={altImage} src={image} className={styles.highlightImage} />
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>{textLink}</Link>
        <img
          className={styles.miniImage}
          alt={miniImageAlt}
          src={miniImage}
        ></img>
      </div>
    </div>
  );
};

export default Highlight;
