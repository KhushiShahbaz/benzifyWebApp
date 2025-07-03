import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedCard({ card, index, total }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const combinedRef = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.1,
          delay: index * 0.2,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 100,
        transition: {
          duration: 0.1,
          delay: (total - index - 1) * 0.2, // reverse fade-out delay
          ease: "easeIn",
        },
      });
    }
  }, [inView, controls, index, total]);

  const IconComponent = card.icon;

  return (
    <motion.div
      ref={combinedRef}
      animate={controls}
      initial={{ opacity: 0, x: 100 }}
      className="-translate-x-[10px] rotate-[-5deg] relative w-[85vw] sm:w-[320px] md:w-[270px] h-[350px] bg-[rgb(200,200,200)] rounded-[15px] shadow-[0_15px_25px_rgba(0,0,0,0.2),_0_5px_10px_rgba(86,121,232,0.1)] my-[3vw] text-[20px] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] px-[1rem] hover:translate-y-[-5px] hover:scale-[1] hover:shadow-[0_20px_35px_rgba(0,0,0,0.3),_0_10px_25px_rgba(1,53,221,0.2),_0_0_20px_rgba(86,121,232,0.1)]"
    >
      <div className="w-[80px] h-[80px] bg-[#5679e8] rounded-full flex justify-center items-center absolute top-[-40px] left-1/2 transform -translate-x-1/2 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:scale-110 hover:rotate-[360deg] hover:shadow-[0_8px_20px_rgba(20,70,233,0.3)] transition-all duration-[600ms] ease-in-out ">
        <IconComponent className="w-1/2 text-white" />
      </div>

      <h3 className="text-center text-[23px] mt-[7rem] text-blue-700 font-bold mb-[10px] relative top-[-20px] hover:text-[#0932e7] hover:translate-y-[-5px] transition-all duration-[400ms]">
        {card.title}
      </h3>

      <p className="text-center text-[15px] text-[#333] px-[20px] relative top-[-20px] hover:translate-y-[-5px] transition-all duration-[400ms]">
        {card.description}
      </p>
    </motion.div>
  );
}
