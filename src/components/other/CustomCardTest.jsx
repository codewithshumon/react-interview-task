/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import ProductCard from "../card/ProductCard";

const CustomCardTest = () => {
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

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

  const maxIndex = Math.ceil(products.length / itemsToShow) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first item when reaching the end
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Jump to the last item if at the start
    }
  };

  useEffect(() => {
    if (currentIndex === maxIndex + 1) {
      setTimeout(() => setCurrentIndex(0), 500);
    } else if (currentIndex === -1) {
      setTimeout(() => setCurrentIndex(maxIndex), 500);
    }
  }, [currentIndex]);

  const styles = {
    sliderContainer: {
      display: "flex",
      transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
      transition: "transform 0.5s ease-in-out",
      width: `${(products.length * 100) / itemsToShow}%`,
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
      width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
      height: "100%",
      backgroundColor: "#007bff",
      borderRadius: "2px",
      transition: "width 0.5s ease-in-out",
    },
  };

  return (
    <div className="relative w-full overflow-hidden max-w-[1440px] mx-auto">
      {/* Navigation Line */}
      <div style={styles.navigationLineContainer}>
        <div style={styles.highlightedLine}></div>
      </div>

      <div className="flex w-full py-10" style={styles.sliderContainer}>
        {products.map((product, index) => (
          <div
            key={`main-${index}`}
            className="w-1/4 px-2"
            ref={
              index === 0
                ? firstItemRef
                : index === products.length - 1
                ? lastItemRef
                : null
            }
          >
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
        // disabled={firstItemVisible}
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

// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect, useRef } from "react";
// import useObserver from "../../hooks/useObserver";
// import ProductCard from "../card/ProductCard";

// const CustomCardTest = () => {
//   const firstItemRef = useRef(null);
//   const lastItemRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 4;

//   const { isVisible: firstItemVisible, position: firstItemPosition } =
//     useObserver(firstItemRef);
//   const { isVisible: lastItemVisible, position: lastItemPosition } =
//     useObserver(lastItemRef);

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
//     <div className="relative w-full overflow-hidden max-w-[1440px] mx-auto">
//       {/* Navigation Line */}
//       <div style={styles.navigationLineContainer}>
//         <div style={styles.highlightedLine}></div>
//       </div>

//       <div className="flex w-full py-10" style={styles.sliderContainer}>
//         {/* Conditionally render first set of products if first item is visible */}
//         {/* {lastItemPosition === "right" &&
//           products.map((product, index) => (
//             <div
//               key={`first-${index}`}
//               className="w-1/4 px-2"
//               ref={index === 0 ? firstItemRef : null}
//             >
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
//             </div>
//           ))} */}

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

//         {/* Conditionally render last set of products if last item is visible */}
//         {/* {firstItemPosition === "left" &&
//           products.map((product, index) => (
//             <div
//               key={`last-${index}`}
//               className="w-1/4 px-2"
//               ref={index === products.length - 1 ? lastItemRef : null}
//             >
//               <ProductCard
//                 image={product.image}
//                 imageText={product.imageText}
//                 productName={product.productName}
//                 productDetails={product.productDetails}
//                 buttonText={product.buttonText}
//               />
//             </div>
//           ))} */}
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
