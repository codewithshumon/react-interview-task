import CustomCardTest from "../components/other/CustomCardTest";
import CustomCardTestTwo from "../components/other/CustomCardTestTwo";
import LandingPageVideo from "../components/other/LandingPageVideo";
import LandingPageVideoMulti from "../components/other/LandingPageVideoMulti";
import LandingPageYT from "../components/other/LandingPageYT";
import ProgressBarAnimation from "../components/other/ProgressBarAnimation";

const Other = () => {
  return (
    <div>
      <LandingPageYT />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideo />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideoMulti />
      <h1 className="text-3xl font-bold underline ">Product Card Slider</h1>
      <CustomCardTest />
      <h1 className="text-3xl font-bold underline ">
        Product Card Slider With Single Slider
      </h1>
      <CustomCardTestTwo />
      <h1 className="text-3xl font-bold underline ">Progress Bar Animation</h1>
      <ProgressBarAnimation />
    </div>
  );
};

export default Other;
