import React from "react";
// import { motion } from "framer-motion";
import ContentWave from "../Components/Home/contentWaves";
import TrustedPartnersSlide from "../Components/Home/trustedPartners";
import BannerWithLight from "../Components/Home/banner";
import WhatClientsSay from "../Components/Home/WhatOurClientsSayAboutUs";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden font-sans">
  
      {/* 1. Banner Section */}
      <BannerWithLight />

      {/*2. Content Section */}
      <ContentWave />

      {/* 3. Trusted Partners Slider */}
      <TrustedPartnersSlide />

      <WhatClientsSay/>


      {/* 3. Introductory Section */}
      {/* <section className="bg-gray-50 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are a forward-thinking tech company delivering reliable, customized
            solutions to clients worldwide.
          </p>
        </div>
      </section> */}

      {/* 4. Our Services Section */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "E-commerce",
              "Cloud Services",
              "SEO Optimization",
            ].map((service, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <img
                  src={`/icons/icon${(i % 3) + 1}.svg`}
                  alt="Service Icon"
                  className="h-12 w-12 mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  We provide top-notch {service.toLowerCase()} tailored to your
                  business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. Why Choose Us Section */}
      {/* <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Experienced Team", "Timely Delivery", "Customer Focused", "Scalable Solutions", "Innovative Approach", "24/7 Support"].map(
              (feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Our {feature.toLowerCase()} ensures excellence in every step.
                  </p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700">
                      Learn More
                    </button>
                    <button className="border border-blue-600 text-blue-600 text-sm px-4 py-1 rounded hover:bg-blue-50">
                      Contact Us
                    </button>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section> */}

      {/* 7. Testimonials Section */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="space-y-6">
            <div className="flex overflow-x-auto space-x-4 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-sm"
                >
                  <p className="text-sm text-gray-700">
                    "Great service, professional team. Highly recommended!"
                  </p>
                </div>
              ))}
            </div>
            <div className="flex overflow-x-auto space-x-4 animate-scroll-right">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-sm"
                >
                  <p className="text-sm text-gray-700">
                    "Exceptional support and quality delivery."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
