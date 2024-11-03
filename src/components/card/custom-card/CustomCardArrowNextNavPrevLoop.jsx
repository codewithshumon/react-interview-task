/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard";

const CustomCardArrowNextNavPrevLoop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const firstItemRef = useRef(null);
  const [position, setPosition] = useState("");

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

  //ovserving the
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

  // Create cloned products for infinite scrolling
  const clonedProducts = [
    ...products.slice(-itemsToShow),
    ...products,
    ...products.slice(0, itemsToShow),
  ];

  const maxIndex = clonedProducts.length / itemsToShow - 1; // Adjusted to account for cloned products

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(itemsToShow); // Jump to the first original item after the last cloned item
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(maxIndex - itemsToShow); // Jump to the last original item before the first cloned item
    }
  };

  console.log("[position]", position);
  // console.log("[currentIndex]", currentIndex);
  // console.log("[maxIndex]", maxIndex);
  // console.log("[clonedProducts.length]", clonedProducts.length);
  // console.log("[products.slice(-itemsToShow)]", products.slice(-itemsToShow));
  // console.log("products.slice(0, itemsToShow)", products.slice(0, itemsToShow));
  // console.log("[products]", products);

  // Handle transition reset
  useEffect(() => {
    if (currentIndex === itemsToShow + 1) {
      setTimeout(() => {
        setCurrentIndex(1); // Reset to the first product in the original list
      }, 500); // Match with transition duration
    } else if (currentIndex === maxIndex) {
      setTimeout(() => {
        setCurrentIndex(maxIndex - 1); // Reset to the last product in the original list
      }, 500);
    }
  }, [currentIndex]);

  const styles = {
    sliderContainer: {
      display: "flex",
      transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
      transition: "transform 0.5s ease-in-out",
      width: `${(clonedProducts.length * 100) / itemsToShow}%`,
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
        {clonedProducts.map((product, index) => (
          <div
            key={index}
            className="w-1/4 px-2"
            ref={index === 0 ? firstItemRef : null}
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
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md`}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md`}
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCardArrowNextNavPrevLoop;

// import { useState, useEffect } from "react";
// import ProductCard from "../ProductCard";

// const CustomCardArrowNextNavPrevLoop = () => {
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

//   // Create cloned products for infinite scrolling
//   const clonedProducts = [
//     ...products.slice(-itemsToShow),
//     ...products,
//     ...products.slice(0, itemsToShow),
//   ];

//   const maxIndex = clonedProducts.length / itemsToShow - 1; // Adjusted to account for cloned products

//   const handleNext = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentIndex(itemsToShow); // Jump to the first original item after the last cloned item
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else {
//       setCurrentIndex(maxIndex - itemsToShow); // Jump to the last original item before the first cloned item
//     }
//   };

//   // console.log("[currentIndex]", currentIndex);
//   // console.log("[maxIndex]", maxIndex);
//   // console.log("[clonedProducts.length]", clonedProducts.length);
//   // console.log("[products.slice(-itemsToShow)]", products.slice(-itemsToShow));
//   // console.log("products.slice(0, itemsToShow)", products.slice(0, itemsToShow));
//   // console.log("[products]", products);

//   // Handle transition reset
//   useEffect(() => {
//     if (currentIndex === itemsToShow + 1) {
//       setTimeout(() => {
//         setCurrentIndex(1); // Reset to the first product in the original list
//       }, 500); // Match with transition duration
//     } else if (currentIndex === maxIndex) {
//       setTimeout(() => {
//         setCurrentIndex(maxIndex - 1); // Reset to the last product in the original list
//       }, 500);
//     }
//   }, [currentIndex]);

//   const styles = {
//     sliderContainer: {
//       display: "flex",
//       transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
//       transition: "transform 0.5s ease-in-out",
//       width: `${(clonedProducts.length * 100) / itemsToShow}%`,
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
//         {clonedProducts.map((product, index) => (
//           <div key={index} className="w-1/4 px-2">
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
//         className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md`}
//       >
//         &lt;
//       </button>
//       <button
//         onClick={handleNext}
//         className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md`}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CustomCardArrowNextNavPrevLoop;
