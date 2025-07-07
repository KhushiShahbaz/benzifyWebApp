import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow() {
  return (
    <div
      style={{ display: "none" }}
    />
  );
}

export default function TrustedPartnersSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    focuOnSlide:true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-8 mt-3 overflow-x-hidden bg-gradient-to-r from-[#140122] via-black to-purple-900">
      <div className="max-w-[100%] mx-auto px-4">
        <Slider {...settings} className="w-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="px-4">
              <img
                src={`/logos/${i + 1}.png`}
                alt={`Logo ${i + 1}`}
                className="h-16 w-auto mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
