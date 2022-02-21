import React from 'react';

import Hero from '../components/Hero';

import * as styles from './about.module.css';

import Layout from "../components/Layout/Layout";

const AboutPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero 
          maxWidth={'900px'}
          image={'/about.png'} 
          title={`Geneva \n A British brand since 1860`} 
        />
      </div>
    </Layout>
  );
};

export default AboutPage;
