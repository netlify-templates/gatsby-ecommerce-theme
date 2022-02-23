import React from 'react';
import { Link } from 'gatsby';

import * as styles from './ThemeLink.module.css';

const ThemeLink = ({children, to, onClick, isActive}) => {

  return (
      <Link onClick={onClick} className={`${styles.link} ${isActive === true ? styles.active: ''}`} to={to}>{children}</Link>
  );
};

export default ThemeLink;
