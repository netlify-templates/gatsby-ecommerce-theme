import React from 'react';
import * as styles from './faq.module.css';

import Layout from "../components/Layout/Layout";
import Banner from '../components/Banner';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner 
          maxWidth={'650px'}
          name={`How to use this theme`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>This theme is proudly brought to you by the team at <Button target={true} href="https://matterdesign.com.au/">Matter Design & Digital</Button> (Matter.).</span>
            <div className={styles.subSection}>
                <p>Please see the terms of use below -</p>

                <p>The Sydney theme is available for a JAMStack architecture and is compatible with the following e-commerce platforms:</p>
                <ul className='bullets'>
                    <li>BigCommerce</li>
                    <li>VTEX (roadmap)</li>
                    <li>Commercetools (roadmap)</li>
                </ul>
                <p>The Sydney theme is available with back end microservices connected through Matter.’s own JAMM.™ <Button target={true} href="https://matterdesign.com.au/jamm-matter-launches-a-jamstack-inspired-headless-architecture/">frontend Headless framework</Button>.</p>

                <p>JAMM.™ can connect, orchestrate and publish data from any back-end service. JAMM.™ creates a server-side rendered website that is fast, stable and scalable for high traffic events.</p>

                <p>Compatible microservices include:</p>

                <h3>Advanced Search:</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://www.algolia.com/">Algolia</Button></li>
                    <li><Button target={true} href="https://searchspring.com/">Searchspring</Button> (roadmap)</li>
                    <li><Button target={true} href="https://www.attraqt.com/">XO</Button> (roadmap)</li>
                    <li><Button target={true} href="https://www.syte.ai/">Syte</Button> (roadmap)</li>
                </ul>

                <h3>Product Information Management (PIM):</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://www.akeneo.com/?utm_source=matterdesign&utm_medium=marketplace&utm_campaign=netlify-jamm-theme">Akeneo</Button></li>
                </ul>

                <h3>Content Management Systems (CMS):</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://www.contentful.com/">Contentful</Button></li>
                    <li><Button target={true} href="https://wordpress.com/">WordPress</Button></li>
                    <li><Button target={true} href="https://www.sanity.io/">Sanity</Button></li>
                    <li><Button target={true} href="https://builder.io/">Builder.io</Button></li>
                </ul>

                <h3>Marketing Automation:</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://www.klaviyo.com/partner/signup?utm_source=0010V00002MLrPy&utm_medium=partner">Klaviyo</Button></li>
                    <li><Button target={true} href="https://ortto.com/">Ortto</Button></li>
                    <li><Button target={true} href="https://dotdigital.com/">Dot Digital</Button></li>
                </ul>

                <h3>Customer Support:</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://gorgias.grsm.io/1072065">Gorgias</Button></li>
                    <li><Button target={true} href="https://www.zendesk.com/">Zendesk</Button></li>
                </ul>

                <h3>Reviews and User Generated Content:</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://www.yotpo.com/">Yotpo</Button></li>
                    <li><Button target={true} href="https://www.trustpilot.com/">Trustpilot</Button></li>
                    <li><Button target={true} href="https://www.reviews.io/">Reviews.io</Button></li>
                </ul>
            
                <h3>Stock Availability and Store Locator:</h3>
                <ul className='bullets'>
                    <li><Button target={true} href="https://matterdesign.com.au/localisr-a-geolocation-powered-store-finder-for-bigcommerce/">Localisr.io</Button></li>
                </ul>

                <div className='callout'>
                    <Button target={true} href="https://jamm.matter.design/" level="primary">Read more about JAMM.™</Button>

                    <p>If you have any question regarding the use of this theme please contact us at <Button target={true} href="https://jamm.matter.design/">https://jamm.matter.design/</Button></p>
                </div>
            </div>
        </div>
        </Container>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
