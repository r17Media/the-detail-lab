import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const videoList = [
  {
    src: "/images/videos/WhatsApp Video 2026-06-23 at 8.52.14 PM.mp4",
    title: "9H Nano Ceramic Coating",
    category: "CERAMIC SHIELD",
    description: "Our dual-layer nano ceramic formula locks in a permanent liquid-glass gloss while forming an ultra-hydrophobic barrier against bird droppings, acid rain, and harsh UV rays."
  },
  {
    src: "/images/videos/WhatsApp Video 2026-06-23 at 8.52.16 PM.mp4",
    title: "Superbike Thermal Detailing",
    description: "Precision high-temperature steam extraction combined with microscopic metal polishing to remove grease, carbon build-up, and road grime from complex engine blocks and exhausts.",
    category: "DEEP DETAILING"
  },
  {
    src: "/images/videos/WhatsApp Video 2026-06-23 at 8.52.37 PM (1).mp4",
    title: "Ultra Stealth Matte PPF",
    description: "Elite self-healing thermoplastic urethane film that shields vehicle paint against rock chips, minor abrasions, and key scratches while rendering a majestic, rich satin-matte finish.",
    category: "PAINT PROTECTION"
  }
];

function VideoCard({ 
  src, 
  isActive, 
  isLeft, 
  isRight, 
  isMuted,
  setIsMuted,
  onClick 
}: { 
  src: string; 
  isActive: boolean; 
  isLeft: boolean; 
  isRight: boolean; 
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  onClick: (e: React.MouseEvent) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Active state playback synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // Ensure the DOM element's volume and muted properties match state
      video.muted = isMuted;
      if (!isMuted) {
        video.volume = 1.0;
      }

      if (isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Play failed:", err);
            setIsPlaying(false);
          });
        }
      } else {
        video.pause();
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying, isMuted]);

  // Synchronous volume and mute changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      if (!isMuted) {
        video.volume = 1.0;
      }
    }
  }, [isMuted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.muted = isMuted;
        if (!isMuted) {
          video.volume = 1.0;
        }
        video.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Play failed:", err);
        });
      }
    }
  };

  return (
    <div 
      className="relative w-full h-full flex flex-col bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer"
      onClick={(e) => {
        if (isActive) {
          togglePlay(e);
        } else {
          onClick(e);
        }
      }}
    >
      {/* Video Player Body */}
      <div className="relative flex-grow bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loop
          muted={isMuted}
          playsInline
        />

        {/* Dark mask on background slides */}
        {!isActive && (
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 hover:bg-black/40" />
        )}


        {/* Play/Pause control pill on Active Slide */}
        {isActive && (
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center bg-black/85 px-4 py-2 rounded-full border border-white/10 shadow-2xl z-20 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={togglePlay}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} className="text-[#F4C400] fill-[#F4C400]" /> : <Play size={18} className="text-[#F4C400] fill-[#F4C400] ml-0.5" />}
            </button>
          </div>
        )}

        {/* Center Play Indicator for Inactive slides */}
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/70">
              <Play size={20} className="ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoCoverflow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const currentItem = videoList[currentIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Stage Container */}
      <div 
        className="relative w-full max-w-5xl h-[360px] sm:h-[480px] md:h-[580px] flex items-center justify-center overflow-visible"
        style={{ perspective: '1200px' }} // Critical for 3D realism
      >
        
        {/* Navigation Arrow Left - Styled in premium gold/yellow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-8 w-12 h-12 rounded-full bg-black/75 border border-[#F4C400]/40 text-[#F4C400] hover:bg-black hover:border-[#F4C400] hover:scale-110 flex items-center justify-center cursor-pointer transition-all duration-200 z-30"
          style={{ textShadow: '0 0 10px rgba(244,196,0,0.4)' }}
          aria-label="Previous Video"
        >
          <ChevronLeft size={28} className="stroke-[2.5]" />
        </button>

        {/* Carousel Window Stack */}
        <div className="relative w-full h-full flex items-center justify-center max-w-[200px] sm:max-w-[280px] md:max-w-[340px]">
          {videoList.map((item, index) => {
            // Determine logical offset in a 3-item circular loop
            let offset = index - currentIndex;
            if (offset < -1) offset += 3;
            if (offset > 1) offset -= 3;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // 3D placement configurations
            let xPosition = 0;
            let rotateYAngle = 0;
            let scaleVal = 1;
            let zVal = 0;
            let opacityVal = 1;

            if (isActive) {
              xPosition = 0;
              rotateYAngle = 0;
              scaleVal = 1;
              zVal = 100;
              opacityVal = 1;
            } else if (isLeft) {
              xPosition = -180; // Adjusted for 9:16 layout
              rotateYAngle = 30; // 3D Tilt inward
              scaleVal = 0.8;
              zVal = -80;
              opacityVal = 0.5;
            } else if (isRight) {
              xPosition = 180; // Adjusted for 9:16 layout
              rotateYAngle = -30; // 3D Tilt inward
              scaleVal = 0.8;
              zVal = -80;
              opacityVal = 0.5;
            }

            // Adjust values for smaller screens dynamically through class & inline overrides
            return (
              <motion.div
                key={item.src}
                className="absolute w-[180px] sm:w-[240px] md:w-[300px] h-[320px] sm:h-[426px] md:h-[533px] origin-center"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  x: typeof window !== 'undefined' && window.innerWidth < 640 
                    ? xPosition * 0.45 
                    : typeof window !== 'undefined' && window.innerWidth < 768 
                      ? xPosition * 0.7 
                      : xPosition,
                  scale: scaleVal,
                  rotateY: rotateYAngle,
                  z: zVal,
                  opacity: opacityVal,
                  zIndex: isActive ? 10 : 5,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                }}
              >
                <VideoCard
                  src={item.src}
                  isActive={isActive}
                  isLeft={isLeft}
                  isRight={isRight}
                  isMuted={isMuted}
                  setIsMuted={setIsMuted}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentIndex(index);
                    }
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrow Right - Styled in premium gold/yellow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-8 w-12 h-12 rounded-full bg-black/75 border border-[#F4C400]/40 text-[#F4C400] hover:bg-black hover:border-[#F4C400] hover:scale-110 flex items-center justify-center cursor-pointer transition-all duration-200 z-30"
          style={{ textShadow: '0 0 10px rgba(244,196,0,0.4)' }}
          aria-label="Next Video"
        >
          <ChevronRight size={28} className="stroke-[2.5]" />
        </button>

      </div>
    </div>
  );
}
