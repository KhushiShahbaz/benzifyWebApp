import React from "react";
import {
  servicesData,
  ServicesData1,
  servicesData2,
  servicesData3,
  servicesData4,
  servicesData5,
  servicesData6,
} from "../../utils";
import OurCoreServicesCard from "../servicesCard";

const OurServices = () => {
  return (
    <div className="min-h-screen py-[2rem] ">
      <h1 className="text-5xl text-white text-center font-bold pt-3">
        Our Core Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-10 md:px-12">
        <OurCoreServicesCard data={ServicesData1}  image={false}/>
        <OurCoreServicesCard data={servicesData2} image={false}/>
        <OurCoreServicesCard data={servicesData3} image={false}/>
        <OurCoreServicesCard data={servicesData4} image={false}/>
        <OurCoreServicesCard data={servicesData5} image={false}/>
        <OurCoreServicesCard data={servicesData6} image={false} />
      </div>
      <div className="mx-[10rem]">
    <OurCoreServicesCard data={servicesData} image={true}/>
    </div>
    </div>
  );
};

export default OurServices;
