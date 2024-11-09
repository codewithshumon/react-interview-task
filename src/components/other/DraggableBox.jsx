// import useDrag from "../../hooks/useDrag";

// function DraggableBox() {
//   const { positionX, startDrag, isDragging } = useDrag({ speed: 0.3 });

//   return (
//     <div
//       onMouseDown={startDrag}
//       onTouchStart={startDrag}
//       className="overflow-hidden"
//       style={{
//         cursor: isDragging ? "grabbing" : "grab",
//       }}
//     >
//       <div
//         className="w-[200%] h-[90vh] flex flex-row items-center gap-5 slider-css"
//         style={{
//           transform: `translateX(${positionX}px)`,
//           transition: isDragging ? "none" : "transform 0.3s ease",
//         }}
//       >
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=1" alt="1" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=2" alt="2" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=3" alt="3" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=4" alt="4" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=5" alt="5" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=6" alt="6" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=7" alt="7" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=8" alt="8" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=9" alt="9" />
//         </div>
//         <div className="w-[20vw] flex items-center justify-center">
//           <img src="https://via.placeholder.com/150?text=10" alt="10" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DraggableBox;

//
//
//
//
//
//
//

const DraggableBox = () => {
  return (
    <div className="w-[200%] h-[90vh] flex flex-row items-center gap-5 slider-css  ">
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=1" alt="1" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=2" alt="2" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=3" alt="3" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=4" alt="4" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=5" alt="5" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=6" alt="6" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=7" alt="7" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=8" alt="8" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=9" alt="9" />
      </div>
      <div className="w-[20vw] flex items-center justify-center">
        <img src="https://via.placeholder.com/150?text=10" alt="10" />
      </div>
    </div>
  );
};

export default DraggableBox;
