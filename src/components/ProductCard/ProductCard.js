import React from 'react';
import * as styles from './ProductCard.module.css';

import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {

  const { image, imageAlt, name, price, originalPrice, meta } = props;

  return (
    <div className={styles.root}>
      <img src={image} alt={imageAlt}></img>
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
