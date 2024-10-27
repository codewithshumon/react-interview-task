import CustomSliderArrow from "../components/sliders/coustom-slider/CustomSliderArrow";
import CustomSliderArrowAuto from "../components/sliders/coustom-slider/CustomSliderArrowAuto";
import CustomSliderArrowAutoNav from "../components/sliders/coustom-slider/CustomSliderArrowAutoNav";

const CustomSlider = () => {
  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Slider with Arrow Next and Previous Function Slider
        </h1>
        <CustomSliderArrow />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Slider with Arrow Auto Function Slider
        </h1>
        <CustomSliderArrowAuto />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Slider with Arrow Auto and Navigation Function Slider
        </h1>
        <CustomSliderArrowAutoNav />
      </div>
    </div>
  );
};

export default CustomSlider;
