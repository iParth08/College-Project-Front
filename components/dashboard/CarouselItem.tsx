"use client";

import React from "react";
import "@/components/styles/carousel.css"; // Make sure this path is valid

interface CarouselItemProps {
  bgImage: string;
  title: string;
  name: string;
  description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  bgImage,
  title,
  name,
  description,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content">
        <div className="title">{title}</div>
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <div className="btn">
          <button>See More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
