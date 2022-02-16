import React from 'react';
import * as styles from './ProductCard.module.css';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {

  const { image, imageAlt, name, price, originalPrice, meta, showQuickView, height=580 } = props;

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img style={{height:`${height}px`}} src={image} alt={imageAlt}></img>
        <div className={styles.bagContainer} role={'presentation'} onClick={showQuickView}>
          <Icon symbol={'bagPlus'} />
        </div>
        <div className={styles.heartContainer}>
          <Icon symbol={'heart'} />
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.prices}>
          <span className={`${originalPrice !== undefined ? styles.salePrice: ''}`}>
            <CurrencyFormatter amount={price}></CurrencyFormatter>
          </span>
          {originalPrice && <span className={styles.originalPrice}>
            <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
          </span>}
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;
