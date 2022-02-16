import React, { useEffect } from 'react';

import Icon from '../Icons/Icon';
import * as styles from './Drawer.module.css';

const Drawer = ({children, visible, closeQuickView}) => {

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if(e?.keyCode === undefined) return;
    if(e.keyCode === 27) closeQuickView();
  }
  
  return (
    <div className={`${styles.root} ${visible === true ? styles.show : styles.hide}`}>
      <div 
        className={`${styles.overlay} ${visible === true ? styles.showOverlay : styles.hide}`}
        role={'presentation'}
        onClick={closeQuickView}
      >
        <div className={styles.iconContainer}>
          <Icon symbol={'cross'}></Icon>
        </div>
      </div>
      <div className={`${styles.content} ${visible === true ? styles.showContent : styles.hideContent}`}>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
