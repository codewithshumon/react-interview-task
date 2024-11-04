// import { useState, useEffect } from "react";

// import ProductCard from "../card/ProductCard";

// const CustomCardTest = () => {
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

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrevious = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex - 1);
//   };

//   // Loop logic to reset index without transition after reaching the ends
//   useEffect(() => {
//     if (isTransitioning) {
//       if (currentItemIndex === products.length + 1) {
//         // After reaching the cloned last video, jump back to first video
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(1);
//         }, 500); // Delay must match the transition time
//       } else if (currentItemIndex === 0) {
//         // After reaching the cloned first video, jump to last video
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(products.length);
//         }, 500);
//       }
//     }
//   }, [currentItemIndex, isTransitioning, products.length]);

//   const styles = {
//     videoContainer: {
//       display: "flex",
//       width: `${(products.length + 2) * 25}%`, // Account for extra cloned slides
//       height: "100%",
//       transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
//       transform: `translateX(-${
//         (currentItemIndex * 100) / (products.length + 2)
//       }%)`,
//     },
//     bgVideo: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//   };

//   return (
//     <div className=" relative w-full h-full max-w-[1440px] mx-auto overflow-hidden ">
//       <div
//         className="relative w-[100%] h-[100vh] "
//         style={styles.videoContainer}
//       >
//         <div className="relative w-[300px] h-full flex-grow flex-shrink basis-full">
//           {products.length > 0 && (
//             <div className=" w-full px-2">
//               <ProductCard
//                 image={products[products.length - 1].image}
//                 imageText={products[products.length - 1].imageText}
//                 productName={products[products.length - 1].productName}
//                 productDetails={products[products.length - 1].productDetails}
//                 buttonText={products[products.length - 1].buttonText}
//               />
//             </div>
//           )}
//         </div>
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className=" w-full px-2">
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

//         <div className="relative w-[300px] h-full flex-grow flex-shrink basis-full">
//           <div className=" w-full px-2">
//             <ProductCard
//               image={products[0].image}
//               imageText={products[0].imageText}
//               productName={products[0].productName}
//               productDetails={products[0].productDetails}
//               buttonText={products[0].buttonText}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5 ">
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

// export default CustomCardTest;

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
//
//

// import { useState, useEffect } from "react";

// import ProductCard from "../card/ProductCard";

// const CustomCardTest = () => {
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

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrevious = () => {
//     setIsTransitioning(true);
//     setCurrentItemIndex((prevIndex) => prevIndex - 1);
//   };

//   // Loop logic to reset index without transition after reaching the ends
//   useEffect(() => {
//     if (isTransitioning) {
//       if (currentItemIndex === products.length + 1) {
//         // After reaching the cloned last video, jump back to first video
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(1);
//         }, 500); // Delay must match the transition time
//       } else if (currentItemIndex === 0) {
//         // After reaching the cloned first video, jump to last video
//         setTimeout(() => {
//           setIsTransitioning(false);
//           setCurrentItemIndex(products.length);
//         }, 500);
//       }
//     }
//   }, [currentItemIndex, isTransitioning, products.length]);

//   const styles = {
//     videoContainer: {
//       display: "flex",
//       width: `${(products.length + 2) * 100}%`, // Account for extra cloned slides
//       height: "100%",
//       transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
//       transform: `translateX(-${
//         (currentItemIndex * 100) / (products.length + 2)
//       }%)`,
//     },
//     bgVideo: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//   };

//   return (
//     <div className=" relative w-full h-full max-w-[1440px] mx-auto overflow-hidden ">
//       <div
//         className="relative w-[100%] h-[100vh] "
//         style={styles.videoContainer}
//       >
//         <div className="relative w-full max-w-[1440px] h-full flex-grow flex-shrink basis-full">
//           {products.length > 0 && (
//             <div className=" w-full px-2">
//               <ProductCard
//                 image={products[products.length - 1].image}
//                 imageText={products[products.length - 1].imageText}
//                 productName={products[products.length - 1].productName}
//                 productDetails={products[products.length - 1].productDetails}
//                 buttonText={products[products.length - 1].buttonText}
//               />
//             </div>
//           )}
//         </div>
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-[300px] h-full flex-grow flex-shrink basis-full"
//           >
//             <div className=" w-full px-2">
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

//         <div className="relative w-[300px]  h-full flex-grow flex-shrink basis-full">
//           <div className=" w-full px-2">
//             <ProductCard
//               image={products[0].image}
//               imageText={products[0].imageText}
//               productName={products[0].productName}
//               productDetails={products[0].productDetails}
//               buttonText={products[0].buttonText}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5 ">
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

// export default CustomCardTest;

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
//
//

// AFTER ENDING IT START FROM THE BEGINING WITH TRNASITION

/* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect, useRef } from "react";
// import ProductCard from "../card/ProductCard";

// const CustomCardTest = () => {
//   const firstItemRef = useRef(null);
//   const lastItemRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 4;

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

//   const maxIndex = Math.ceil(products.length / itemsToShow) - 1;

//   const handleNext = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentIndex(0); // Reset to the first item when reaching the end
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else {
//       setCurrentIndex(maxIndex); // Jump to the last item if at the start
//     }
//   };

//   useEffect(() => {
//     if (currentIndex === maxIndex + 1) {
//       setTimeout(() => setCurrentIndex(0), 500);
//     } else if (currentIndex === -1) {
//       setTimeout(() => setCurrentIndex(maxIndex), 500);
//     }
//   }, [currentIndex]);

//   const styles = {
//     sliderContainer: {
//       display: "flex",
//       transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
//       transition: "transform 0.5s ease-in-out",
//       width: `${(products.length * 100) / itemsToShow}%`,
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
//       width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
//       height: "100%",
//       backgroundColor: "#007bff",
//       borderRadius: "2px",
//       transition: "width 0.5s ease-in-out",
//     },
//   };

//   return (
//     <div className="relative w-full  mx-auto overflow-hidden">
//       {/* Navigation Line */}
//       <div style={styles.navigationLineContainer}>
//         <div style={styles.highlightedLine}></div>
//       </div>

//       <div className="flex w-full py-10" style={styles.sliderContainer}>
//         {products.length > 0 && (
//           <div className=" w-1/4 px-2">
//             <ProductCard
//               image={products[products.length - 1].image}
//               imageText={products[products.length - 1].imageText}
//               productName={products[products.length - 1].productName}
//               productDetails={products[products.length - 1].productDetails}
//               buttonText={products[products.length - 1].buttonText}
//             />
//           </div>
//         )}

//         {/* Always render the main set of products */}
//         {products.map((product, index) => (
//           <div
//             key={`main-${index}`}
//             className="w-1/4 px-2"
//             ref={
//               index === 0
//                 ? firstItemRef
//                 : index === products.length - 1
//                 ? lastItemRef
//                 : null
//             }
//           >
//             <ProductCard
//               image={product.image}
//               imageText={product.imageText}
//               productName={product.productName}
//               productDetails={product.productDetails}
//               buttonText={product.buttonText}
//             />
//           </div>
//         ))}

//         {products.length > 0 && (
//           <div className=" w-1/4 px-2">
//             <ProductCard
//               image={products[0].image}
//               imageText={products[0].imageText}
//               productName={products[0].productName}
//               productDetails={products[0].productDetails}
//               buttonText={products[0].buttonText}
//             />
//           </div>
//         )}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//         // disabled={firstItemVisible}
//       >
//         &lt;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CustomCardTest;

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
//
//

// AFTER ENDING IT START FROM THE BEGINING WITHOUT TRNASITION

// import { useState, useEffect } from "react";
// import ProductCard from "../card/ProductCard";

// const CustomCardTest = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);
//   const itemsToShow = 4;

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

//   const maxIndex = Math.ceil(products.length / itemsToShow) - 1;

//   const handleNext = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else {
//       // Temporarily disable transition to loop
//       setTransitionEnabled(false);
//       setCurrentIndex(0); // Reset to the first item
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else {
//       // Temporarily disable transition to loop
//       setTransitionEnabled(false);
//       setCurrentIndex(maxIndex); // Jump to the last item
//     }
//   };

//   useEffect(() => {
//     if (!transitionEnabled) {
//       const timeoutId = setTimeout(() => setTransitionEnabled(true), 0);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [transitionEnabled]);

//   const styles = {
//     sliderContainer: {
//       display: "flex",
//       transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
//       transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
//       width: `${(products.length * 100) / itemsToShow}%`,
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
//       width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
//       height: "100%",
//       backgroundColor: "#007bff",
//       borderRadius: "2px",
//       transition: "width 0.5s ease-in-out",
//     },
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       {/* Navigation Line */}
//       <div style={styles.navigationLineContainer}>
//         <div style={styles.highlightedLine}></div>
//       </div>

//       <div className="flex w-full py-10" style={styles.sliderContainer}>
//         {/* Render the main set of products */}
//         {products.map((product, index) => (
//           <div key={`main-${index}`} className="w-1/4 px-2">
//             <ProductCard
//               image={product.image}
//               imageText={product.imageText}
//               productName={product.productName}
//               productDetails={product.productDetails}
//               buttonText={product.buttonText}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CustomCardTest;

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
//
//

// AFTER ENDING IT START FROM THE BEGINING WITHOUT TRNASITION

import { useState, useEffect } from "react";
import ProductCard from "../card/ProductCard";

const CustomCardTest = () => {
  const itemsToShow = 4;
  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

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

  // Create duplicates at the beginning and end for the looping effect
  const duplicatedProducts = [
    ...products.slice(-itemsToShow), // Last few products at the beginning
    ...products,
    ...products.slice(0, itemsToShow), // First few products at the end
  ];

  const maxIndex = products.length + itemsToShow;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // Reset to start without transition
      setTransitionEnabled(false);
      setCurrentIndex(itemsToShow);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      // Reset to end without transition
      setTransitionEnabled(false);
      setCurrentIndex(maxIndex - 1);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timeoutId = setTimeout(() => setTransitionEnabled(true), 0);
      return () => clearTimeout(timeoutId);
    }
  }, [transitionEnabled]);

  const styles = {
    sliderContainer: {
      display: "flex",
      transform: `translateX(-${
        (currentIndex * 100) / duplicatedProducts.length
      }%)`,
      transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
      width: `${(duplicatedProducts.length * 100) / itemsToShow}%`,
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
      width: `${((currentIndex - itemsToShow + 1) / (maxIndex + 1)) * 100}%`,
      height: "100%",
      backgroundColor: "#007bff",
      borderRadius: "2px",
      transition: "width 0.5s ease-in-out",
    },
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Navigation Line */}
      <div style={styles.navigationLineContainer}>
        <div style={styles.highlightedLine}></div>
      </div>

      <div className="flex w-full py-10" style={styles.sliderContainer}>
        {/* Render the main set of duplicated products */}
        {duplicatedProducts.map((product, index) => (
          <div key={`main-${index}`} className="w-1/4 px-2">
            <ProductCard
              image={product.image}
              imageText={product.imageText}
              productName={product.productName}
              productDetails={product.productDetails}
              buttonText={product.buttonText}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCardTest;
