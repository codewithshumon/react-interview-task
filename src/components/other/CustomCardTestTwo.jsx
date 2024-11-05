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

// import { useState, useEffect } from "react";
// import ProductCard from "../card/ProductCard";

// const CustomCardTestTwo = () => {
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

// export default CustomCardTestTwo;

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

// const CustomCardTestTwo = () => {
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
//           {lastFourItems.map((product, index) => (
//             <div className="w-full px-2 " key={`last-${index}`}>
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
//             </div>
//           ))}
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
//           {firstFourItems.map((product, index) => (
//             <div className="w-full px-2" key={`first-${index}`}>
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-5 z-10">
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

// export default CustomCardTestTwo;

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

import { useState, useEffect } from "react";
import ProductCard from "../card/ProductCard";

const CustomCardTestTwo = () => {
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
        }, 300);
      } else if (currentItemIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentItemIndex(products.length);
        }, 300);
      }
    }
  }, [currentItemIndex, isTransitioning, products.length]);

  const styles = {
    videoContainer: {
      display: "flex",
      width: `${(products.length + 8) * 25}%`, // Account for extra cloned slides
      height: "100%",
      transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
      transform: `translateX(-${
        (currentItemIndex * 100) / (products.length + 8)
      }%)`,
    },
  };

  return (
    <div className="relative w-[100%] h-[100vh] max-w-[1440px] mx-auto overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={styles.videoContainer}
      >
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
      <div className=" relative w-full h-full">
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full px-5">
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
    </div>
  );
};

export default CustomCardTestTwo;

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
