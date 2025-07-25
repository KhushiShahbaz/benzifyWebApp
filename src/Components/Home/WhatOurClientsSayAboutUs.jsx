import React from "react";
import Testimonials from "./testimonial";

function WhatClientsSay() {
  return (
    <div className="px-4 py-10 bg-gradient-to-r from-blue-900 to-black to-purple-900">
    <h1 className="text-5xl text-white text-center font-bold">
      What Our Client Says About Us
    </h1>
  
    {/* Container with enough height and visible overflow */}
    <div className="relative min-h-[530px] overflow-visible">
      {/* First Testimonials */}
      <div>
        <Testimonials rtl={false} />
      </div>
  
      {/* Second Testimonials positioned lower */}
      <div className="absolute top-[250px] w-full">  
        <Testimonials rtl={true} />
      </div>
    </div>
  </div>
  
  );
}

export default WhatClientsSay;
