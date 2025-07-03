import styles from "./page.module.scss";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";
import { useScroll } from "framer-motion";
import {  ServicesData } from "../../utils";
import ServiceCard from "../Card";

const OurServices = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="min-h-screen py-[12rem]">
      <h1 className="text-5xl text-white text-center font-bold">
        Our Core Services
      </h1>
      
      <div>
        <main ref={container} className={styles.main}>
          {ServicesData.map((project, i) => {
            // const targetScale = 1 - (ServicesData.length - i) * 0.05;
            return (
              <ServiceCard
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                // range={[i * 0.25, 1]}
                // targetScale={targetScale}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default OurServices;