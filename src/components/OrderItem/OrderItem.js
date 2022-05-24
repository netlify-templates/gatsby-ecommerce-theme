import React, { useState } from 'react';
import { navigate } from 'gatsby';

import CurrencyFormatter from '../CurrencyFormatter';
import Icon from '../Icons/Icon';
import * as styles from './OrderItem.module.css';

const OrderItem = (props) => {
  const { headerStyling, order } = props;
  const [collapsed, setCollapsed] = useState(false);

  let computedTotal = 0;
  for (let x = 0; x < order.items.length; x++) {
    computedTotal =
      computedTotal + order.items[x].price * order.items[x].quantity;
  }

  const pad = (str, max) => {
    str = str.toString();
    return str.length < max ? pad('0' + str, max) : str;
  };

  return (
    <div
      className={`${styles.root} ${
        collapsed === true ? styles.paddingBottom : ''
      }`}
    >
      <div
        className={`${headerStyling} ${styles.orderHeader}`}
        role={'presentation'}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className={styles.orderMeta}>
          <span className={styles.orderId}>Order #{pad(order.id, 5)}</span>
          <span
            className={styles.orderTotalMeta}
          >{`${order.items.length} products totaling `}</span>
          <span className={styles.total}>
            <CurrencyFormatter amount={computedTotal}></CurrencyFormatter>
          </span>
        </div>
        <div className={styles.od}>
          <span className={styles.mobileLabel}>Order Date</span>
          <span className={styles.orderDate}>{order.orderPlaced}</span>
        </div>
        <span className={styles.lastUpdate}>{order.lastUpdate}</span>
        <div className={styles.st}>
          <span className={styles.mobileLabel}>Status</span>
          <span className={styles.status}>{order.status}</span>
        </div>
        <div
          className={`${styles.toggleContainer} ${
            collapsed === true ? styles.rotate : ''
          }`}
        >
          <Icon symbol={'caret'} />
        </div>
      </div>
      <div
        className={`${styles.detailsContainer} ${
          collapsed === false ? styles.hide : styles.show
        }`}
      >
        <div className={styles.addressDetailContainer}>
          <div className={styles.addressContainer}>
            <span className={styles.addressMeta}>Ship to</span>
            <span className={styles.address}>
              {order.shippingAddress?.name}
            </span>
            <span className={styles.address}>
              {order.shippingAddress?.address}
            </span>
            <span
              className={styles.address}
            >{`${order.shippingAddress?.state} ${order.shippingAddress?.postal}`}</span>
            <span className={styles.address}>
              {order.shippingAddress?.country}
            </span>
          </div>
          <div className={styles.addressContainer}>
            <span className={styles.addressMeta}>Bill to</span>
            <span className={styles.address}>{order.billingAddress?.name}</span>
            <span className={styles.address}>
              {order.billingAddress?.address}
            </span>
            <span
              className={styles.address}
            >{`${order.billingAddress?.state} ${order.billingAddress?.postal}`}</span>
            <span className={styles.address}>
              {order.billingAddress?.country}
            </span>
          </div>
        </div>

        <div className={styles.itemList}>
          {order.items.map((item, index) => {
            return (
              <div className={styles.itemContainer} key={index}>
                <div
                  role={'presentation'}
                  onClick={() => navigate('/product/sample')}
                  className={styles.imageContainer}
                >
                  <img alt={item.alt} src={item.image}></img>
                </div>
                <div>
                  <span className={styles.itemName}>{item.name}</span>
                  <div className={styles.orderItemMeta}>
                    <span className={styles.itemQuantity}>
                      Qty: {item.quantity}
                    </span>
                    <div className={styles.itemTotalMobile}>
                      <CurrencyFormatter amount={item.quantity * item.price} />
                    </div>
                  </div>
                </div>
                <div className={styles.itemTotal}>
                  <CurrencyFormatter amount={item.quantity * item.price} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.transactionDetails}>
          <div className={styles.transactionalGrid}>
            <span>Subtotal:</span>
            <span>
              <CurrencyFormatter amount={computedTotal} />
            </span>
            <span>GST: </span>
            <span>
              <CurrencyFormatter amount={0} />
            </span>
            <span className={styles.bold}>Grand Total </span>
            <span className={styles.grandTotal}>
              <CurrencyFormatter amount={computedTotal} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
