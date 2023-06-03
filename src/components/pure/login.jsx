import React from 'react';
import PropTypes from 'prop-types';


const Login = () => {
  return (
    <div className='py-8'>
      <form className='flex flex-col max-w-sm mx-auto'>
        <input className='text-input border-0 bg-white h-10 rounded-lg drop-shadow-md p-4 placeholder-black font-montserrat' type="text" placeholder='Nombre de usuario'/>
        <input className='text-input border-0 bg-white mt-8 h-10 rounded-lg drop-shadow-md p-4 placeholder-black font-montserrat' type="password" placeholder='Contraseña'/>
        <div className='flex justify-between mt-8'>
          <label for="checkbox-1" className='font-roboto'>Recuerdame</label>
          <input id="checkbox-1" className='form-checkbox w-6 h-6 bg-white rounded-md drop-shadow-md text-gosporty-green border-0 focus:ring-0' type="checkbox"/>
        </div>
        <input className='h-12 mt-8 rounded-xl text-white font-poppins font-bold bg-gosporty-green drop-shadow-md' type="submit" value={"Iniciar Sesión"}/>
      </form>
    </div>
  );
};


Login.propTypes = {

};


export default Login;