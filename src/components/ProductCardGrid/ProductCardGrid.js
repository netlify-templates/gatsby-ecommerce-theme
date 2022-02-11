import React from 'react';
import * as styles from './ProductCardGrid.module.css';

import ProductCard from '../ProductCard';

const ProductCardGrid = (props) => {

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
          />);
      })}
    </div>
  );
};

export default ProductCardGrid;
