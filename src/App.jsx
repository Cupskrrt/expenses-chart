import React from 'react';
import Balance from './components/Balance';
import Spending from './components/Spending';

function App() {
  return (
    <div className="flex flex-col bg-cream h-[100vh] justify-center lg:items-center">
        <Balance />
        <Spending />
    </div>
  );
}

export default App;
