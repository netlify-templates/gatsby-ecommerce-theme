 import React from "react"
//  import Helmet from "react-helmet"
 import PropTypes from "prop-types"
  
 import Header from "../Header"
 import Footer from "../Footer"
 import * as styles from './Layout.module.css'

 // CSS not modular here to provide global styles
 import "./Globals.css"
 
 const Layout = ({props, children}) => { 
   return (
     <>
       {/* <Helmet>
         Add any sitewide scripts here
       </Helmet> */}
       <Header/>
        <main className={styles.main}>
          {children}
        </main>
       <Footer />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 