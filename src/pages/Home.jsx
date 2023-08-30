import React from 'react'
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';

const Home = () => {
  return (
    <>
    <div className='h-96 w-full'>
      < HeroBannerCarousel />
    </div>
      <div className='text-gray-500 font-bold bg-gray-100 mt-10 flex justify-center py-10'> Home Page</div>
    </>

  )
}

export default Home
