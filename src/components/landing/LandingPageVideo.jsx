import { useState, useEffect, useRef } from "react";

import pepsiVideo from "../../assets/videos/pepsi.mp4";
import cocaColaVideo from "../../assets/videos/coca-cola.mp4";
import restaurantVideo from "../../assets/videos/restaurant.mp4";

const LandingPageVideo = () => {
  const videos = [pepsiVideo, cocaColaVideo, restaurantVideo];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const videoRef = useRef(null);
  const videoContainerRef = useRef(null); // This was missing

  // Change video every 5 seconds
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }
  }, [currentVideoIndex, isDragging]);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  // Handle drag end
  const handleDragEnd = (e) => {
    if (!isDragging) return;

    const endX = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
    const distance = endX - startX;

    if (distance > 50) {
      handlePrevious(); // Swiped right
    } else if (distance < -50) {
      handleNext(); // Swiped left
    }

    setIsDragging(false);
  };

  const handleDragMove = () => {
    if (!isDragging) return;
  };

  // Inline styles
  const styles = {
    landingPage: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
    },
    videoContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    bgVideo: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      objectFit: "cover", // Keeps the video proportions consistent
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    arrow: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer",
      padding: "10px",
    },
    progressContainer: {
      position: "absolute",
      bottom: "20px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    progressBar: {
      width: "50px",
      height: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      cursor: "pointer",
    },
    progressBarActive: {
      backgroundColor: "white",
    },
  };

  return (
    <div style={styles.landingPage}>
      <div
        style={styles.videoContainer}
        ref={videoContainerRef} // Use the newly defined ref here
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        <video
          ref={videoRef}
          key={videos[currentVideoIndex]}
          src={videos[currentVideoIndex]}
          autoPlay
          loop
          muted
          style={styles.bgVideo}
        />
        <div style={styles.overlay}>
          <button style={styles.arrow} onClick={handlePrevious}>
            &lt;
          </button>
          <button style={styles.arrow} onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      <div style={styles.progressContainer}>
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              ...styles.progressBar,
              ...(currentVideoIndex === index ? styles.progressBarActive : {}),
            }}
            onClick={() => handleVideoChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPageVideo;
