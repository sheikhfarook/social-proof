import "./App.css";
import TextDetails from "./components/text";
import RatingCards from "./components/rateing/rating-cards";
import CustomerFeedbackDetails from "./components/customer/details";
import ratingStars from "../src/assets/images/icon-star.svg";

function App() {
  const ratingBox = [
    {
      id: 1,
      iconStar: ratingStars,
      text: "Rateed 5 Stars in Reviews ",
    },
    {
      id: 2,
      iconStar: ratingStars,
      text: "Rateed 5 Stars in Report",
      marginright: 20,
    },
    {
      id: 3,
      iconStar: ratingStars,
      text: "Rateed 5 Stars in BestTech",
    },
  ];

  return (
    <div className=" mt-28 h-[88.3vh] ">
      <div className="flex flex-row max-sm:flex-col  justify-around mb-10 2xl:px-[15rem] m-auto gap-8">
        <TextDetails />
        <div className="2xl:space-y-7 lg:space-y-7 md:space-y-3 ">
          {ratingBox?.map((rate, index) => (
            <div
              key={rate?.id}
              className={` ${
                index === 1
                  ? "2xl:ml-8 lg:ml-8 md:ml-5 "
                  : index === 2
                  ? "2xl:ml-16 lg:ml-16 md:ml-10 "
                  : "ml-0"
              }`}>
              <RatingCards iconStar={rate?.iconStar} text={rate?.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="2xl:ml-[16rem] ">
        <CustomerFeedbackDetails />
      </div>
    </div>
  );
}

export default App;
