import { useEffect, useRef, useState } from "react";

const TrackCardVisibility = () => {
  const firstItemRef = useRef(null);
  const [position, setPosition] = useState("");
  const containerRef = useRef(null); 


  // Scroll the container left or right
  const scrollContainer = (direction) => {
    const container = containerRef.current; // Get the container reference
    const scrollAmount = direction === "left" ? -100 : 100; // Amount to scroll

    if (container) {
      container.scrollLeft += scrollAmount; // Scroll the container left or right
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { boundingClientRect } = entry;

        // Check if the first item is intersecting the viewport
        if (entry.isIntersecting) {
          setPosition("visible");
        } else {
          // Check if the item is off the left or right side of the viewport
          if (boundingClientRect.right < 0) {
            setPosition("left"); // First item is off to the left
          } else if (boundingClientRect.left > window.innerWidth) {
            setPosition("right"); // First item is off to the right
          }
        }
      });
    });

    if (firstItemRef.current) {
      observer.observe(firstItemRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (firstItemRef.current) {
        observer.unobserve(firstItemRef.current);
      }
    };
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button onClick={() => scrollContainer("left")}>Scroll Left</button>
        <button onClick={() => scrollContainer("right")}>Scroll Right</button>
      </div>
      <div
        ref={containerRef} // Set the reference for the container
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          border: "1px solid #ccc",
          position: "relative",
          width: "400px", // Set a width for the container
          height: "120px", // Set a height for the container
        }}
      >
        <div style={{ display: "flex" }}>
          {/* Render 10 items */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              ref={index === 0 ? firstItemRef : null} // Reference to the first item only
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "lightblue",
                margin: "5px",
                display: "inline-block",
                border: "1px solid #007BFF",
                boxSizing: "border-box",
              }}
            >
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
      <p>The first item is currently: {position}</p>
    </div>
  );
};

export default TrackCardVisibility;
