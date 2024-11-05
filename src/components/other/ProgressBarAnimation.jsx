import React, { useState } from "react";

const ProgressBarAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-600">
      <ul className="relative flex bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Yellow highlight bar behind the menu items */}
        <div
          className="absolute top-0 left-0 h-full bg-yellow-400 rounded-lg transition-all duration-500"
          style={{
            width: "100px", // width of each menu item
            transform: `translateX(${activeIndex * 100}%)`,
            zIndex: 0, // Push the highlight line behind the menu items
          }}
        ></div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative cursor-pointer text-white font-bold py-3 px-6 transition-colors duration-300 ${
              activeIndex === index ? "text-black" : ""
            }`}
            style={{ zIndex: 1 }} // Menu items above the highlight line
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBarAnimation;
