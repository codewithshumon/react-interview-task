/* eslint-disable react/prop-types */
const ProductCard = ({
  image,
  imageText,
  productName,
  productDetails,
  buttonText,
}) => {
  return (
    <div className=" w-full h-full px-5 py-10 bg-red-300 rounded-2xl">
      <div className=" w-full h-full  flex items-center justify-center ">
        <div className=" w-full h-full flex flex-col items-center  justify-center gap-5">
          <div className="">
            <img
              src={image}
              alt={imageText}
              className=" w-[250px] h-[250px] object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-[18px] font-extrabold">{productName}</h3>
            <p className="">{productDetails}</p>
          </div>
          <div className=" w-fit bg-blue-500 px-5 py-3 rounded-full">
            <button className="">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
