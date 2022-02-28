import React, { useState } from 'react';
import { Link } from 'gatsby';

import Config from '../../config.json';
import Icon from '../Icons/Icon';

//TO DO: refactor this to handle multiple nested links to avoid hardcoding 'depth'
// have to restructure config.json

import * as styles from './MobileNavigation.module.css';

const MobileNavigation = (props) => {

  const [subMenu, setSubMenu] = useState();
  const [category, setCategory] = useState();
  const [depth, setDepth] = useState(0);

  return (
    <div className={styles.root}>
      <nav>
        <div className={styles.headerAuth}>
          {depth === 0 &&
          <div className={styles.authLinkContainer}>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
          </div>}

          {depth === 1 && 
            <div 
              className={styles.previousLinkContainer} 
              onClick={()=>setDepth(0)} 
              role={'presentation'}>
              <div className={styles.previousIcon}>
                <Icon symbol={'caret'}></Icon>
              </div>
              <span>{category.menuLabel}</span>
            </div>
          }

          {depth === 2 &&
            <div 
              className={styles.previousLinkContainer} 
              onClick={()=>setDepth(1)} 
              role={'presentation'}>
              <div className={styles.previousIcon}>
                <Icon symbol={'caret'}></Icon>
              </div>
              <span>{subMenu.categoryLabel}</span>
            </div>
          }
        </div>

        <div className={styles.mobileNavContainer}>
        {/* dynamic portion */}
        { depth === 0 &&
          <div>
          {Config.headerLinks.map((navObject) => {
            const hasSubmenu = navObject.category?.length !== undefined ? true : false;
            return(
            <Link
              key={navObject.menuLink}
              className={`${styles.mobileLink}`} 
              to={hasSubmenu === true ? '' : navObject.menuLink}
              onClick={() => {
                if(hasSubmenu) {
                  setDepth(1);
                  setCategory(navObject);
                }
              }}
            >
              {navObject.menuLabel}
              { hasSubmenu && <Icon symbol={'caret'}></Icon>}
            </Link>
            )})}
            <div className={styles.navFooter}>
              <Link to={'/favorites'}>
                <Icon symbol={'heart'} />
                Favorites (0)
              </Link>
            </div>
          </div>
        }

          {depth === 1 && 
            category.category.map((menuItem) => {
              return(
                <Link key={menuItem.categoryLabel} to={''} onClick={() => {
                  setDepth(2)
                  setSubMenu(menuItem)
                }} className={`${styles.mobileLink}`}>
                  {menuItem.categoryLabel}
                  <Icon symbol={'caret'}></Icon>
                </Link>
              )
            })
          }

            {depth === 2 &&
              subMenu.submenu.map((menuItem) => {
                return(
                  <Link key={menuItem.menuLabel} to={menuItem.menuLink} className={`${styles.edgeLink}`}>
                    {menuItem.menuLabel}
                  </Link>
                )
              })
            }
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
