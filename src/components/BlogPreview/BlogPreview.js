import React from 'react';
import { Link, navigate } from 'gatsby';
import * as styles from './BlogPreview.module.css';

const BlogPreview = (props) => {
  const {image, altImage, title, link, category, hideReadMoreOnWeb, showExcerpt, excerpt} = props;
  return (
    <div className={styles.root}>
        <img 
          onClick={() => navigate(link)} 
          className={styles.blogPreviewImage} 
          alt={altImage} 
          src={image}
          role={'presentation'} 
        />
        <span className={styles.category}>{category}</span>
        <h4 className={styles.title}>{title}</h4>
        {showExcerpt && 
          <p className={styles.excerpt}>
            {excerpt}
          </p>
        }
        <Link className={`${styles.link} ${hideReadMoreOnWeb === true ? styles.hideReadMoreOnWeb : ''}`} to={link}>
          read more
        </Link>
    </div>
  );
};

export default BlogPreview;
