import AllProducts from '@/component/AllProducts';
import Banner from '@/component/Banner';
import PriceDrecrese from '@/component/PriceDescrese';
import PriceIncrease from '@/component/PriceIncrease';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-gray-100' >
     <div className='container mx-auto' > <Banner/></div>
      <PriceIncrease/>
      <PriceDrecrese/>
      <AllProducts/>

    </div>
  );
};

export default HomePage;