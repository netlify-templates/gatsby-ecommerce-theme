import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';

const ProductCardGrid = (props) => {

  const [showQuickView, setShowQuickView] = useState(false);
  const {height, columns = 3, data} = props;
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`
  }

  return (
    <div className={styles.root} style={columnCount}>
      {data && data.map((product, index) => {
        return(
          <ProductCard
            key={index}
            height={height}
            price={product.price}
            imageAlt={product.alt}
            name={product.name} 
            image={product.image}
            meta={product.meta}
            originalPrice={product.originalPrice}
            link={product.link}
            showQuickView={() => setShowQuickView(true)}
          />);
      })}
      <Drawer visible={showQuickView} closeQuickView={() => setShowQuickView(false)}>
        A
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
