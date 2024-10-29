import { useState } from "react";
import ProductCard from "../ProductCard";

const CustomCardArrow = () => {
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
  ];

  const handleNext = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const styles = {
    sliderContainer: {
      display: "flex",
      transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
      transition: "transform 0.5s ease-in-out",
      width: `${(products.length * 100) / itemsToShow}%`, // Adjusted width
    },
  };

  return (
    <div className="relative w-full overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex w-full py-10" style={styles.sliderContainer}>
        {products.map((product, index) => (
          <div key={index} className="w-1/4 px-2">
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

export default CustomCardArrow;
