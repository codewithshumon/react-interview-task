import { useState } from "react";

const CustomCardArrow = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

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
      width: `${(products.length + 2) * 25}%`, // 25% for each product when 4 are shown
    },
  };

  return (
    <div className="relative w-full overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex w-full" style={styles.sliderContainer}>
        {products.map((product, index) => (
          <div key={index} className="w-1/4 px-2">
            {" "}
            {/* Each card is 1/4 width */}
            <div className="p-4 bg-white shadow-md rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-yellow-500 font-bold mt-2">${product.price}</p>
            </div>
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
