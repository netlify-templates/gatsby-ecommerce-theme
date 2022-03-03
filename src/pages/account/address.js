import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './address.module.css';

import AccountLayout from '../../components/AccountLayout';
import AddressCard from '../../components/AddressCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from "../../components/Layout/Layout";
import Icon from '../../components/Icons/Icon';

import { isAuth } from '../../helpers/general';

const AddressPage = (props) => {

  if(isAuth() === false) {
    navigate('/login');
  }

  const address1 = {
    name: 'John Doe',
    address: '123 Steam Mill Lane, Haymerket',
    state: 'NSW',
    postal: '2000',
    country: 'Australia',
    company: '',
  }

  const address2 = {
    name: 'John Doe',
    address: '123 Steam Mill Lane, Haymerket',
    state: 'NSW',
    postal: '2000',
    country: 'Australia',
    company: 'Matter Design',
  }

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {link: '/account', label:'Account'}, {link: '/account/address', label:'Addresses'}]} />
        <h1>Addresses</h1>
        <div className={styles.addressListContainer}>
          <AddressCard {...address1}/>
          <AddressCard {...address2}/>
          <div className={styles.addCard}>
            <Icon symbol={'plus'}></Icon>
            <span>new address</span>
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default AddressPage;
