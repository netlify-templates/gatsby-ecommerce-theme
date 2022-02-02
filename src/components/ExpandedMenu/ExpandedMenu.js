import { Link } from 'gatsby';
import React from 'react';

import Image1 from '../../images/headerPic1.png';
import Image2 from '../../images/headerPic2.png';

import * as styles from './ExpandedMenu.module.css';

const ExpandedMenu = (props) => {
  const {menu} = props;

  if(menu === null || menu === undefined) return <React.Fragment/>;
  return (    
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item) => {
          return(
            <div className={styles.categoryContainer}>
              <span className={styles.categoryName}>
                {item.categoryLabel}
              </span>
              <ul>
                {item.submenu.map((link) => {
                  return(
                  <li>
                    <Link className={styles.menuLink} to={link.menuLink}>
                      {link.menuLabel}
                    </Link>
                  </li>);
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className={styles.imageContainer}>
        <img src={Image1} alt={'header 1'}></img>
        <img src={Image2} alt={'header 2'}></img>
      </div>
    </div>
  );
};

export default ExpandedMenu;
