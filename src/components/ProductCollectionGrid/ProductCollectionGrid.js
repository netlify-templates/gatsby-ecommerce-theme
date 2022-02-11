import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection image={'/static/collections/collection1.png'} title={'Men'} text={'SHOP NOW'} link={'/shop'} />
      <ProductCollection image={'/static/collections/collection2.png'} title={'Women'} text={'SHOP NOW'} link={'/shop'} />
      <ProductCollection image={'/static/collections/collection3.png'} title={'Accessories'} text={'SHOP NOW'} link={'/shop'} />
      <ProductCollection image={'/static/collections/collection4.png'} title={'Simple Cotton'} text={'SHOP NOW'} link={'/shop'} />
    </div>
  );
};

export default ProductCollectionGrid;
