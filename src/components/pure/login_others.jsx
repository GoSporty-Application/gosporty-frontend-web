import React from 'react';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdSms } from "react-icons/md";

const LoginOthers = () => {
  return (
    <div className='flex max-w-sm justify-between m-auto p-8'>
      <button ><FaGoogle className='text-5xl' /></button>
      <button ><FaFacebook className='text-5xl' /></button>
      <button ><MdSms className='text-5xl' /></button>
    </div>
  );
}

export default LoginOthers;
