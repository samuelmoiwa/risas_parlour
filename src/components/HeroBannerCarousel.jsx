import React, { Link } from "react";
import { useState, useEffect } from "react";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import apple_watch_1 from '../images/apple_watch_1.png'
import gray_1 from '../images/gray_1.jpg'

export function HeroBannerCarousel() {
  const [activeIndex, setActiveIndex] = useState("");
  return (
    <Carousel
      className="flex flex-row w-full bg-pink-500"
      activeIndex={activeIndex}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-yellow-400" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >



      <div className="w-screen h-full overflow-x-hidden bg-white
            bg-cover bg-center bg-no-repeat items-center justify-center
      "
        style={{ backgroundImage: `url(${gray_1})` }}
      >
        <div
          className="
          flex flex-col justify-center p-6
          lg:py-24 lg:px-14 lg:flex-row sm:h-96
          lg:justify-between
          xl:ml-5"
        >

        <div
          className="
          container flex flex-col justify-center p-6
          sm:py-16 lg:py-24 lg:px-14 lg:flex-row
          lg:justify-between pb-12 pt-20 bg-green-500
          xl:ml-5  "
        >
          <div
            className="
            flex flex-col justify-center
            text-center rounded-sm
            lg:max-w-xl xl:max-w-2xl lg:text-left"
          >
            <Typography
              variant="lead"
              color="white"
              className="text-gray-600"
            >
              <span className="font-bold text-6xl text-gray-700">Apple Watch</span> <br/>
              Apple Watch Series 3 Apple Watch Series 2 MacBook Pro, apple watch series 3,
              gadget, electronics, mobile Phone png
            </Typography>

            </div>
        </div>

        <div
          className="
          flex items-center justify-center p-6 mt-2
          lg:max-w-3xl xl:max-w-3xl bg-pink-500
          lg:w-2/4
          "
        >
          <img
            src={apple_watch_1}
            alt="Service"
            className="object-contain object-center h-full w-full"
          />
        </div>

      </div>


      </div>
      <div className="w-screen h-full overflow-x-hidden bg-red-500">
      </div>
      <div className="w-screen h-full overflow-x-hidden bg-red-600">
      </div>
    </Carousel>
  );
}
