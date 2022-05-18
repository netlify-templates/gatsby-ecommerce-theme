import React from 'react';
import { Link, navigate } from 'gatsby';
import * as styles from './BlogPreview.module.css';

const BlogPreview = (props) => {
  const {image, altImage, title, link, category, showExcerpt, excerpt} = props;

  const handleClick = () => {
    navigate('/blog/sample');
  };

  return (
    <div className={styles.root} onClick={handleClick}>
        <img 
          className={styles.blogPreviewImage} 
          alt={altImage} 
          src={image}
          role={'presentation'} 
        />
        <span className={styles.category}>{category}</span>
        <h4 className={styles.title}><Link to={link}>{title}</Link></h4>
        {showExcerpt && 
          <p className={styles.excerpt}>
            {excerpt}
          </p>
        }
    </div>
  );
};

export default BlogPreview;
