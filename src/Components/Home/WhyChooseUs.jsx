import React from "react";
import CustomButton from "../button";
import { whyChooseUsData } from "../../utils";
import AnimatedCard from "../ChooseUsCard";

function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-[#140122] via-black to-purple-900 py-5">
      <div className=" mx-auto text-center my-20 ">
      <h1 className="text-5xl text-white text-center font-bold my-4">
      Why Choose Us?</h1>
        <h4 className="text-2xl text-gray-300">
          We help businesses boost visibility, attract customers, and increase
          revenue across the U.S.
        </h4>
      </div>
      <div className="min-h-screen flex items-center justify-center px-4 py-10 overflow-x-hidden">
      <div className="flex gap-15 flex-wrap justify-center items-center w-full md:w-[90%] h-auto px-[2vw]">
        {whyChooseUsData.map((card, idx) => (
          <AnimatedCard
            key={idx}
            card={card}
            index={idx}
            total={whyChooseUsData.length}
          />
        ))}
      </div>
    </div>
      <div className="max-w-2xl mx-auto text-center my-20">
        <h2 className="text-4xl font-bold mb-3 text-white">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-gray-400 mb-6 text-xl">
          Let’s create something amazing together. Contact us today or request a
          free consultation to boost your visibility and revenue.
        </p>
        <CustomButton {...{text:"Get Free Consultation",textColor:"white"}} />
       
      </div>
    </section>
  );
}

export default WhyChooseUs;
