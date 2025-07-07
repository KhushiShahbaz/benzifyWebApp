import styles from "./page.module.scss";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";
import { useScroll } from "framer-motion";
import ServiceCard from "../Components/Card";

const OurCoreServicesCard = ({data,image}) => {
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
   
      
      <div>
        <main ref={container} className={styles.main}>
          {data.map((project, i) => {
            return (
              <ServiceCard
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                imageVisible={image}
              />
            );
          })}          
        </main>
      </div>

  );
};

export default OurCoreServicesCard;