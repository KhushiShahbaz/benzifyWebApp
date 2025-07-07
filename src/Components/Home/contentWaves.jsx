import React from 'react';
import WaveBackground from '../waveBackground';

export default function ContentWave() {
  return (
    <div className="relative text-white w-full p-6 overflow-hidden">
      
      {/* SVG Wave Background */}
      <div className="absolute inset-0 z-0">
        <WaveBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-[300px] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Creative. Strategic. Results-Driven.
        </h1>
        <p className="text-lg max-w-[85%] text-center">
          At <strong>benzify.us</strong>, we specialize in delivering powerful, professional digital solutions that help
          businesses grow online. Whether you're a startup, a local business, or an established brand,
          we provide <strong>end-to-end services</strong> that combine <strong>creativity, technology, and marketing
          strategy</strong> all under one roof.
          From <strong>custom graphic design</strong> to <strong>mobile app development</strong>, from <strong>SEO</strong> to <strong>eCommerce
          marketing</strong>, we’re here to be your trusted <strong>digital transformation</strong> across the
          United States.
        </p>
      </div>
    </div>
  );
}
