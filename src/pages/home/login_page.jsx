import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../components/pure/login';
import logo from '../../assets/logo-gs.svg';
import LoginOthers from '../../components/pure/login_others';
import RegisterButton from '../../components/pure/register_button';


const LoginPage = () => {
  return (
    <>
      <section>
        <div className='bg-login'>
          <img className='mx-auto p-12' src={logo} alt='Logo de GoSporty'/>
          <Login />
        </div>
        <div>
          <LoginOthers />
          <RegisterButton />
        </div>
      </section>
    </>
  );
};


LoginPage.propTypes = {

};


export default LoginPage;
