/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState("not visible");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { boundingClientRect } = entry;

        if (entry.isIntersecting) {
          setIsVisible(true);
          setPosition("visible");
        } else {
          setIsVisible(false);
          // Check if the item is off the left, right, top, or bottom side of the viewport
          if (boundingClientRect.bottom < 0) {
            setPosition("above"); // Off to the top
          } else if (boundingClientRect.top > window.innerHeight) {
            setPosition("below"); // Off to the bottom
          } else if (boundingClientRect.right < 0) {
            setPosition("left"); // Off to the left
          } else if (boundingClientRect.left > window.innerWidth) {
            setPosition("right"); // Off to the right
          } else {
            setPosition("not visible"); // Off but still visible in viewport
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { isVisible, position };
};

export default useObserver;
