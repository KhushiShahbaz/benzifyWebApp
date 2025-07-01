import React from 'react';
import { testimonials } from '../../utils'; // Make sure testimonials array has { id, name, content, image }
import TestimonialCard from '../TestimonialsCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials({rtl}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: rtl,
    focuOnSlide:true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
   
      <Slider {...settings} className="w-full relative">
  {testimonials.map((testimonial) => (
    <div key={testimonial.id} className="px-2">
      <TestimonialCard {...testimonial} />
    </div>
  ))}
</Slider>

  );
}

export default Testimonials;
