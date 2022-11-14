import React from 'react';
import Chart from './Chart';

export default function Spending() {
  return (
    <>
      <div className='bg-white mx-8 p-8 rounded-xl lg:w-[30rem]'>
        <h1 className='text-[1.7rem] mb-6'>Spending - Last 7 days</h1>
        <Chart />
        <hr className='text-gray'/>
        <div className='flex justify-between items-center mt-8'>
            <div>
                <p className='text-[1rem] font-dm font-normal text-gray'>Total this month</p>
                <h2 className='text-[2rem] font-dm font-bold'>$478.33</h2>
            </div>
            <div className='text-end'>
                <p className='text-[.8rem]'>+2.4%</p>
                <p className='text-gray'>from last month</p>
            </div>
        </div>
      </div>
    </>
  );
}
