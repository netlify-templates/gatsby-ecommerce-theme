import * as React from "react"

import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard"

import image from '../images/productImagePLaceHolder.jpg';

const IndexPage = () => {
  return (
      <Layout>
        <ProductCard 
          image={image} 
          name={'Relaxed-fit graphic T-shirt'}
          price={32}
          originalPrice={64}
          meta={'+ 2 colors'}
        />
        <ProductCard 
          image={image} 
          name={'Relaxed-fit graphic T-shirt'}
          price={32}
          meta={'+ 2 colors'}
        />
      </Layout>
  )
}

export default IndexPage
