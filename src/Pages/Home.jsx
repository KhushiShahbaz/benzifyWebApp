import ContentWave from "../Components/Home/contentWaves";
import TrustedPartnersSlide from "../Components/Home/trustedPartners";
// import BannerWithLight from "../Components/Home/banner";
import WhatClientsSay from "../Components/Home/WhatOurClientsSayAboutUs";
import WhyChooseUs from "../Components/Home/WhyChooseUs";

import OurServices from "../Components/Home/ourServices";
import SpectrumLandingPage from "../Components/BannerLight";

export default function HomePage() {
  
  return (
    <div className="font-sans">
      {/* 1. Banner Section */}
      {/* <BannerWithLight /> */}
      {/* <SpectrumLandingPage/> */}

      {/* 2. Trusted Partners Slider */}
      <TrustedPartnersSlide />

      {/*3. Content Section */}
      <ContentWave />

      {/* 4. Our Services */}
      <OurServices/>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Testimonials */}
      <WhatClientsSay />

    </div>
  );
}
