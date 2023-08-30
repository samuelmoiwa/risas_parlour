import { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

export function HeroBannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { color: "bg-red-600" },
    { color: "bg-blue-600" },
    { color: "bg-green-600" },
    { color: "bg-red-600" },
    { color: "bg-blue-600" },
    { color: "bg-green-600" },
    // Add more slide elements here
  ];

  const autoChangeSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(autoChangeSlide, 5000);
    return () => clearInterval(interval);
  }, []);




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
      {slides.map((slide, index) => (
        <div key={index} className={`w-screen h-full overflow-x-hidden ${slide.color}`} />
      ))}
    </Carousel>
  );
}
