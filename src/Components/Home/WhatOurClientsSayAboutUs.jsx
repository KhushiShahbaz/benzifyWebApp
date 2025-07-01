import React from "react";
import Testimonials from "./testimonial";

function WhatClientsSay() {
  return (
    <div className="px-4 my-7  relative z-0">
      <h1 className="text-5xl text-white text-center font-bold mt-6 ">
        What Our Client Says About Us
      </h1>
      <div className="relative space-y-12">
        <div className="relative z-10">
          <Testimonials rtl={false} />
        </div>

        <div className="relative z-20 -mt-12">
          <Testimonials rtl={true} />
        </div>
      </div>
    </div>
  );
}

export default WhatClientsSay;
