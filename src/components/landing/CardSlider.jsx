import { useState, useEffect, useRef } from "react";

// Dynamic card data from a constant array
const cardData = [
  { id: 1, title: "Card 1", description: "Description 1" },
  { id: 2, title: "Card 2", description: "Description 2" },
  { id: 3, title: "Card 3", description: "Description 3" },
  { id: 4, title: "Card 4", description: "Description 4" },
  { id: 5, title: "Card 5", description: "Description 5" },
  { id: 6, title: "Card 6", description: "Description 6" },
];

const CardSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(1); // Start from 1 for seamless looping
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const cardCount = cardData.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle card transitions
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentCardIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      if (currentCardIndex === cardCount) {
        setCurrentCardIndex(1); // Loop back to first real card
        sliderRef.current.style.transition = "none"; // Disable transition to avoid jump
        sliderRef.current.style.transform = `translateX(-100%)`;
      }
      setIsAnimating(false);
    }, 500); // Match the CSS transition duration
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentCardIndex((prevIndex) => prevIndex - 1);

    setTimeout(() => {
      if (currentCardIndex === 0) {
        setCurrentCardIndex(cardCount); // Loop back to last real card
        sliderRef.current.style.transition = "none"; // Disable transition to avoid jump
        sliderRef.current.style.transform = `translateX(-${cardCount * 100}%)`;
      }
      setIsAnimating(false);
    }, 500);
  };

  // Handle drag logic can be added similarly if needed

  // Inline styles
  const styles = {
    slider: {
      position: "relative",
      overflow: "hidden",
      width: "100vw", // Full viewport width
    },
    cardContainer: {
      display: "flex",
      width: `${(cardCount + 2) * 100}%`, // Extra 2 for the cloned cards
      transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
      transform: `translateX(-${currentCardIndex * 100}%)`, // Adjust based on current card
    },
    card: {
      flex: "0 0 100%", // Each card takes full width
      height: "300px",
      backgroundColor: "#ddd",
      margin: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
    },
    arrowButton: {
      position: "absolute",
      top: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer",
      padding: "10px",
    },
    leftArrow: {
      left: "10px",
      transform: "translateY(-50%)",
    },
    rightArrow: {
      right: "10px",
      transform: "translateY(-50%)",
    },
  };

  return (
    <div style={styles.slider}>
      {/* Card Container */}
      <div ref={sliderRef} style={styles.cardContainer}>
        {/* Cloned last card for seamless looping */}
        <div style={styles.card}>
          <h3>{cardData[cardCount - 1].title}</h3>
          <p>{cardData[cardCount - 1].description}</p>
        </div>

        {/* Render real cards */}
        {cardData.map((card) => (
          <div key={card.id} style={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}

        {/* Cloned first card for seamless looping */}
        <div style={styles.card}>
          <h3>{cardData[0].title}</h3>
          <p>{cardData[0].description}</p>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        style={{ ...styles.arrowButton, ...styles.leftArrow }}
        onClick={handlePrevious}
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        style={{ ...styles.arrowButton, ...styles.rightArrow }}
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
