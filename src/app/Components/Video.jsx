"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useViewportScroll } from 'framer-motion';
import { GoUnmute,  GoMute } from "react-icons/go";

const Video = () => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const [isMuted, setIsMuted] = useState(true); // Manage mute state
  const [scale, setScale] = useState(0.5); // Initial scale when not scrolled

<<<<<<< HEAD

=======
  
>>>>>>> 9734f186094501af0cca0033e62adb53056f9396
  useEffect(() => {
    const videoElement = videoRef.current;  // Capture the current value

    observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            videoElement.play().catch(() => {
                // Handle the case where autoplay was prevented
            });
        } else {
            videoElement.pause();
        }
    }, { threshold: 0.5 });

    if (videoElement) {
        observerRef.current.observe(videoElement);
    }

    return () => {
        if (observerRef.current && videoElement) {
            observerRef.current.unobserve(videoElement);
        }
    };
}, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      return scrollY.onChange((value) => {
        const screenHeight = window.innerHeight;
        const docHeight = document.body.offsetHeight;
        const scrolled = value / (docHeight - screenHeight);
        const dynamicScale = 0.5 + (scrolled * (1 - 0.5));
        setScale(scrolled > 0.8 ? 1.0 : dynamicScale);
      });
    }
  }, [scrollY]);
  

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const shouldBeMuted = !video.muted;
      video.muted = shouldBeMuted;
      setIsMuted(shouldBeMuted); // Update the state accordingly
    }
  };

  return (
      <div className='flex justify-center'>
          <div style={{ transform: `scale(${scale})` }}>
              <video ref={videoRef} autoPlay loop playsInline muted={isMuted} className='h-full md:h-[1000px]'>
                <source src='/assets/videos/keys.mp4' type="video/mp4" />
              </video>
              <button onClick={toggleMute} className=' text-white' style={{ fontSize: '24px' }}>
                {isMuted ? <GoMute /> : <GoUnmute />}
              </button>
          </div>
      </div>
  );
}

export default Video;
