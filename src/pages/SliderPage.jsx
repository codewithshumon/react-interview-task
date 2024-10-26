import SingleSliderSwipeMood from "../components/sliders/SliderSingleSwipe/SingleSliderSwipeMood";
import SliderSingleSwipe from "../components/sliders/SliderSingleSwipe/SliderSingleSwipe";

const SliderPage = () => {
  return (
    <div className=" w-full h-full">
      <div className=" w-full max-w-[1440px] h-full">
        <div className=" w-full h-full">
          <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
            Slider Single Item Swipe
          </h1>
          <SliderSingleSwipe />
        </div>
        <div className=" w-full h-full">
          <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
            Single Item Slider with Swipe Mood
          </h1>
          <SingleSliderSwipeMood />
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
