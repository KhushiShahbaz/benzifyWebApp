// // import styles from './style.module.scss';
// import { useTransform, motion, useScroll } from 'framer-motion';
// import { useRef } from 'react';

// const ServiceCard = ({i, title, description, listing,image, progress, range, targetScale}) => {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   })

//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
//   const scale = useTransform(progress, range, [1, targetScale]);

//   const colors = [
//     'bg-blue-400',
//     'bg-orange-400', 
//     'bg-indigo-400',
//     'bg-pink-400',
//     'bg-green-400',
//     'bg-purple-400'
//   ];
  
//   return (
//     <div ref={container} className={'h-[100vh] flex items-center justify-center sticky top-0'}>
//       <motion.div 
//         style={{ scale, top:`calc(-5vh + ${i * 25}px)`}} 
//         className={`flex flex-col relative top-[-25%] md:w-[50%] w-[90%] h-[72%]  md:h-[65vh]  ${colors[i % colors.length]} box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] items-center origin-top `}
//       >
//          <div className="absolute top-4 left-4 bg-white/20 text-white text-sm px-3 py-1 rounded-full shadow">
//           #{i + 1}
//         </div>
//         <h2 className="text-3xl font-bold text-white m-0 text-center">{title}</h2>
//         <div className={'flex md:flex-row flex-col h-[100%] md:mt-[50px] md:gap-[50px]'}>
//           <div className={'md:w-[60%] h-[100%] relative top-[10%]'}>
//             <p  className="text-white/90 mb-6 text-lg leading-relaxed">{description}</p>
//             <ul className="text-white/80 list-disc list-inside space-y-2">
//             {listing.map((point, idx) => (
//               <li key={idx} className="text-base">{point}</li>
//             ))}
//           </ul>
//           </div>

//           <div className="md:h-[100%] h-[80%] rounded-xl overflow-hidden w-full md:w-1/3 flex md:items-center justify-center relative">
//             <motion.div
//               className={'w-[100%] md:h-[100%] h-[80%]'}
//               style={{scale: imageScale}}
//             >
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-48 object-fill md:h-64 filter drop-shadow-lg"
//               />
//             </motion.div>
//           </div>

//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ServiceCard

import React from "react";

const ServiceCard = ({ item, index }) => {
  const colors = [
    'bg-blue-400',
    'bg-orange-400', 
    'bg-indigo-400',
    'bg-pink-400',
    'bg-green-400',
    'bg-purple-400'
  ];
  
  return (
    <li 
      className="sticky top-0"
      style={{
        paddingTop: `calc(${index + 1} * 1.5em)`
      }}
    >
      <div 
        className={`${colors[index % colors.length]} box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex flex-row items-center transition-all duration-500 overflow-hidden`}
      >
        <div className="absolute top-4 left-4 bg-white/20 text-white text-sm px-3 py-1 rounded-full shadow">
          #{index + 1}
        </div>
        
        {/* Left Side - Text */}
        <div className="w-full md:w-2/3 pr-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            {item.heading}
          </h3>
          <p className="text-white/90 mb-6 text-lg leading-relaxed">
            {item.content}
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            {item.listing.map((point, idx) => (
              <li key={idx} className="text-base">{point}</li>
            ))}
          </ul>
        </div>
        
        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-48 object-contain md:h-64 filter drop-shadow-lg"
          />
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;