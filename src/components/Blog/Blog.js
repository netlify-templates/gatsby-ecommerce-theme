import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './Blog.module.css';

const Blog = (props) => {
  const { title, category, image, alt, children } = props;
  return (
    <div className={styles.root}>
      <span className={styles.category}>{category}</span>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imageContainer}>
        <img src={image} alt={alt} />
      </div>
      <div>{children}</div>
      <div className={styles.footerContainer}>
        <span>Share with:</span>
        <div className={styles.socialMediaListContainer}>
          <div className={styles.socialMediaIconContainer}>
            <Icon symbol={'twitterinverse'}></Icon>
          </div>
          <div className={styles.socialMediaIconContainer}>
            <Icon symbol={'facebookinverse'}></Icon>
          </div>
          <div className={styles.socialMediaIconContainer}>
            <Icon symbol={'pinterestinverse'}></Icon>
          </div>
        </div>
        <Button onClick={() => navigate('/blog')} level={'secondary'}>
          back to blog
        </Button>
      </div>
    </div>
  );
};

export default Blog;
