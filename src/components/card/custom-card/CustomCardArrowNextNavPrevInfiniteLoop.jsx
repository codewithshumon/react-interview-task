// import { useState, useEffect } from "react";
// import ProductCard from "../ProductCard";

// const CustomCardArrowNextNavPrevInfiniteLoop = () => {
//   const products = [
//     {
//       image:
//         "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
//       imageText: "Cat 1",
//       productName: "White cat picture",
//       productDetails: "White cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
//       imageText: "Cat 2",
//       productName: "Black cat picture",
//       productDetails: "Black cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
//       imageText: "Cat 3",
//       productName: "Black and White cat picture",
//       productDetails: "A girl holding a cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
//       imageText: "Cat 4",
//       productName: "Black and White cat picture",
//       productDetails:
//         "Black and White cat is showing pose of sleeping on the mirror",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
//       imageText: "Cat 5",
//       productName: "Orange AI cat picture",
//       productDetails: "Orange AI cat is showing pose of standing on the stone",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
//       imageText: "Cat 6",
//       productName: "Ash AI cat picture",
//       productDetails: "Ash AI cat is showing pose of standing on a garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
//       imageText: "Cat 7",
//       productName: "Two ash AI cat picture",
//       productDetails: "Two ash AI cat is showing pose of setting on garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
//       imageText: "Cat 8",
//       productName: "Two black AI cat picture",
//       productDetails: "Two black AI cat is showing pose of watching each other",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
//       imageText: "Cat 1",
//       productName: "White cat picture",
//       productDetails: "White cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
//       imageText: "Cat 2",
//       productName: "Black cat picture",
//       productDetails: "Black cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
//       imageText: "Cat 3",
//       productName: "Black and White cat picture",
//       productDetails: "A girl holding a cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
//       imageText: "Cat 4",
//       productName: "Black and White cat picture",
//       productDetails:
//         "Black and White cat is showing pose of sleeping on the mirror",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
//       imageText: "Cat 5",
//       productName: "Orange AI cat picture",
//       productDetails: "Orange AI cat is showing pose of standing on the stone",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
//       imageText: "Cat 6",
//       productName: "Ash AI cat picture",
//       productDetails: "Ash AI cat is showing pose of standing on a garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
//       imageText: "Cat 7",
//       productName: "Two ash AI cat picture",
//       productDetails: "Two ash AI cat is showing pose of setting on garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
//       imageText: "Cat 8",
//       productName: "Two black AI cat picture",
//       productDetails: "Two black AI cat is showing pose of watching each other",
//       buttonText: "Learn More",
//     },
//   ];

//   const [currentItemIndex, setCurrentItemIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Get the last four and first four items
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

//   const styles = {
//     videoContainer: {
//       display: "flex",
//       width: `${(products.length + 8) * 25}%`, // Account for extra cloned slides
//       height: "100%",
//       transition: isTransitioning ? "transform 0.4s ease-in-out" : "none",
//       transform: `translateX(-${
//         (currentItemIndex * 100) / (products.length + 8)
//       }%)`,
//     },
//   };

//   return (
//     <div className="relative w-[100%]  h-full max-w-[1440px] mx-auto overflow-hidden pb-10">
//       <div className=" relative w-full h-[100%]" style={styles.videoContainer}>
//         {/* Render last 4 items at the start */}
//         {lastFourItems.map((product, index) => (
//           <div
//             key={`last-${index}`}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className="w-full px-2">
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
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
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
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
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
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

// export default CustomCardArrowNextNavPrevInfiniteLoop;

//
//
//
//
//
//
//
//
//
//
//
//
//

// WITH THE NAVIGATION LINE WITH JUMPING EFFECT

// import { useState, useEffect, useRef } from "react";
// import ProductCard from "../ProductCard";

// const CustomCardArrowNextNavPrevInfiniteLoop = () => {
//   const products = [
//     {
//       image:
//         "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
//       imageText: "Cat 1",
//       productName: "White cat picture",
//       productDetails: "White cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
//       imageText: "Cat 2",
//       productName: "Black cat picture",
//       productDetails: "Black cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
//       imageText: "Cat 3",
//       productName: "Black and White cat picture",
//       productDetails: "A girl holding a cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
//       imageText: "Cat 4",
//       productName: "Black and White cat picture",
//       productDetails:
//         "Black and White cat is showing pose of sleeping on the mirror",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
//       imageText: "Cat 5",
//       productName: "Orange AI cat picture",
//       productDetails: "Orange AI cat is showing pose of standing on the stone",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
//       imageText: "Cat 6",
//       productName: "Ash AI cat picture",
//       productDetails: "Ash AI cat is showing pose of standing on a garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
//       imageText: "Cat 7",
//       productName: "Two ash AI cat picture",
//       productDetails: "Two ash AI cat is showing pose of setting on garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
//       imageText: "Cat 8",
//       productName: "Two black AI cat picture",
//       productDetails: "Two black AI cat is showing pose of watching each other",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
//       imageText: "Cat 1",
//       productName: "White cat picture",
//       productDetails: "White cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
//       imageText: "Cat 2",
//       productName: "Black cat picture",
//       productDetails: "Black cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
//       imageText: "Cat 3",
//       productName: "Black and White cat picture",
//       productDetails: "A girl holding a cat is showing pose of sleeping",
//       buttonText: "Learn More",
//     },
//     {
//       image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
//       imageText: "Cat 4",
//       productName: "Black and White cat picture",
//       productDetails:
//         "Black and White cat is showing pose of sleeping on the mirror",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
//       imageText: "Cat 5",
//       productName: "Orange AI cat picture",
//       productDetails: "Orange AI cat is showing pose of standing on the stone",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
//       imageText: "Cat 6",
//       productName: "Ash AI cat picture",
//       productDetails: "Ash AI cat is showing pose of standing on a garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
//       imageText: "Cat 7",
//       productName: "Two ash AI cat picture",
//       productDetails: "Two ash AI cat is showing pose of setting on garden",
//       buttonText: "Learn More",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
//       imageText: "Cat 8",
//       productName: "Two black AI cat picture",
//       productDetails: "Two black AI cat is showing pose of watching each other",
//       buttonText: "Learn More",
//     },
//   ];

//   const navDiv = useRef(null);
//   const [currentItemIndex, setCurrentItemIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [navDivWidth, setNavDivWidth] = useState(0);

//   // Get the last four and first four items
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
//       // Get the total width of the div including padding and border
//       const width = navDiv.current.getBoundingClientRect().width;
//       setNavDivWidth(width);
//     }
//   }, [navDiv]);

//   const eachNavDeivWidth = navDivWidth / products.length + 3;

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
//       width: `${eachNavDeivWidth}px`,
//       height: "100%",
//       backgroundColor: "#007bff",
//       borderRadius: "2px",
//       transition: "transform 0.4s ease",
//       transform: `translateX(${currentItemIndex * eachNavDeivWidth}%)`, // Shift position per index
//     },
//   };

//   return (
//     <div className="relative w-[100%] h-full max-w-[1440px] mx-auto overflow-hidden pb-10">
//       {/* Navigation Line */}
//       <div ref={navDiv} style={styles.navigationLineContainer}>
//         <div style={styles.highlightedLine}></div>
//       </div>

//       <div
//         className="relative w-full h-[100%] pt-5"
//         style={styles.videoContainer}
//       >
//         {/* Render last 4 items at the start */}
//         {lastFourItems.map((product, index) => (
//           <div
//             key={`last-${index}`}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className="w-full px-2">
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
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
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
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
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
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

// export default CustomCardArrowNextNavPrevInfiniteLoop;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//WITH THE NAVIGATION LINE WITH JUMPING EFFECT

import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard";

const CustomCardArrowNextNavPrevInfiniteLoop = () => {
  const products = [
    {
      image:
        "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
      imageText: "Cat 1",
      productName: "White cat picture",
      productDetails: "White cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
      imageText: "Cat 2",
      productName: "Black cat picture",
      productDetails: "Black cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
      imageText: "Cat 3",
      productName: "Black and White cat picture",
      productDetails: "A girl holding a cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
      imageText: "Cat 4",
      productName: "Black and White cat picture",
      productDetails:
        "Black and White cat is showing pose of sleeping on the mirror",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
      imageText: "Cat 5",
      productName: "Orange AI cat picture",
      productDetails: "Orange AI cat is showing pose of standing on the stone",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
      imageText: "Cat 6",
      productName: "Ash AI cat picture",
      productDetails: "Ash AI cat is showing pose of standing on a garden",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
      imageText: "Cat 7",
      productName: "Two ash AI cat picture",
      productDetails: "Two ash AI cat is showing pose of setting on garden",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
      imageText: "Cat 8",
      productName: "Two black AI cat picture",
      productDetails: "Two black AI cat is showing pose of watching each other",
      buttonText: "Learn More",
    },
    {
      image:
        "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
      imageText: "Cat 1",
      productName: "White cat picture",
      productDetails: "White cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg",
      imageText: "Cat 2",
      productName: "Black cat picture",
      productDetails: "Black cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
      imageText: "Cat 3",
      productName: "Black and White cat picture",
      productDetails: "A girl holding a cat is showing pose of sleeping",
      buttonText: "Learn More",
    },
    {
      image: "https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg",
      imageText: "Cat 4",
      productName: "Black and White cat picture",
      productDetails:
        "Black and White cat is showing pose of sleeping on the mirror",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/close-up-felt-animal_23-2151728495.jpg",
      imageText: "Cat 5",
      productName: "Orange AI cat picture",
      productDetails: "Orange AI cat is showing pose of standing on the stone",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kitten-with-flowers-outdoors_23-2150752808.jpg",
      imageText: "Cat 6",
      productName: "Ash AI cat picture",
      productDetails: "Ash AI cat is showing pose of standing on a garden",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752776.jpg",
      imageText: "Cat 7",
      productName: "Two ash AI cat picture",
      productDetails: "Two ash AI cat is showing pose of setting on garden",
      buttonText: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-kittens-with-flowers-outdoors_23-2150752780.jpg",
      imageText: "Cat 8",
      productName: "Two black AI cat picture",
      productDetails: "Two black AI cat is showing pose of watching each other",
      buttonText: "Learn More",
    },
  ];

  const navDiv = useRef(null);
  const [navDivWidth, setNavDivWidth] = useState(0);

  const [currentItemIndex, setCurrentItemIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get the last four and first four items
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
    // Calculate navigation bar width
    if (navDiv.current) {
      setNavDivWidth(navDiv.current.getBoundingClientRect().width);
    }
  }, [navDiv]);

  const eachNavDeivWidth = navDivWidth / products.length + 3;

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(products.length + 8) * 25}%`, // Account for extra cloned slides
      height: "100%",
      transition: isTransitioning ? "transform 0.4s ease-in-out" : "none",
      transform: `translateX(-${
        (currentItemIndex * 100) / (products.length + 8)
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
      width: `${eachNavDeivWidth}px`,
      height: "100%",
      backgroundColor: "#007bff",
      borderRadius: "2px",
      transition: "transform 0.4s ease",
      transform: `translateX(${(currentItemIndex - 1) * eachNavDeivWidth}%)`,
    },
  };

  return (
    <div className="relative w-[100%]  h-full max-w-[1440px] mx-auto overflow-hidden pb-10">
      {/* Navigation Line */}
      <div className=" pb-5">
        <div ref={navDiv} style={styles.navigationLineContainer}>
          <div style={styles.highlightedLine}></div>
        </div>
      </div>
      <div className=" relative w-full h-[100%]" style={styles.videoContainer}>
        {/* Render last 4 items at the start */}
        {lastFourItems.map((product, index) => (
          <div
            key={`last-${index}`}
            className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
          >
            <div className="w-full px-2">
              <ProductCard
                image={product.image}
                imageText={product.imageText}
                productName={product.productName}
                productDetails={product.productDetails}
                buttonText={product.buttonText}
              />
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
              <ProductCard
                image={product.image}
                imageText={product.imageText}
                productName={product.productName}
                productDetails={product.productDetails}
                buttonText={product.buttonText}
              />
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
              <ProductCard
                image={product.image}
                imageText={product.imageText}
                productName={product.productName}
                productDetails={product.productDetails}
                buttonText={product.buttonText}
              />
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

export default CustomCardArrowNextNavPrevInfiniteLoop;
