/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

const LandingPageYT = () => {
  const videos = [
    "https://www.youtube.com/embed/2-YN-hRUtfI?autoplay=1&mute=1&controls=0",
    "https://www.youtube.com/embed/fLeJJPxua3E?autoplay=1&mute=1&controls=0",
    "https://www.youtube.com/embed/YSuusbKQioU?autoplay=1&mute=1&controls=0",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Reference to detect drag
  const videoContainerRef = useRef(null);

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
      border: "none",
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
        ref={videoContainerRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        <iframe
          key={videos[currentVideoIndex]}
          src={videos[currentVideoIndex]}
          style={styles.bgVideo}
          allow="autoplay; encrypted-media"
          allowFullScreen
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

export default LandingPageYT;

// import { useState, useEffect } from "react";

// const LandingPage = () => {
//   const videos = [
//     "https://www.youtube.com/embed/2-YN-hRUtfI",
//     "https://www.youtube.com/embed/fLeJJPxua3E",
//     "https://www.youtube.com/embed/YSuusbKQioU",
//   ];

//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   // Change video every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // 5 seconds

//     return () => clearInterval(interval);
//   }, [currentVideoIndex]);

//   const handleNext = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === 0 ? videos.length - 1 : prevIndex - 1
//     );
//   };

//   const handleVideoChange = (index) => {
//     setCurrentVideoIndex(index);
//   };

//   // Inline styles
//   const styles = {
//     landingPage: {
//       position: "relative",
//       height: "100vh",
//       width: "100vw",
//       overflow: "hidden",
//     },
//     videoContainer: {
//       position: "relative",
//       width: "100%",
//       height: "100%",
//       overflow: "hidden",
//     },
//     bgVideo: {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       width: "100%",
//       height: "100%",
//       transform: "translate(-50%, -50%)",
//       border: "none",
//     },
//     overlay: {
//       position: "absolute",
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     arrow: {
//       backgroundColor: "rgba(255, 255, 255, 0.5)",
//       border: "none",
//       fontSize: "2rem",
//       cursor: "pointer",
//       padding: "10px",
//     },
//     progressContainer: {
//       position: "absolute",
//       bottom: "20px",
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "10px",
//     },
//     progressBar: {
//       width: "50px",
//       height: "5px",
//       backgroundColor: "rgba(255, 255, 255, 0.5)",
//       cursor: "pointer",
//     },
//     progressBarActive: {
//       backgroundColor: "white",
//     },
//   };

//   return (
//     <div style={styles.landingPage}>
//       <div style={styles.videoContainer}>
//         <iframe
//           key={videos[currentVideoIndex]}
//           src={videos[currentVideoIndex]}
//           style={styles.bgVideo}
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//         <div style={styles.overlay}>
//           <button style={styles.arrow} onClick={handlePrevious}>
//             &lt;
//           </button>
//           <button style={styles.arrow} onClick={handleNext}>
//             &gt;
//           </button>
//         </div>
//       </div>

//       <div style={styles.progressContainer}>
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.progressBar,
//               ...(currentVideoIndex === index ? styles.progressBarActive : {}),
//             }}
//             onClick={() => handleVideoChange(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
