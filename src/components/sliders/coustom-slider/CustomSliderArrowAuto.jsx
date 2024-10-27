import { useState, useEffect } from "react";

import pepsiVideo from "../../../assets/videos/pepsi.mp4";
import cocaColaVideo from "../../../assets/videos/coca-cola.mp4";
import restaurantVideo from "../../../assets/videos/restaurant.mp4";
import cake from "../../../assets/videos/cake.mp4";
import cofee from "../../../assets/videos/cofee.mp4";
import blender from "../../../assets/videos/blender.mp4";
import fanta from "../../../assets/videos/fanta.mp4";
import nike from "../../../assets/videos/nike.mp4";

const CustomSliderArrowAuto = () => {
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

  // Auto-move the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentVideoIndex]); // Restart interval on index change

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex - 1);
  };

  // Loop logic to reset index without transition after reaching the ends
  useEffect(() => {
    if (isTransitioning) {
      if (currentVideoIndex === videos.length + 1) {
        // After reaching the cloned last video, jump back to first video
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentVideoIndex(1);
        }, 500); // Delay must match the transition time
      } else if (currentVideoIndex === 0) {
        // After reaching the cloned first video, jump to last video
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
      width: `${(videos.length + 2) * 100}%`, // Account for extra cloned slides
      height: "100%",
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      transform: `translateX(-${
        (currentVideoIndex * 100) / (videos.length + 2)
      }%)`,
    },
    bgVideo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div className=" relative w-full h-full max-w-[1440px] mx-auto overflow-hidden ">
      <div className=" relative w-[100%] h-[50vh] bg-blue-400"></div>
      <div
        className="relative w-[100%] h-[100vh] "
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
              className="relative w-full  max-w-[1440px] h-full flex-grow flex-shrink basis-full"
            />
          </div>
        ))}
        <div className="relative w-full  max-w-[1440px] h-full flex-grow flex-shrink basis-full">
          <video src={videos[0]} autoPlay loop muted style={styles.bgVideo} />
        </div>
      </div>

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

      <div className=" relative w-[100%] h-[50vh] bg-blue-400"></div>
    </div>
  );
};

export default CustomSliderArrowAuto;
