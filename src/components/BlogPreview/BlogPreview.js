import React from 'react';
import { Link, navigate } from 'gatsby';
import * as styles from './BlogPreview.module.css';

const BlogPreview = (props) => {
  const { image, altImage, title, link, category, showExcerpt, excerpt } =
    props;

  const handleClick = () => {
    navigate(link);
  };

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className={styles.root} onClick={handleClick}>
      <img
        className={styles.blogPreviewImage}
        alt={altImage}
        src={image}
        role={'figure'}
      />
      <span className={styles.category}>{category}</span>
      <h4 className={styles.title}>
        <Link to={link}>{title}</Link>
      </h4>
      {showExcerpt && <p className={styles.excerpt}>{excerpt}</p>}
    </div>
  );
};

export default BlogPreview;
