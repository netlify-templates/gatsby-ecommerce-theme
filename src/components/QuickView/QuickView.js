import React, { useState } from 'react';

// import BoxOption from '../BoxOption';
import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
// import Swatch from '../Swatch';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import { generateMockProductData } from '../../helpers/mock';
import * as styles from './QuickView.module.css';


const QuickView = (props) => {

  const {close} = props; 
  const sampleProduct = generateMockProductData(1, 'sample')[0];

  const [activeSwatch, setActiveSwatch] = useState(sampleProduct.colorOptions[0]);
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);

  const handleAddToBag = () => {
    close();
    // add to context
  }

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{sampleProduct.name}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={sampleProduct.price}></CurrencyFormatter>
          </div>
          <div className={styles.productImageContainer}>
            <img alt={sampleProduct.alt} src={sampleProduct.image}></img>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <SwatchList 
            swatchList={sampleProduct.colorOptions}
            activeSwatch={activeSwatch}
            setActiveSwatch={setActiveSwatch}
          />
        </div>

        <div className={styles.sectionContainer}>
          <SizeList 
            sizeList={sampleProduct.sizeOptions}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div>

        <Button onClick={()=>handleAddToBag()} fullWidth level={'primary'}>Add to Bag</Button>
      </div>
    </div>
  );
};

export default QuickView;
