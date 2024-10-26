import pepsiVideo from "../../../assets/videos/pepsi.mp4";
import cocaColaVideo from "../../../assets/videos/coca-cola.mp4";
import restaurantVideo from "../../../assets/videos/restaurant.mp4";
import cake from "../../../assets/videos/cake.mp4";
import cofee from "../../../assets/videos/cofee.mp4";
import blender from "../../../assets/videos/blender.mp4";
import fanta from "../../../assets/videos/fanta.mp4";
import nike from "../../../assets/videos/nike.mp4";
import sweet from "../../../assets/videos/sweet.mp4";

const CustomSliderComp = () => {
  const videos = [
    pepsiVideo,
    cocaColaVideo,
    restaurantVideo,
    cake,
    cofee,
    blender,
    fanta,
    nike,
    sweet,
  ];

  return (
    <div className=" relative w-full h-full max-w-[1440px] mx-auto">
      <div className=" relative w-[100%]  h-[50vh] bg-red-400"></div>
      <div className=" relative w-[100%] h-[100vh] bg">
        <div></div>
      </div>
      <div className=" relative w-[100%] h-[50vh] bg-blue-400"></div>
    </div>
  );
};

export default CustomSliderComp;
