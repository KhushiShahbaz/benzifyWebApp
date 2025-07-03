import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useMotionTemplate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsLeft = [
  { label: "Locksmith Services", value: 92 },
  { label: "Arrival Time", value: 82 },
  { label: "Modern Technology", value: 96 },
  { label: "Certified Team", value: 90 },
];

const statsRight = [
  { label: "Expert Team", value: 34, icon: "👨‍🔧" },
  { label: "Project Completed", value: 3778, icon: "🔑" },
  { label: "Client Satisfaction", value: 30, icon: "🌐" },
  { label: "Years Experience", value: 15, icon: "👍" },
];

const ProgressBar = ({ label, value }) => {
    const progress = useMotionValue(0);
    const width = useTransform(progress, (v) => `${v}%`);
    const percentage = useTransform(progress, (v) => Math.round(v));
    const displayText = useMotionTemplate`${percentage}%`; // ✅ formatted string
  
    useEffect(() => {
      const controls = animate(progress, value, {
        duration: 1.5,
        ease: "easeInOut",
      });
      return () => controls.stop();
    }, [value]);
  
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <p className="text-white text-lg">{label}</p>
          <motion.span className="text-yellow-400 font-semibold text-sm">
            {displayText}
          </motion.span>
        </div>
  
        <div className="w-full h-3 bg-gray-700 rounded overflow-hidden">
          <motion.div
            style={{ width }}
            className="h-full bg-yellow-400 rounded"
          />
        </div>
      </div>
    );
  };
  

  const StatItem = ({ label, value, icon, delay }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const displayText = useMotionTemplate`${rounded}+`;
  
    useEffect(() => {
      const controls = animate(count, value, {
        duration: 1.5,
        ease: "easeOut",
        delay,
      });
      return () => controls.stop();
    }, [value, delay]);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="text-center text-white"
      >
        <div className="text-4xl">{icon}</div>
        <motion.h2 className="text-4xl font-bold mt-2">{displayText}</motion.h2>
        <p className="mt-1">{label}</p>
      </motion.div>
    );
  };

export default function AnimatedStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full ">
      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-white text-2xl font-semibold mb-4">
            Why We Are Perfect
          </h2>
          <p className="text-gray-200 mb-8">
          We proudly serve clients across all 50 states from startups in New York to enterprises in
California. Whether you need website redesign, local SEO, or a custom Shopify store,
we help businesses scale digitally with confidence.
          </p>

          {statsLeft.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.label}
              value={inView ? item.value : 0}
            />
          ))}
        </motion.div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-8">
          {statsRight.map((stat, idx) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              value={inView ? stat.value : 0}
              icon={stat.icon}
              delay={idx * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
