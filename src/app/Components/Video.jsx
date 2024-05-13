"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useViewportScroll } from 'framer-motion';
import { GoUnmute, GoMute } from "react-icons/go";

const Video = () => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const [isMuted, setIsMuted] = useState(true); // Manage mute state
  const [scale, setScale] = useState(0.5); // Initial scale when not scrolled

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
      const handleScroll = (value) => {
        const screenHeight = window.innerHeight;
        const docHeight = document.body.offsetHeight;
        const scrolled = value / (docHeight - screenHeight);
        const dynamicScale = 0.5 + (scrolled * (1 - 0.5));
        setScale(scrolled > 0.8 ? 1.0 : dynamicScale);
      };

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        return scrollY.onChange(handleScroll);
      }
    }
  }, [scrollY]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleAutoplay = () => {
      if (videoElement && videoElement.paused) {
        videoElement.play().catch(() => {
          // Handle the case where autoplay was prevented
        });
      }
    };

    handleAutoplay();

    return () => {
      window.removeEventListener('load', handleAutoplay);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const shouldBeMuted = !video.muted;
      video.muted = shouldBeMuted;
      setIsMuted(shouldBeMuted); // Update the state accordingly
    }
  };

  return (
    <div className='flex justify-center h-fit mt-[-5%] md:mt-0'>
      <div style={{ transform: `scale(${scale})` }}>
        <video ref={videoRef} autoPlay loop playsInline muted={isMuted} className='h-full md:h-[1000px]'>
          <source src='/assets/videos/keys.mp4' type="video/mp4" />
        </video>
        <button
          onClick={toggleMute}
          className='text-white absolute bottom-4 left-4 md:bottom-auto md:left-auto md:relative md:text-xl'
          style={{ fontSize: '24px' }}
        >
          {isMuted ? <GoMute /> : <GoUnmute />}
        </button>
      </div>
    </div>
  );
}

export default Video;
