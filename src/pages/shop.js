import React from 'react';
import * as styles from './shop.module.css';

import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Title from '../components/Title';
import Layout from "../components/Layout";
import ProductCardGrid from '../components/ProductCardGrid';

import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';

const shopPage = (props) => {

  const data = generateMockProductData(6, 'woman');
  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {link: '/', label:'Woman'}, {label:'Sweaters'}]} />
        </Container>
        <div className={styles.bannerContainer}>
          <Title 
            maxWidth={'650px'}
            name={`Woman's Sweaters`} 
            subtitle={'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'} 
            />
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>476 items</span>
            <div className={styles.controllersContainer}>
              <div className={styles.iconContainer}>
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div className={styles.iconContainer}>
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>
          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>
          <div class={styles.productContainer}>
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>LOAD MORE</Button>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default shopPage;
