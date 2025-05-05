"use client";

import { useEffect, useRef, useState } from "react";
import { highlights } from "@/lib/dummy-db/highlights";
import "@/components/styles/carousel.css";
import CarouselItem from "./CarouselItem";

export default function Adboard() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const totalSlides = highlights.length;
  const AUTO_SLIDE_INTERVAL = 7000;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(goToNext, AUTO_SLIDE_INTERVAL);
  };

  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.classList.remove("animate-progress");
      // Force reflow
      void progressRef.current.offsetWidth;
      progressRef.current.classList.add("animate-progress");
    }
  };

  useEffect(() => {
    resetProgressBar();
    resetAutoSlide();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="list">
        {highlights.map((item, index) => (
          <CarouselItem
            bgImage={item.bgImage}
            key={index}
            title={item.title}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      {/* Navigation Arrows */}
      <div className="arrows">
        <button className="prev" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="next" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {highlights.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Progress Bar */}
      <div className="timeRunning"></div>
    </div>
  );
}
