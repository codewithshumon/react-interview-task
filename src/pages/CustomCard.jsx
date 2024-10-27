import CustomCardArrow from "../components/card/custom-card/CustomCardArrow";

const CustomCard = () => {
  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full">
        <h1 className=" w-full h-[20vh] flex justify-center items-center text-[36px] font-extrabold">
          Custom Card with Arrow Next and Previous Function
        </h1>
        <CustomCardArrow />
      </div>
    </div>
  );
};

export default CustomCard;
