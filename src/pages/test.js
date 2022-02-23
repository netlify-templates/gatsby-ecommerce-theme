import React from 'react';
import * as styles from './test.module.css';

import Layout from "../components/Layout/Layout";

const TestPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <p>Enter Content Here</p>
      </div>
    </Layout>
  );
};

export default TestPage;
