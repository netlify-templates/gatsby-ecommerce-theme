import React from 'react';
import { Link } from 'gatsby';

import * as styles from './ThemeLink.module.css';

const ThemeLink = ({children, to, onClick, isActive, themeRef}) => {

  return (
    <div className={`${styles.root} ${isActive === true ? styles.active: ''}`} ref={themeRef}>
      <Link onClick={onClick} className={`${styles.link}`} to={to}>{children}</Link>
    </div>
  );
};

export default ThemeLink;
