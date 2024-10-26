import CustomSliderComp from "../components/sliders/coustom-slider/CustomSliderComp";

const CustomSlider = () => {
  return (
    <div className=" w-full h-full">
      <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
        Custom Slider with Swipe Mood
      </h1>
      <CustomSliderComp />
    </div>
  );
};

export default CustomSlider;
