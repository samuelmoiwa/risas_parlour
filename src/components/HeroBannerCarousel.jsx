import React, { Link } from "react";
import { Carousel } from 'flowbite-react';

function HeroBannerCarousel() {
  return (
    <Carousel className="w-screen h-96 bg-green-400" slideInterval={2000}>

        <div className="bg-blue-600 h-full w-screen">

        <div className="bg-green-700 h-10 w-10/12"></div>

        </div>

        <div className="bg-red-700 h-full w-screen">

        </div>

        <div className="bg-yellow-700 h-full w-screen">

        </div>


    </Carousel>
  )
}



export { HeroBannerCarousel };



