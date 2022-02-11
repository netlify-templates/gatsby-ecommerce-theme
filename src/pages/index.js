import * as React from "react"

import AttributeGrid from '../components/AttributeGrid';
import Container from "../components/Container";
import Banner from '../components/Banner';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Button from '../components/Button';
import Highlight from '../components/Highlight';
import Layout from "../components/Layout/Layout";
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';

import { generateMockBlogData, generateMockProductData } from "../helpers/mock";

import * as styles from './index.module.css';
import { Link } from "gatsby";

const IndexPage = () => {

  const newArrivals = generateMockProductData();
  const blogData = generateMockBlogData();

  return (
      <Layout>

        {/* Hero Container */}
        <Banner image={'/banner1.png'}>
          <div className={styles.heroContainer}>
            <h2 style={{maxWidth: "500px"}}>Essentials for a cold winter</h2>
            <span> Discover Autumn Winter 2021 </span>
            <Button className={styles.ctaButton} level={'primary'}>SHOP NOW</Button>
          </div>
        </Banner>

        {/* Message Container */}
        <div className={styles.messageContainer}>
          <p>This is a demonstration of the geneva theme for verse by <span className={styles.gold}>matter design.</span></p>
          <p>wear by <span className={styles.gold}>sunspel</span> and <span className={styles.gold}>scotch&soda</span></p>
        </div>

        {/* Collection Container */}
        <div className={styles.collectionContainer}>
          <Container size={'large'}>
            <div className={styles.contentTitleContainer}>
              <h2 className={styles.contentTitle}>New Collection</h2>
            </div>
            <ProductCollectionGrid />
          </Container>
        </div>

        {/* New Arrivals */}
        <div className={styles.newArrivalsContainer}>
          <Container>
            <div className={styles.contentTitleContainer}>
              <h2 className={styles.contentTitle}>New Arrivals</h2>
              <Link to={'/shop'}>view all</Link>
            </div>
            <ProductCardGrid height={480} columns={3} data={newArrivals} />
          </Container>
        </div>

        {/* Highlight  */}
        <div className={styles.highlightContainer}>
          <Container size={'large'}>
            <Highlight 
              image={'/highlight.png'}
              altImage={'highlight image'}
              miniImage={'/highlightmin.png'}
              miniImageAlt={'mini highlight image'}
              title={'Luxury Knitwear'}
              description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
              textLink={'shop now'}
              link={'/shop'}
            />
          </Container>
        </div>

        {/* Promotion */}
        <Banner image={'/banner2.png'}>
          <div className={styles.heroContainer}>
            <h2>-50% off All Essentials</h2>
            <div className={styles.linkContainers}>
              <Link to={'/shop'}>WOMAN</Link>
              <Link to={'/shop'}>MAN</Link>
            </div>
          </div>
        </Banner>

        {/* Quote */}
        <Quote 
          bgColor={'var(--standard-light-grey)'}
          title={'about geneva'}
          quote={"“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”"}
        />

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <div className={styles.contentTitleContainer}>
              <h2 className={styles.contentTitle}>Journal</h2>
              <span>Notes on life and style</span>
            </div>
            <BlogPreviewGrid data={blogData}/>
          </Container>
        </div>

        {/* Promotion */}
        <div className={styles.sustainableContainer}>
            <Banner image={'/banner3.png'}>
              <div className={styles.heroContainer}>
                <h2>We are Sustainable</h2>
                <span> From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.</span>
                <Button className={styles.ctaButton} level={'primary'}>READ MORE</Button>
              </div>
            </Banner>
        </div>

        {/* Social Media */}
        <div className={styles.socialContainer}>
          <div className={styles.contentTitleContainer}>
            <h2 className={styles.contentTitle}>Styled by You</h2>
            <span>Tag @geneva to be featured.</span>
          </div>
          <div className={styles.socialContentGrid}>
            <img src={`/social/socialMedia1.png`} alt={'social media 1'}  />
            <img src={`/social/socialMedia2.png`} alt={'social media 2'}  />
            <img src={`/social/socialMedia3.png`} alt={'social media 3'}  />
            <img src={`/social/socialMedia4.png`} alt={'social media 4'}  />
          </div>
        </div>

        <div className={styles.attributeContainer}>
          <AttributeGrid />
        </div>
      </Layout>
  )
}

export default IndexPage
