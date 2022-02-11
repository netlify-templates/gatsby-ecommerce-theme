import React from 'react';
import * as styles from './BlogPreviewGrid.module.css';

import BlogPreview from '../BlogPreview';

const BlogPreviewGrid = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.root}>
      {data && data.map((blog) => {
        return(
          <BlogPreview 
            image={blog.image}
            altImage={blog.alt}
            title={blog.title}
            link={blog.link}
            category={blog.category}
          />
        )
      })}
      {/* <BlogPreview 
        image={'/static/banner2.png'}
        category={'design'}
        title={'The new standard of Closing'}
        textLink={'read more'}
        link={'/'}
      /> */}
    </div>
  );
};

export default BlogPreviewGrid;
