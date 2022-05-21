import * as React from 'react';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import * as styles from './styling.module.css';

const StylingPage = () => {
  return (
    <Layout>
      <Container size={'large'}>
        <div className={styles.root}>
          <h1>Styling Guide</h1>
          <div className={styles.grid}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <div className={'quote'}>Quote</div>
          </div>
          <div className={styles.grid}>
            <p className={'b1'}>Body 1</p>
            <p className={'b2'}>Body 2</p>
            <p className={'b3'}>Body 3</p>
            <p className={'b4'}>Body 4</p>
            <p className={'buttonText'}>Button</p>
          </div>
          <h2>Branding Guide</h2>
          <div className={styles.grid4}>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-black)' }}
            >
              <span className={styles.text}>Black</span>
              <span className={styles.text}>#000000</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-gold)' }}
            >
              <span className={styles.text}>Gold</span>
              <span className={styles.text}>#B59F66</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-dark-grey)' }}
            >
              <span className={styles.text}>Tarmak</span>
              <span className={styles.text}>#545250</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-light-grey)' }}
            >
              <span>Milk</span>
              <span>#FCFAF6</span>
            </div>
          </div>
          <h2>Buttons</h2>
          <div className={styles.grid}>
            <Button level={'primary'}>Enabled - Primary</Button>
            <Button level={'primary'}>Hovered - Primary</Button>
            <Button level={'primary'} disabled>
              Disabled - Primary
            </Button>
            <Button level={'secondary'}>Enabled - Secondary</Button>
            <Button level={'secondary'}>Hovered - Secondary</Button>
            <Button level={'secondary'} disabled>
              Disabled - Secondary
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StylingPage;
