import React from 'react';
import * as styles from './Slider.module.css';
import Slick from "react-slick";

const Slider = (props) => {

  const { children } = props;

  const customPaging = () => {
    return(<div className={styles.mobilePagination}></div>)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `${styles.customDots}`,
    customPaging: customPaging
  };

  return (
    <div className={styles.root}>
        <Slick {...settings}>
          {children}
        </Slick>
    </div>
  );
};

export default Slider;
