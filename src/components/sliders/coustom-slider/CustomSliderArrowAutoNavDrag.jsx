import { useState, useEffect } from "react";
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
  const [dragStart, setDragStart] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const slideThreshold = 50; // pixels to trigger slide

  // Auto-move the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
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
    setCurrentVideoIndex(index + 1);
  };

  // Drag functionality handlers
  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (dragStart !== null) {
      const distance = e.clientX - dragStart;
      setDragDistance(distance);
    }
  };

  const handleMouseUp = () => {
    if (Math.abs(dragDistance) > slideThreshold) {
      dragDistance < 0 ? handleNext() : handlePrevious();
    }

    setDragStart(null);
    setDragDistance(0);
    setIsTransitioning(true);
  };

  // Reset index when reaching the end or start
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

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(videos.length + 2) * 100}%`,
      height: "100%",
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      transform: `translateX(-${
        (currentVideoIndex * 100) / (videos.length + 2) -
        (dragDistance / window.innerWidth) * 100
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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
