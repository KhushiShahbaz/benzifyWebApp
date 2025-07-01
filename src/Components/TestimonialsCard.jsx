import React from "react";

export default function TestimonialCard({ name, content, image }) {
  return (
    <div
      className="relative z-10 bg-gray-800 text-white rounded-2xl p-6 pt-16 max-w-[690px] h-[300px] text-center shadow-xl mx-auto mt-4
      transition-all duration-300 hover:scale-105 hover:border-2 hover:border-purple-500 hover:shadow-2xl"
    >
      {/* Top Avatar */}
      <div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg overflow-hidden z-50"
      >
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>

      <div className="px-5 relative">
        {/* Left quote mark */}
        <span className="absolute top-5 left-5 text-purple-500 text-4xl font-bold">
          “
        </span>

        <h3 className="text-lg font-bold mt-4">{name}</h3>
        <p className="mt-4 text-sm text-gray-300">{content}</p>

        {/* Right quote mark */}
        <span className="absolute -bottom-5 right-7 text-purple-500 text-4xl font-bold">
          ”
        </span>
      </div>
    </div>
  );
}
