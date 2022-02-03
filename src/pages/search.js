import React from "react"
import { parse } from "query-string";

import Breadcrumbs from '../components/Breadcrumbs';
import Layout from "../components/Layout/Layout";
import Container from '../components/Container/Container';
import ProductCard from '../components/ProductCard';

import image1 from '../images/products/product1.jpeg';
import image2 from '../images/products/product2.jpeg';
import image3 from '../images/products/product3.jpeg';

import * as styles from './search.module.css';

const SearchPage = (props) => {
    const params = parse(props.location.search);
    const searchQuery = params.q ? params.q : '';

  return (
    <Layout>
        <div className={styles.root}>
            <Container size={'large'} spacing={'min'}>
                <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {label:`Search results for '${searchQuery}'`}]} />
                <div className={styles.searchLabels}>
                    <h4>Search results for '{searchQuery}'</h4>
                    <span>3 results</span>
                </div>
                <div className={styles.searchResultsContainer}>
                    <ProductCard 
                        price={32} 
                        name={'Relaxed-fit graphic T-Shirt'} 
                        image={image1}
                    />
                    <ProductCard 
                        price={32} 
                        name={'Black sweater'} 
                        image={image2}
                        originalPrice={50}
                    />
                    <ProductCard 
                        price={32} 
                        name={'Black cardigan'} 
                        image={image3}
                        meta={'+ 2 colors'}
                    />
                </div>
            </Container>
        </div>
    </Layout>
  )
}

export default SearchPage
