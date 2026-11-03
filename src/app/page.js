import AllProducts from '@/component/AllProducts';
import Banner from '@/component/Banner';
import PriceDrecrese from '@/component/PriceDescrese';
import PriceIncrease from '@/component/PriceIncrease';
import React from 'react';

const HomePage = () => {
  return (
    <div >
      <Banner/>
      <PriceIncrease/>
      <PriceDrecrese/>
      <AllProducts/>

    </div>
  );
};

export default HomePage;