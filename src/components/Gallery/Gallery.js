import React from 'react';
import * as styles from './Gallery.module.css';

const Gallery = (props) => {
  const {images} = props;
  return (
    <div className={styles.root}>
      {images?.map((imageObject, index) => {
        return(
          <div key={index} className={styles.imageContainer}>
            <img alt={imageObject.alt} src={imageObject.image} />
          </div>
        )
      })}
    </div>
  );
};

export default Gallery;
