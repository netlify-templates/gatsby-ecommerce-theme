import { Link } from 'gatsby';
import React, { useState } from 'react';

import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import FooterData from './footer.json';
import * as styles from './Footer.module.css';

import MasterCard from '../../images/master.png';
import Amex from '../../images/amex.png';
import Visa from '../../images/visa.png';

const Footer = (prop) => {

  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  }

  const handleSocialClick = () => {
    console.log('Handle social media');
  }

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <div className={styles.infoLinksContainer}>
              <span className={styles.linkTitle}>Info</span>
              <ul className={styles.linkList}>
                <li><Link className={`${styles.link} fancy`} to={'#'}>About Us</Link></li>
                <li><Link className={styles.link} to={'#'}>Journal</Link></li>
                <li><Link className={styles.link} to={'#'}>Blog</Link></li>
                <li><Link className={styles.link} to={'#'}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <span className={styles.linkTitle}>Support</span>
              <ul className={styles.linkList}>
                <li><Link className={styles.link} to={'#'}>FAQ</Link></li>
                <li><Link className={styles.link} to={'#'}>Contact Us</Link></li>
                <li><Link className={styles.link} to={'#'}>Shipping & Returns</Link></li>
              </ul>
            </div>
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>Newsletter</span>
                <p className={styles.promoMessage}>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!</p>
                <form className={styles.newsLetterForm} onSubmit={(e) => subscribeHandler(e)}>
                <FormInputField 
                  icon={'arrow'}
                  id={'newsLetterInput'}
                  value={email}
                  placeholder={'Email'}
                  handleChange={(_, e) => setEmail(e)}
                />
                </form>
                <div className={styles.socialContainer}>
                  <div onClick={handleSocialClick} role={'presentation'} className={styles.socialIconContainer}>
                    <Icon symbol={'youtube'}></Icon>
                  </div>
                  <div onClick={handleSocialClick} role={'presentation'} className={styles.socialIconContainer}>
                    <Icon symbol={'instagram'}></Icon>
                  </div>
                  <div onClick={handleSocialClick} role={'presentation'} className={styles.socialIconContainer}>
                    <Icon symbol={'facebook'}></Icon>
                  </div>
                  <div onClick={handleSocialClick} role={'presentation'} className={styles.socialIconContainer}>
                    <Icon symbol={'twitter'}></Icon>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
          <Container size={'large'} spacing={'min'}>
            <div className={styles.contentBottom}>
              <div className={styles.settings}>
                <Dropdown label={'Country/Region'} optionList={FooterData.currencyList}/>
                <Dropdown label={'Language'} optionList={FooterData.languageList}/>
              </div>
              <div className={styles.copyrightContainer}>
                <div className={styles.creditCardContainer}>
                  <img className={styles.amexSize} src={Amex} alt={'amex'}></img>
                  <img className={styles.masterSize} src={MasterCard} alt={'mastercard'}></img>
                  <img className={styles.visaSize} src={Visa} alt={'visa'}></img>
                </div>
                <span>2021 (c) . Built by Matter. Powered by JAMM</span>
              </div>
            </div>
          </Container>
      </div>
    </div>
  );
};

export default Footer;
