import { useState, useEffect, useRef } from "react";

import pepsiVideo from "../../../assets/videos/pepsi.mp4";
import cocaColaVideo from "../../../assets/videos/coca-cola.mp4";
import restaurantVideo from "../../../assets/videos/restaurant.mp4";
import cake from "../../../assets/videos/cake.mp4";
import cofee from "../../../assets/videos/cofee.mp4";
import blender from "../../../assets/videos/blender.mp4";
import fanta from "../../../assets/videos/fanta.mp4";
import nike from "../../../assets/videos/nike.mp4";

const CustomSliderArrowAutoNav = () => {
  const videos = [
    pepsiVideo,
    cocaColaVideo,
    restaurantVideo,
    cake,
    cofee,
    blender,
    fanta,
    nike,
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [startX, setStartX] = useState(0); // Initial mouse/touch position
  const [currentTranslateX, setCurrentTranslateX] = useState(0); // Current translateX value
  const videoContainerRef = useRef(null); // Ref for video container

  // Auto-move the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentVideoIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex - 1);
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentVideoIndex(index + 1); // Adjust for extra cloned slides
  };

  // Loop logic to reset index without transition after reaching the ends
  useEffect(() => {
    if (isTransitioning) {
      if (currentVideoIndex === videos.length + 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentVideoIndex(1);
        }, 500);
      } else if (currentVideoIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentVideoIndex(videos.length);
        }, 500);
      }
    }
  }, [currentVideoIndex, isTransitioning, videos.length]);

  // Handle drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // For mouse
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX); // For touch
  };

  // Handle drag end
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      handleDragEnd();
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      handleDragEnd();
    }
  };

  // Handle drag move
  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX; // Calculate the difference
      setCurrentTranslateX(deltaX); // Update current translateX
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - startX; // Calculate the difference
      setCurrentTranslateX(deltaX); // Update current translateX
    }
  };

  // Handle drag end logic
  const handleDragEnd = () => {
    if (currentTranslateX < -100) {
      handleNext(); // Move to next video if dragged left
    } else if (currentTranslateX > 100) {
      handlePrevious(); // Move to previous video if dragged right
    }
    setCurrentTranslateX(0); // Reset position
  };

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(videos.length + 2) * 100}%`,
      height: "100%",
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      transform: `translateX(-${
        (currentVideoIndex * 100) / (videos.length + 2) +
        (currentTranslateX / window.innerWidth) * 100 // Use currentTranslateX for drag effect
      }%)`,
    },
    bgVideo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div
      className="relative w-full h-full max-w-[1440px] mx-auto overflow-hidden"
      onMouseDown={handleMouseDown} // Attach mouse down event
      onMouseUp={handleMouseUp} // Attach mouse up event
      onMouseMove={handleMouseMove} // Attach mouse move event
      onTouchStart={handleTouchStart} // Attach touch start event
      onTouchEnd={handleTouchEnd} // Attach touch end event
      onTouchMove={handleTouchMove} // Attach touch move event
      ref={videoContainerRef} // Set ref for the video container
    >
      <div className="relative w-[100%] h-[50vh] bg-yellow-400"></div>
      <div
        className="relative w-[100%] h-[100vh]"
        style={styles.videoContainer}
      >
        <div className="relative w-full max-w-[1440px] h-full flex-grow flex-shrink basis-full">
          <video
            src={videos[videos.length - 1]}
            autoPlay
            loop
            muted
            style={styles.bgVideo}
          />
        </div>
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative w-full h-full flex-grow flex-shrink basis-full"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              className="relative w-full max-w-[1440px] h-full flex-grow flex-shrink basis-full"
            />
          </div>
        ))}
        <div className="relative w-full max-w-[1440px] h-full flex-grow flex-shrink basis-full">
          <video src={videos[0]} autoPlay loop muted style={styles.bgVideo} />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute w-full top-[60%] flex justify-center gap-5 z-[10]">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentVideoIndex - 1 === i ? "bg-yellow-500" : "bg-red-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5 ">
        <button
          className="bg-white/50 border-none text-[25px] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handlePrevious}
        >
          &lt;
        </button>

        <button
          className="bg-white/50 border-none text-[25px] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      <div className="relative w-[100%] h-[50vh] bg-yellow-400"></div>
    </div>
  );
};

export default CustomSliderArrowAutoNav;
