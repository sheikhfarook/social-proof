const RatingCards = ({ iconStar, text }) => {
  return (
    <div className="max-sm:w-[22rem] max-sm:mt-5 max-sm:m-auto md:w-[23rem]   rounded-xl h-full w-[450px] bg-[#F7F2F7] font-style font-[700] text-[#502050] ">
      <div className="flex max-sm:text-center flex-row max-sm:flex-col sm:flex-col ">
        <div className="flex max-sm:m-auto max-sm:mt-3 sm:m-auto sm:mt-3 gap-2 my-3 ml-8 ">
          <img className="w-4 h-4 m-auto" src={iconStar} alt="" />
          <img className="w-4 h-4 m-auto" src={iconStar} alt="" />
          <img className="w-4 h-4 m-auto" src={iconStar} alt="" />
          <img className="w-4 h-4 m-auto" src={iconStar} alt="" />
          <img className="w-4 h-4 m-auto" src={iconStar} alt="" />
        </div>
        <p className="max-sm:m-auto max-sm:my-2 md:text-center  ml-10 my-3 ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default RatingCards;
