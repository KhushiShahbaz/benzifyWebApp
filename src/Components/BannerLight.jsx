import React, { useState, useEffect, useRef } from 'react';

const SpectrumLandingPage = () => {
  const [barPosition, setBarPosition] = useState(220);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const barRef = useRef(null);
  const hiddenTextRefs = useRef([]);

  const hiddenLetters = ['P', 'R', 'E', 'S', 'E', 'N','C','E'];

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
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const distance = dragStart - e.clientX;
    const newPosition = barPosition - distance;
    
    // Constrain the bar within reasonable bounds
    const constrainedPosition = Math.max(50, Math.min(window.innerWidth - 50, newPosition));
    
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
  }, [isDragging, dragStart, barPosition]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden font-['Poppins'] text-white">
      {/* Background with overlay effect */}
      <div className="absolute inset-0 ">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: `radial-gradient(ellipse 100vmax 50vmax at ${barPosition}px 50vh, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%)`
          }}
        />
      </div>

     

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="text-start px-8 ml-96 w-[40%]">
          <h1 className="text-6xl font-bold mb-4">
            <div>Transform Your</div>
            <div className="flex items-center justify-center gap-1">
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
          <p className="text-xl opacity-70 mt-10 leading-relaxed">
          We help U.S. businesses grow with expert graphic design, web development, SEO, paid
advertising, and eCommerce marketing.

          </p>
        </div>
      </div>

      {/* Draggable Bar */}
      <div
        ref={barRef}
        className="absolute top-1/2 transform -translate-y-1/2 w-6 h-96 bg-gray-100 rounded-full cursor-grab active:cursor-grabbing z-50 transition-shadow duration-300"
        style={{
          left: `${barPosition}px`,
          boxShadow: isDragging || Math.sin(Date.now() / 1000) > 0 
            ? '0 0 5px #7bacff, 0 0 10px #7bacff, 0 0 20px #7bacff, 0 0 40px #7bacff, 0 0 80px #7bacff'
            : 'none'
        }}
        onMouseDown={handleMouseDown}
      />

      {/* Animated background elements
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div> */}

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fluctuate {
          0%, 40% { opacity: 0.3; }
          20%, 100% { opacity: 1; }
        }
        
        .animate-fluctuate {
          animation: fluctuate 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpectrumLandingPage;