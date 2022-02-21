import React, { useState } from 'react';
import { Link } from 'gatsby';

import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {

  const [coupon, setCoupon] = useState('');
  const [giftCard, setGiftCard] = useState('');

  return (
  <div>
    <div className={styles.orderSummary}>
      <span className={styles.title}>order summary</span>
      <div className={styles.calculationContainer}>
        <div className={styles.labelContainer}>
          <span>Subtotal</span>
          <span><CurrencyFormatter amount={440} appendZero/></span>
        </div>
        <div className={styles.labelContainer}>
          <span>Shipping</span>
          <span>---</span>
        </div>
        <div className={styles.labelContainer}>
          <span>Tax</span>
          <span><CurrencyFormatter amount={0} appendZero/></span>
        </div>
      </div>
      <div className={styles.couponContainer}>
        <div className={styles.inputContainer}>
          <span>Coupon Code</span>
          <FormInputField
            value={coupon}
            handleChange={(_, coupon) => setCoupon(coupon)}
            id={'couponInput'} 
            icon={'arrow'}/>
        </div>
        <div className={styles.inputContainer}>
          <span>Gift Card</span>
          <FormInputField
            value={giftCard}
            handleChange={(_, giftCard) => setGiftCard(giftCard)}
            id={'couponInput'} 
            icon={'arrow'}/>
        </div>
      </div>
      <div className={styles.totalContainer}>
        <span>Total: </span>
        <span><CurrencyFormatter amount={440} appendZero/></span>
      </div>
    </div>
    <div className={styles.actionContainer}>
      <Button fullWidth level={'primary'}>checkout</Button>
      <div className={styles.linkContainer}>
        <Link to={'/shop'}>CONTINUE SHIPPING</Link>
      </div>
    </div>
</div> 
  );
};

export default OrderSummary;
