import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Sydney \n A British brand since 1860`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 1860, Sydney is an innovative British brand with a
              contemporary edge. We make timeless everyday luxury clothing.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first T-shirts and spent decades
              perfecting the feel of the cotton. Today we are the only brand
              that makes T-shirts in its own factory in the UK. And we do this
              in the same factory we have occupied since 1937.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                Sunspel produced some of the world's earliest T-shirts. In the
                late 1800s the business made luxury tunics and undershirts from
                lightweight Sea Island cotton for export to the Far East and
                other warm climates. While these garments initially had silk
                buttoned plackets, these were removed in the early 1900s and
                replaced with simple bound necks to reduce manufacturing costs -
                creating the T-shirt. We've supplied the world as the T-shirt
                has evolved from underwear to outerwear, from symbol of youthful
                rebellion to everyday wardrobe staple, and we've spent decades
                refining its every last aspect.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Thomas Hill, had both an eye for quality and a
                desire to innovate. As well as using the finest fibres such as
                Sea Island cotton, cashmere and silk, he invented his own
                fabrics. Sunspel continues this commitment to innovation today
                and our unique fabrics include: Q100 Sea Island cotton, Q82
                Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit
                cellular cotton. The technology behind these fabrics remains
                unchanged today and all Sunspel products use the finest cottons,
                wools and fibres.
              </p>
              <p>
                Made in Long Eaton, England and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Sunspel T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 years spent perfecting fabric, fit and style, the
                Sunspel Classic T-shirt is recognised as the finest in the
                world.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
