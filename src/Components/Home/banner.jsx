import React from "react";

const BannerWithLight = () => {
  return (
    <section className="relative h-[400px] w-full bg-[#09090b] overflow-hidden">
      {/* Light beam animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-3xl opacity-20 animate-lightBeam" />
      </div>

      {/* Logo (fixed top-left) */}
      <div className="absolute top-5 left-5 z-10">
        <img src={'/avatar.jpg'} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full items-center justify-left p-[10rem] ">
        <h1 className="text-white text-4xl font-bold w-[40%] ">Transform Your Online Presence with Our Full-Service Digital Agency
        </h1>
      </div>
    </section>
  );
};

export default BannerWithLight;
