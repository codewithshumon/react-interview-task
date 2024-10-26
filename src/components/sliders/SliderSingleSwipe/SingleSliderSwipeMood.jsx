import { useState, useEffect, useRef } from "react";

import pepsiVideo from "../../../assets/videos/pepsi.mp4";
import cocaColaVideo from "../../../assets/videos/coca-cola.mp4";
import restaurantVideo from "../../../assets/videos/restaurant.mp4";
import cake from "../../../assets/videos/cake.mp4";
import cofee from "../../../assets/videos/cofee.mp4";
import blender from "../../../assets/videos/blender.mp4";
import fanta from "../../../assets/videos/fanta.mp4";
import nike from "../../../assets/videos/nike.mp4";
import sweet from "../../../assets/videos/sweet.mp4";

import "./SingleSliderSwipeMood.css";

const SingleSliderSwipeMood = () => {
  const videos = [
    pepsiVideo,
    cocaColaVideo,
    restaurantVideo,
    cake,
    cofee,
    blender,
    fanta,
    nike,
    sweet,
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const videoContainerRef = useRef(null);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentVideoIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isTransitioning) {
      const handleTransitionEnd = () => {
        setIsTransitioning(false);

        // Reset index if we're at a cloned slide (simulate infinite loop)
        if (currentVideoIndex >= videos.length + 1) {
          setCurrentVideoIndex(1);
        } else if (currentVideoIndex <= 0) {
          setCurrentVideoIndex(videos.length);
        }
      };

      const container = videoContainerRef.current;
      container.addEventListener("transitionend", handleTransitionEnd);

      return () =>
        container.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [currentVideoIndex, isTransitioning, videos.length]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const endX = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
    const distance = endX - startX;

    if (distance > 50) {
      handlePrevious();
    } else if (distance < -50) {
      handleNext();
    }

    setIsDragging(false);
  };

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(videos.length + 2) * 100}%`,
      height: "100%",
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      transform: `translateX(-${
        (currentVideoIndex * 100) / (videos.length + 2)
      }%)`,
    },
  };

  return (
    <div className="landing-page">
      <div
        className="video-container"
        style={styles.videoContainer}
        ref={videoContainerRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={() => isDragging && handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={() => isDragging && handleDragEnd}
      >
        <div className="video-wrapper">
          <video
            src={videos[videos.length - 1]}
            autoPlay
            loop
            muted
            style={styles.bgVideo}
          />
        </div>
        {videos.map((video, i) => (
          <div key={i} style={styles.videoWrapper}>
            <video src={video} autoPlay loop muted style={styles.bgVideo} />
          </div>
        ))}
        <div style={styles.videoWrapper}>
          <video src={videos[0]} autoPlay loop muted style={styles.bgVideo} />
        </div>
      </div>

      {/* Overlay moved outside the videoContainer */}
      <div style={styles.overlay}>
        <button style={styles.arrow} onClick={handlePrevious}>
          &lt;
        </button>
        <button style={styles.arrow} onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div style={styles.progressContainer}>
        {videos.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.progressBar,
              ...(currentVideoIndex === index + 1
                ? styles.progressBarActive
                : {}),
            }}
            onClick={() => setCurrentVideoIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleSliderSwipeMood;
