/* eslint-disable react-hooks/exhaustive-deps */

// import { useState, useCallback } from "react";

// function useDrag({ speed }) {
//   const [positionX, setPositionX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const sensitivity = speed;

//   const startDrag = useCallback(
//     (event) => {
//       event.preventDefault();
//       setIsDragging(true);

//       // Capture initial drag start positions relative to the component
//       const startX = event.clientX || event.touches[0].clientX;

//       const onMouseMove = (moveEvent) => {
//         const currentX = moveEvent.clientX || moveEvent.touches[0].clientX;
//         const deltaX = (currentX - startX) * sensitivity;

//         // Update position incrementally to smooth drag effect
//         setPositionX((prevX) => prevX + deltaX);
//       };

//       const stopDrag = () => {
//         setIsDragging(false);
//         // Clean up event listeners
//         window.removeEventListener("mousemove", onMouseMove);
//         window.removeEventListener("touchmove", onMouseMove);
//         window.removeEventListener("mouseup", stopDrag);
//         window.removeEventListener("touchend", stopDrag);
//       };

//       window.addEventListener("mousemove", onMouseMove);
//       window.addEventListener("touchmove", onMouseMove);
//       window.addEventListener("mouseup", stopDrag);
//       window.addEventListener("touchend", stopDrag);
//     },
//     [sensitivity]
//   );

//   return {
//     positionX,
//     isDragging,
//     startDrag,
//   };
// }

// export default useDrag;

// import { useState, useCallback } from "react";

// function useDrag({ speed = 0.5 }) {
//   const [positionX, setPositionX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartX, setDragStartX] = useState(0);

//   const startDrag = useCallback(
//     (event) => {
//       event.preventDefault();
//       setIsDragging(true);

//       const initialClientX = event.clientX || event.touches[0].clientX;
//       setDragStartX(initialClientX - positionX); // Initialize start point relative to current position

//       let currentClientX = 0;
//       const onMouseMove = (moveEvent) => {
//         currentClientX = moveEvent.clientX || moveEvent.touches[0].clientX;
//         const deltaX = (currentClientX - dragStartX) * speed; // Apply speed control here

//         // Smooth update of position using requestAnimationFrame
//         requestAnimationFrame(() => {
//           setPositionX(deltaX);
//         });
//       };

//       console.log("{positionX}", positionX);
//       console.log("[initialClientX]", initialClientX);
//       console.log("[currentClientX]", currentClientX);

//       const stopDrag = () => {
//         setIsDragging(false);
//         window.removeEventListener("mousemove", onMouseMove);
//         window.removeEventListener("touchmove", onMouseMove);
//         window.removeEventListener("mouseup", stopDrag);
//         window.removeEventListener("touchend", stopDrag);
//       };

//       window.addEventListener("mousemove", onMouseMove);
//       window.addEventListener("touchmove", onMouseMove);
//       window.addEventListener("mouseup", stopDrag);
//       window.addEventListener("touchend", stopDrag);
//     },
//     [positionX, speed]
//   );

//   return {
//     positionX,
//     isDragging,
//     startDrag,
//   };
// }

// export default useDrag;

//
//
//
//
//
//
//
//
//

// import { useState, useCallback } from "react";

// function useDrag({ speed }) {
//   const [positionX, setPositionX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);

//   const startDrag = useCallback(
//     (event) => {
//       event.preventDefault();
//       setIsDragging(true);

//       const initialClientX = event.clientX || event.touches[0].clientX;
//       setStartX(initialClientX - positionX); // Calculate relative to last position

//       const onMouseMove = (moveEvent) => {
//         const currentClientX =
//           moveEvent.clientX || moveEvent.touches[0].clientX;
//         const deltaX = (currentClientX - startX) * speed;

//         requestAnimationFrame(() => {
//           setPositionX(deltaX); // Update position smoothly
//         });
//       };

//       const stopDrag = () => {
//         setIsDragging(false);
//         window.removeEventListener("mousemove", onMouseMove);
//         window.removeEventListener("touchmove", onMouseMove);
//         window.removeEventListener("mouseup", stopDrag);
//         window.removeEventListener("touchend", stopDrag);
//       };

//       window.addEventListener("mousemove", onMouseMove);
//       window.addEventListener("touchmove", onMouseMove);
//       window.addEventListener("mouseup", stopDrag);
//       window.addEventListener("touchend", stopDrag);
//     },
//     [positionX, speed]
//   );

//   return {
//     positionX,
//     isDragging,
//     startDrag,
//   };
// }

// export default useDrag;
