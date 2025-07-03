import React, { useState, useEffect, useRef } from 'react';

const SpectrumLandingPage = () => {
  const [barPosition, setBarPosition] = useState(220);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const barRef = useRef(null);
  const hiddenTextRefs = useRef([]);
  const hiddenLetters = ['P', 'R', 'E', 'S', 'E', 'N', 'C', 'E'];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updateTextOpacity(barPosition);
  }, [barPosition]);

  const updateTextOpacity = (offset) => {
    hiddenTextRefs.current.forEach((textRef) => {
      if (textRef) {
        const textLeft = textRef.offsetLeft;
        const distance = Math.abs(offset - textLeft);
        const opacity = Math.max(0, 1 - distance / 500);
        textRef.style.opacity = opacity;
      }
    });
  };

  const handleMouseDown = (e) => {
    if (!animationDone) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const distance = dragStart - e.clientX;
    const newPosition = barPosition - distance;
    const constrainedPosition = Math.max(50, Math.min(windowWidth - 50, newPosition));
    setBarPosition(constrainedPosition);
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, barPosition, windowWidth]);

  useEffect(() => {
    let animationFrame;
    let startTime = null;
    const duration = 6000;
    const leftBound = 50;
    const rightBound = window.innerWidth - 100;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = (elapsed % duration) / duration;
      const ease = Math.sin(t * Math.PI);
      const position = leftBound + ease * (rightBound - leftBound);

      if (elapsed >= duration) {
        setBarPosition(leftBound);
        setAnimationDone(true);
        cancelAnimationFrame(animationFrame);
      } else {
        setBarPosition(position);
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden font-['Poppins'] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: `radial-gradient(ellipse 400px 300px at ${barPosition}px 50%, rgba(123, 172, 255, 0.3), rgba(0, 0, 0, 0.9))`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10">

        {/* Logo on top (mobile only) */}
        {animationDone && (
          <div className="md:hidden mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 sm:w-28 h-auto object-contain transition-opacity duration-500 mx-auto"
            />
          </div>
        )}

        <div className="flex flex-col-reverse md:flex-row items-center  w-full gap-6">
          {/* Text Section */}
          <div className="w-[80%] md:w-1/2 text-start md:ml-65">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <div>Transform Your</div>
              <div className="flex justify-start flex-wrap items-center gap-1">
                <span>Online</span>
                <div className="flex ml-4">
                  {hiddenLetters.map((letter, index) => (
                    <span
                      key={index}
                      ref={(el) => (hiddenTextRefs.current[index] = el)}
                      className="inline-block text-blue-400 transition-opacity duration-300"
                      style={{
                        textShadow: '0 0 5px #7bacff',
                        opacity: 0
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
              <div>with Our Full-Service Digital Agency</div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-70 mt-4 sm:mt-6 md:mt-8 leading-relaxed">
              We help U.S. businesses grow with expert graphic design, web development, SEO, paid
              advertising, and eCommerce marketing.
            </p>
          </div>

          {/* Logo beside text (only on md and up) */}
          {animationDone && (
            <div className="hidden md:flex w-full md:w-1/2 justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[60%] h-[60%] object-contain transition-opacity duration-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Draggable Bar */}
      <div
        ref={barRef}
        className="absolute top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-72 sm:h-96 bg-gray-100 rounded-full cursor-grab active:cursor-grabbing z-50 transition-shadow duration-300"
        style={{
          left: `${barPosition}px`,
          boxShadow:
            isDragging || Math.sin(Date.now() / 1000) > 0
              ? '0 0 5px #7bacff, 0 0 10px #7bacff, 0 0 20px #7bacff, 0 0 40px #7bacff, 0 0 80px #7bacff'
              : 'none'
        }}
        onMouseDown={handleMouseDown}
      />

      {/* Moving Logo During Animation */}
      {!animationDone && (
        <img
          src="/logo.png"
          alt="Moving Logo"
          className="absolute w-10 sm:w-16 h-auto object-contain z-40 transition-transform duration-100"
          style={{
            top: 'calc(50% - 40px)',
            left: `${barPosition - 30}px`
          }}
        />
      )}

      <style jsx>{`
        @keyframes fluctuate {
          0%,
          40% {
            opacity: 0.3;
          }
          20%,
          100% {
            opacity: 1;
          }
        }
        .animate-fluctuate {
          animation: fluctuate 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpectrumLandingPage;
