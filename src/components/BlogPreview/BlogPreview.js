import React from 'react';
import { Link } from 'gatsby';
import * as styles from './BlogPreview.module.css';

const BlogPreview = (props) => {
  const {image, altImage, title, link, category} = props;
  return (
    <div className={styles.root}>
      <img className={styles.blogPreviewImage} alt={altImage} src={image} />
      <span className={styles.category}>{category}</span>
      <h4 className={styles.title}>{title}</h4>
      <Link className={styles.link} to={link}>read more</Link>
    </div>
  );
};

export default BlogPreview;
