// import { useState, useEffect, useRef } from "react";
// import ProductCard from "../ProductCard";

// const CustomCardArrowNextNavPrevInfiniteLoopDrag = () => {
// const products = [
//   {
//     image: "https://via.placeholder.com/150?text=1",
//     imageText: "Cat 1",
//     productName: "White cat picture",
//     productDetails: "White cat is showing pose of sleeping",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=2",
//     imageText: "Cat 2",
//     productName: "Black cat picture",
//     productDetails: "Black cat is showing pose of sleeping",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=3",
//     imageText: "Cat 3",
//     productName: "Black and White cat picture",
//     productDetails: "A girl holding a cat is showing pose of sleeping",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=4",
//     imageText: "Cat 4",
//     productName: "Black and White cat picture",
//     productDetails:
//       "Black and White cat is showing pose of sleeping on the mirror",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=5",
//     imageText: "Cat 5",
//     productName: "Orange AI cat picture",
//     productDetails: "Orange AI cat is showing pose of standing on the stone",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=6",
//     imageText: "Cat 6",
//     productName: "Ash AI cat picture",
//     productDetails: "Ash AI cat is showing pose of standing on a garden",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=7",
//     imageText: "Cat 7",
//     productName: "Two ash AI cat picture",
//     productDetails: "Two ash AI cat is showing pose of setting on garden",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=8",
//     imageText: "Cat 8",
//     productName: "Two black AI cat picture",
//     productDetails: "Two black AI cat is showing pose of watching each other",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=9",
//     imageText: "Cat 9",
//     productName: "White cat picture",
//     productDetails: "White cat is showing pose of sleeping",
//     buttonText: "Learn More",
//   },
//   {
//     image: "https://via.placeholder.com/150?text=10",
//     imageText: "Cat 10",
//     productName: "Black cat picture",
//     productDetails: "Black cat is showing pose of sleeping",
//     buttonText: "Learn More",
//   },
// ];

//   const navDiv = useRef(null);
//   const [navDivWidth, setNavDivWidth] = useState(0);
//   const [currentItemIndex, setCurrentItemIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Cloned items for infinite loop effect
//   const lastFourItems = products.slice(-4);
//   const firstFourItems = products.slice(0, 4);

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrevious = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex - 1);
//   };

//   useEffect(() => {
//     if (isTransitioning) {
//       if (currentItemIndex === products.length + 1) {
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(1);
//         }, 400);
//       } else if (currentItemIndex === 0) {
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(products.length);
//         }, 400);
//       }
//     }
//   }, [currentItemIndex, isTransitioning, products.length]);

//   useEffect(() => {
//     if (navDiv.current) {
//       setNavDivWidth(navDiv.current.clientWidth);
//     }

//     //
//     //use the below if need the width with margin and padding
//     //setNavDivWidth(navDiv.current.getBoundingClientRect().width);
//   }, [navDiv]);

//   // Calculate each nav segment width dynamically
//   const eachNavSegmentWidth = navDivWidth / products.length;

//   const styles = {
//     videoContainer: {
//       display: "flex",
//       width: `${(products.length + 8) * 25}%`,
//       height: "100%",
//       transition: isTransitioning ? "transform 0.4s ease-in-out" : "none",
//       transform: `translateX(-${
//         (currentItemIndex * 100) / (products.length + 8)
//       }%)`,
//     },
//     navigationLineContainer: {
//       position: "relative",
//       height: "4px",
//       width: "100%",
//       backgroundColor: "#76d4ff",
//       marginTop: "10px",
//       borderRadius: "2px",
//     },
//     highlightedLine: {
//       width: `${eachNavSegmentWidth}px`,
//       height: "100%",
//       backgroundColor: "#007bff",
//       borderRadius: "2px",
//       transition: "transform 0.4s ease",
//       transform: `translateX(${
//         currentItemIndex === 0 || currentItemIndex === products.length + 1
//           ? "none"
//           : eachNavSegmentWidth * (currentItemIndex - 1)
//       }px)`,
//     },
//   };

//   return (
//     <div className="relative w-[100%] h-full max-w-[1440px] mx-auto overflow-hidden pb-10">
//       {/* Navigation Line */}
//       <div className="pb-5 px-10 ">
//         <div
//           ref={navDiv}
//           style={styles.navigationLineContainer}
//           className="overflow-hidden"
//         >
//           <div style={styles.highlightedLine}></div>
//         </div>
//       </div>
//       <div className="relative w-full h-[100%]" style={styles.videoContainer}>
//         {/* Render last 4 items at the start */}
//         {lastFourItems.map((product, index) => (
//           <div
//             key={`last-${index}`}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className="w-full px-2">
//               <ProductCard {...product} />
//             </div>
//           </div>
//         ))}

//         {/* Render main items */}
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className="w-full px-2">
//               <ProductCard {...product} />
//             </div>
//           </div>
//         ))}

//         {/* Render first 4 items at the end */}
//         {firstFourItems.map((product, index) => (
//           <div
//             key={`first-${index}`}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className="w-full px-2">
//               <ProductCard {...product} />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5">
//         <button
//           className="bg-white/50 border-none text-[25px] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
//           onClick={handlePrevious}
//         >
//           &lt;
//         </button>
//         <button
//           className="bg-white/50 border-none text-[25px] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
//           onClick={handleNext}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomCardArrowNextNavPrevInfiniteLoopDrag;

import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard";

const CustomCardArrowNextNavPrevInfiniteLoopDrag = () => {
  const products = [
    {
      image: "https://via.placeholder.com/150?text=1",
      imageText: "Cat 1",
      productName: "White cat picture",
      productDetails: "White cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=2",
      imageText: "Cat 2",
      productName: "Black cat picture",
      productDetails: "Black cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=3",
      imageText: "Cat 3",
      productName: "Black and White cat picture",
      productDetails: "A girl holding a cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=4",
      imageText: "Cat 4",
      productName: "Black and White cat picture",
      productDetails:
        "Black and White cat is showing pose of sleeping on the mirror",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=5",
      imageText: "Cat 5",
      productName: "Orange AI cat picture",
      productDetails: "Orange AI cat is showing pose of standing on the stone",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=6",
      imageText: "Cat 6",
      productName: "Ash AI cat picture",
      productDetails: "Ash AI cat is showing pose of standing on a garden",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=7",
      imageText: "Cat 7",
      productName: "Two ash AI cat picture",
      productDetails: "Two ash AI cat is showing pose of setting on garden",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=8",
      imageText: "Cat 8",
      productName: "Two black AI cat picture",
      productDetails: "Two black AI cat is showing pose of watching each other",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=9",
      imageText: "Cat 9",
      productName: "White cat picture",
      productDetails: "White cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150?text=10",
      imageText: "Cat 10",
      productName: "Black cat picture",
      productDetails: "Black cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
  ];

  const navDiv = useRef(null);
  const [navDivWidth, setNavDivWidth] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffsetX, setDragOffsetX] = useState(0);

  const lastFourItems = products.slice(-4);
  const firstFourItems = products.slice(0, 4);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentItemIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentItemIndex((prevIndex) => prevIndex - 1);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const offsetX = e.clientX - dragStartX;
    setDragOffsetX(-offsetX); // Reverse offsetX to match dragging direction
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const direction = dragOffsetX > 50 ? -1 : dragOffsetX < -50 ? 1 : 0;
      if (direction !== 0) {
        setIsTransitioning(true);
        setCurrentItemIndex((prevIndex) => prevIndex + direction);
      }
      setIsDragging(false);
      setDragOffsetX(0);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      if (currentItemIndex === products.length + 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentItemIndex(1);
        }, 400);
      } else if (currentItemIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentItemIndex(products.length);
        }, 400);
      }
    }
  }, [currentItemIndex, isTransitioning, products.length]);

  useEffect(() => {
    if (navDiv.current) {
      setNavDivWidth(navDiv.current.clientWidth);
    }
  }, [navDiv]);

  useEffect(() => {
    // Attach mousemove and mouseup events to the window
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      // Remove listeners when not dragging
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const eachNavSegmentWidth = navDivWidth / products.length;

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(products.length + 8) * 25}%`,
      height: "100%",
      cursor: isDragging ? "grabbing" : "grab",
      transition: isTransitioning ? "transform 0.4s ease-in-out" : "none",
      transform: `translateX(-${
        (currentItemIndex * 100) / (products.length + 8) + dragOffsetX / 10
      }%)`,
    },
    navigationLineContainer: {
      position: "relative",
      height: "4px",
      width: "100%",
      backgroundColor: "#76d4ff",
      marginTop: "10px",
      borderRadius: "2px",
    },
    highlightedLine: {
      width: `${eachNavSegmentWidth}px`,
      height: "100%",
      backgroundColor: "#007bff",
      borderRadius: "2px",
      transition: "transform 0.4s ease",
      transform: `translateX(${
        currentItemIndex === 0 || currentItemIndex === products.length + 1
          ? "none"
          : eachNavSegmentWidth * (currentItemIndex - 1)
      }px)`,
    },
  };

  return (
    <div
      className="relative w-[100%] h-full max-w-[1440px] mx-auto overflow-hidden pb-10"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Navigation Line */}
      <div className="pb-5 px-10">
        <div
          ref={navDiv}
          style={styles.navigationLineContainer}
          className="overflow-hidden"
        >
          <div style={styles.highlightedLine}></div>
        </div>
      </div>
      <div className="relative w-full h-[100%]" style={styles.videoContainer}>
        {/* Render last 4 items at the start */}
        {lastFourItems.map((product, index) => (
          <div
            key={`last-${index}`}
            className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
          >
            <div className="w-full px-2">
              <ProductCard {...product} />
            </div>
          </div>
        ))}

        {/* Render main items */}
        {products.map((product, index) => (
          <div
            key={index}
            className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
          >
            <div className="w-full px-2">
              <ProductCard {...product} />
            </div>
          </div>
        ))}

        {/* Render first 4 items at the end */}
        {firstFourItems.map((product, index) => (
          <div
            key={`first-${index}`}
            className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
          >
            <div className="w-full px-2">
              <ProductCard {...product} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5">
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
    </div>
  );
};

export default CustomCardArrowNextNavPrevInfiniteLoopDrag;
