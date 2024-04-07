import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'Friends of Sydney: Flora Fricker'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  London-based floral designer Flora Fricker champions seasonal
                  British flowers and UK producers in her beautiful and
                  sustainable creations. This season, we worked with Flora to
                  style Sunspel stores for Christmas, for which she produced
                  eye-catching sustainably sourced wreaths.
                </p>
                <p className={styles.blogParagraph}>
                  Delaware limited liability company (The Sydney) collects
                  personal information that you voluntarily provide when
                  applying or registering for an account with The Upside or
                  making a purchase on The Upside website; www.theupside.com
                  (the Website).
                </p>
                <p className={styles.blogParagraph}>
                  This Privacy Policy (Privacy Policy) outlines how your
                  information is collected, used and disclosed when you access
                  or use our Services as defined in our Terms. This information
                  is collected, used and disclosed in accordance with the
                  Privacy Act 1988 (Cth) (Privacy Act).
                </p>
                <p className={styles.blogParagraph}>
                  This Privacy Policy is incorporated by reference into our
                  Terms. Any capitalized terms not defined in this Policy are
                  defined in the Terms. You agree to comply with all Terms when
                  accessing or using our Services, including this Privacy
                  Policy.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Lorem ipsum</h2>
                <p className={styles.blogParagraph}>
                  Our Services, including but not limited to the registration of
                  an account with us or placing of an order, is not intended to
                  be used by children under the age of 13. When a visitor
                  indicates an age under 13, the registration process for The
                  Upside website cannot be completed, and no personally
                  identifying information is collected in conjunction with that
                  attempted submission except that we retain e-mail addresses of
                  such persons (and record of access attempts) for purposes of
                  denying registration. Otherwise, we do not knowingly collect
                  personally identifiable information from visitors under the
                  age of 13.
                </p>
                <p className={styles.blogParagraph}>
                  If you are under 18, any use of our Services must be with the
                  involvement of a parent or guardian. By accessing or using our
                  Website, you warrant and represent to us that you are over the
                  age of 18 years and you have the right, authority and legal
                  capacity to enter into a legally binding agreement and to
                  abide by this Privacy Policy.
                </p>
                <p className={styles.blogParagraph}>
                  The Upside collects, uses and discloses information regarding
                  users aged 13-18 in the same manner as it does for adults.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
