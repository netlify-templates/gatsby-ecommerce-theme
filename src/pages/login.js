import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { validateEmail, isEmpty } from '../helpers/general';
import * as styles from './login.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const LoginPage = (props) => {
  const initialState = {
    email: '',
    password: '',
  };

  const errorState = {
    email: '',
    password: '',
  };

  const [loginForm, setLoginForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (id, e) => {
    const tempForm = { ...loginForm, [id]: e };
    setLoginForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorForm };

    if (validateEmail(loginForm.email) !== true) {
      tempError.email =
        'Please use a valid email address, such as user@example.com.';
      validForm = false;
    } else {
      tempError.email = '';
    }

    if (isEmpty(loginForm.password) === true) {
      tempError.password = 'Field required';
      validForm = false;
    } else {
      tempError.password = '';
    }

    if (validForm === true) {
      setErrorForm(errorState);

      //mock login
      if (loginForm.email !== 'error@example.com') {
        navigate('/account');
        window.localStorage.setItem('key', 'sampleToken');
      } else {
        window.scrollTo(0, 0);
        setErrorMessage(
          'There is no such account associated with this email address'
        );
      }
    } else {
      setErrorMessage('');
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div
        className={`${styles.errorContainer} ${
          errorMessage !== '' ? styles.show : ''
        }`}
      >
        <span className={styles.errorMessage}>{errorMessage}</span>
      </div>

      <div className={styles.root}>
        <div className={styles.loginFormContainer}>
          <h1 className={styles.loginTitle}>Login</h1>
          <span className={styles.subtitle}>
            Please enter your e-mail and password
          </span>
          <form
            noValidate
            className={styles.loginForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'email'}
              value={loginForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={loginForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Password'}
              error={errorForm.password}
            />
            <div className={styles.forgotPasswordContainer}>
              <Link to={'/forgot'} className={styles.forgotLink}>
                Forgot Password
              </Link>
            </div>

            <Button fullWidth type={'submit'} level={'primary'}>
              LOG IN
            </Button>
            <span className={styles.createLink}>New Customer? </span>
            <Button
              type={'button'}
              onClick={() => navigate('/signup')}
              fullWidth
              level={'secondary'}
            >
              create an account
            </Button>
          </form>
        </div>

        <div className={styles.attributeGridContainer}>
          <AttributeGrid />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
