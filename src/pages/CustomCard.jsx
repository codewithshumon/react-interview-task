import CustomCardArrow from "../components/card/custom-card/CustomCardArrow";
import CustomCardArrowNavigation from "../components/card/custom-card/CustomCardArrowNavigation";
import CustomCardArrowNextPrev from "../components/card/custom-card/CustomCardArrowNextPrev";
import CustomCardArrowNextNavPrevLoop from "../components/card/custom-card/CustomCardArrowNextNavPrevLoop";

import CustomCardArrowNextNavPrevInfiniteLoop from "../components/card/custom-card/CustomCardArrowNextNavPrevInfiniteLoop";
import CustomCardArrowNextPrevInfiniteLoop from "../components/card/custom-card/CustomCardArrowNextPrevInfiniteLoop";
import CustomCardArrowNextNavPrevInfiniteLoopDrag from "../components/card/custom-card/CustomCardArrowNextNavPrevInfiniteLoopDrag";

const CustomCard = () => {
  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow
        </h1>
        <CustomCardArrow />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next and Previous
        </h1>
        <CustomCardArrowNextPrev />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next and Previous with Navigation
        </h1>
        <CustomCardArrowNavigation />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next and Previous with Navigation Loop
        </h1>
        <CustomCardArrowNextNavPrevLoop />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next and Previous Infinite Loop
        </h1>
        <CustomCardArrowNextPrevInfiniteLoop />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next Previous and Navigation with Infinite Loop
        </h1>
        <CustomCardArrowNextNavPrevInfiniteLoop />
      </div>
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next Previous Navigation, Drag with Infinite
          Loop
        </h1>
        <CustomCardArrowNextNavPrevInfiniteLoopDrag />
      </div>
    </div>
  );
};

export default CustomCard;
