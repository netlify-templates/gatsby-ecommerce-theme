import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Icon from '../Icons/Icon';
import Container from '../Container';
import HeaderData from './header.json';
import ExpandedMenu from '../ExpandedMenu';
import * as styles from './Header.module.css';

const Header = (prop) => {
  
  const [showMenu, setShowMenu] = useState(true);
  const [menu, setMenu] = useState();
  const bannerMessage = 'Free shipping worldwide';

  // hide menu onscroll
  useEffect(() => {
      const onScroll = () => setShowMenu(false);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHover = (navObject) => {
    if(navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
    }
  }

  return (
    <div className={styles.root} >
      <div className={styles.headerMessageContainer}>
        <span>{bannerMessage}</span>
      </div>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.linkContainers}>
            <nav>
              {HeaderData.map((navObject) => 
                <Link
                  key={navObject.menuLink}
                  onMouseLeave={() => setShowMenu(false)} onMouseEnter={() => handleHover(navObject)} 
                  className={styles.navLink} to={navObject.menuLink}>
                  {navObject.menuLabel}
                </Link>)}
            </nav>
          </div>
          <div className={styles.brandContainer}>
            <h4>GENEVA</h4>
          </div>
          <div className={styles.actionContainers}>
            <Icon symbol={'bag'}></Icon>
            <Icon symbol={'user'}></Icon>
            <Icon symbol={'heart'}></Icon>
            <Icon symbol={'search'}></Icon>
          </div>
        </div>
        </Container>
        <div
          role={'presentation'}
          onMouseLeave={() => setShowMenu(false)} 
          onMouseEnter={() => setShowMenu(true)}  
          className={`${styles.menuContainer} ${showMenu === true ? styles.show : ''}`}>
          <Container size={'large'} spacing={'min'}>
            <ExpandedMenu menu={menu} />   
          </Container>  
        </div>
    </div>
  );
};

export default Header;
