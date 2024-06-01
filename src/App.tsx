import React from 'react';
import BestSellersList from './components/BestSellersList';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="ml-[96px] bg-[#E9EDF6]">
          <BestSellersList />
        </div>
      </div>
    </div>
  );
};

export default App;
