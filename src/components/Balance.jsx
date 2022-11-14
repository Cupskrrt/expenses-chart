import React from 'react';
import logo from '../assets/logo.svg';

export default function Balance() {
  return (
    <>
      <div className='bg-orange m-8 flex justify-between rounded-xl'>
        <div className='flex flex-col p-5 text-white font-dm'>
            <p>My Balance</p>
            <h2 className='font-bold text-[1.6rem]'>$921.48</h2>
        </div>
        <img
          src={logo}
          alt="logo"
          className='p-6'
        />
      </div>
    </>
  );
}
