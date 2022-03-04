import React from 'react';
import * as styles from './favorites.module.css';

import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Layout from "../../components/Layout/Layout";

const FavoritesPage = (props) => {
  
  const sampleFavorite1 = {
    color: 'Anthracite Melange',
    size: 'XS',
    img: "/products/shirt1.jpg",
    alt: 'favorite 1',
  };

  const sampleFavorite2 = {
    color: 'Purple Pale',
    size: 'XS',
    img: "/products/shirt2.jpg",
    alt: 'favorite 2',
  };

  const sampleFavorite3 = {
    color: 'Moss Green',
    size: 'S',
    img: "/products/shirt3.jpg",
    alt: 'favorite 3',
  };


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'}>
          <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {link: '/account/favorites', label:'Favorites'}]} />
          <h1>Favorites</h1>
          <div className={styles.favoriteListContainer}>
            <FavoriteCard {...sampleFavorite1} />
            <FavoriteCard {...sampleFavorite2} />
            <FavoriteCard {...sampleFavorite3} />
            <FavoriteCard {...sampleFavorite2} />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
