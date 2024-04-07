import { Link } from 'gatsby';
import React, { useContext } from 'react';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './AddNotification.module.css';
import { toOptimizedImage } from '../../helpers/general';

const AddNotification = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Lambswool Crew Neck Jumper',
    price: 220,
    color: 'Anthracite Melange',
    size: 'XS',
  };

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotif = ctxAddItemNotification.state?.open;

  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Item added to bag</span>
      </div>

      <div className={styles.newItemContainer}>
        <div className={styles.imageContainer}>
          <img alt={sampleCartItem.alt} src={toOptimizedImage(sampleCartItem.image)} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.name}>{sampleCartItem.name}</span>
          <span className={styles.meta}>Color: {sampleCartItem.color}</span>
          <span className={styles.meta}>Size: {sampleCartItem.size}</span>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
          view my bag (1)
        </Button>
        <Button level="primary" href="/cart">
          checkout
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
