import React, { useState, useEffect, createRef } from 'react';
import { Link, navigate } from 'gatsby';

import Icon from '../Icons/Icon';
import Container from '../Container';
import Config from '../../config.json';
import ExpandedMenu from '../ExpandedMenu';
import FormInputField from '../FormInputField/FormInputField';
import * as styles from './Header.module.css';

const Header = (prop) => {
  
  const [showMenu, setShowMenu] = useState(true);
  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  
  const searchRef = createRef();
  const bannerMessage = 'Free shipping worldwide';
  const searchSuggestions = ['Oversize sweaters', 'Lama Pajamas', 'Candles Cinnamon'];

  const handleHover = (navObject) => {
    if(navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
      setShowSearch(false);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setShowSearch(false);
  }

  // disable active menu when show menu is hidden
  useEffect(() => {
    if(showMenu === false) setActiveMenu(false);
  }, [showMenu])

  // hide menu onscroll
  useEffect(() => {
    const onScroll = () => {
      setShowMenu(false);
      setShowSearch(false);
      setActiveMenu(undefined);
    }
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //listen for show search and delay trigger of focus due to CSS visiblity property
  useEffect(() => {
    if(showSearch === true){
      setTimeout(() => {
        searchRef.current.focus();
      }, 250)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showSearch])

  return (
    <div className={styles.root} >
      <div className={styles.headerMessageContainer}>
        <span>{bannerMessage}</span>
      </div>
      <Container size={'large'} spacing={'min'}>
          <div className={styles.header}>
            <div className={styles.linkContainers}>
              <nav role={'presentation'} onMouseLeave={() => {setShowMenu(false)}}>
                {Config.headerLinks.map((navObject) => 
                  <Link
                    key={navObject.menuLink}
                    onMouseEnter={() => handleHover(navObject)}
                    className={`${styles.navLink} ${activeMenu === navObject.menuLabel ? styles.activeLink : ''}`} 
                    to={navObject.menuLink}>
                    {navObject.menuLabel}
                  </Link>)}
              </nav>
            </div>
            <div className={styles.brandContainer} role={'presentation'} onClick={() => navigate('/')}>
              <h4>GENEVA</h4>
            </div>
            <div className={styles.actionContainers}>
              <div className={styles.iconContainer} role={'presentation'} onClick={()=> {
                searchRef.current.focus();
              }}><Icon symbol={'bag'}></Icon></div>
              <div className={styles.iconContainer}><Icon symbol={'user'}></Icon></div>
              <div className={styles.iconContainer}><Icon symbol={'heart'}></Icon></div>
              <div className={styles.iconContainer} role={'presentation'} onClick={() => {
                  setShowSearch(!showSearch);
                }}>
                <Icon symbol={'search'}></Icon>
              </div>
            </div>
          </div>
          {/* search container */}
          <div className={`${styles.searchContainer} ${showSearch === true ? styles.show : styles.hide}`}>
            <h4>What are you looking for?</h4>
            <form className={styles.searchForm} onSubmit={(e) => handleSearch(e)}>
              <FormInputField
                ref={searchRef}
                icon={'arrow'}
                id={'searchInput'}
                value={search}
                placeholder={''}
                type={'text'}
                handleChange={(_, e) => setSearch(e)}
              />
              </form>
              <div className={styles.suggestionContianer}>
                {searchSuggestions.map((suggestion, index) => 
                  <p key={index} className={styles.suggestion}>
                    {suggestion}
                  </p>)}
              </div>
              <div role={'presentation'} onClick={(e)=> {
                e.stopPropagation();
                setShowSearch(false);
                }} className={styles.backdrop}></div>
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
