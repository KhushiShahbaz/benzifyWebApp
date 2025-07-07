// import styles from './style.module.scss';
import { useTransform, motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({i, title, description, listing,image,bgColor}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  // const scale = useTransform(progress, range, [1, targetScale]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

 
  
  return (
    <div ref={container} className={'h-[100%] flex items-center justify-center sticky top-0'}>
      <motion.div 
        style={{ smoothScale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={`flex flex-col relative top-[-25%]  w-[100%] h-[72%]  md:h-[74vh]  ${bgColor} box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] items-center origin-top `}
      >
         <div className="absolute top-4 left-4 bg-white/20 text-white text-sm px-3 py-1 rounded-full shadow">
          #{i + 1}
        </div>
        <h2 className="text-3xl font-bold text-white m-0 text-center">{title}</h2>
        <div className={'flex md:flex-row flex-col h-[100%] md:mt-[50px] md:gap-[50px]'}>
          <div className={'md:w-[60%] h-[100%] relative top-[10%]'}>
            <p  className="text-white/90 mb-6 text-lg leading-relaxed">{description}</p>
            <ul className="text-white/80 list-disc list-inside space-y-2">
            {listing.map((point, idx) => (
              <li key={idx} className="text-base">{point}</li>
            ))}
          </ul>
          </div>

          <div className="md:h-[100%] h-[80%] rounded-xl overflow-hidden w-full md:w-1/3 flex md:items-center justify-center relative">
            <motion.div
              className={'w-[100%] md:h-[100%] h-[80%]'}
              style={{scale: imageScale}}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-fill md:h-64 filter drop-shadow-lg"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default ServiceCard