import React from 'react';
import * as styles from './favorites.module.css';

import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Layout from "../../components/Layout/Layout";
import ProductCardGrid from '../../components/ProductCardGrid';

import { generateMockProductData } from '../../helpers/mock';

const FavoritesPage = (props) => {
  const sampleData = generateMockProductData(3, 'shirt');

  console.log(sampleData);

  const sampleFavorite = [{
    name: 'Color: Anthracite Melange',
    meta: 'XS',
    img: "/products/shirt1.png",
  }]

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'}>
          <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {link: '/account/favorites', label:'Favorites'}]} />
          <h1>Favorites</h1>
          <ProductCardGrid showSlider={false} height={580} columns={3} data={sampleFavorite} enableActions={true} />
        </Container>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
