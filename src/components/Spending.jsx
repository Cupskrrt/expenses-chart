import React from 'react';
import Chart from './Chart';

export default function Spending() {
  return (
    <>
      <div className='bg-white mx-8'>
        <h1>Spending - Last 7 days</h1>
        <Chart />
        <hr />
        <div className='flex justify-between'>
            <div>
                <p>Total this month</p>
                <h2>$478.33</h2>
            </div>
            <div>
                <p>+2.4%</p>
                <p>from last month</p>
            </div>
        </div>
      </div>
    </>
  );
}
