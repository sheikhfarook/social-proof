import customer1 from "../../assets/images/image-colton.jpg";
import customer2 from "../../assets/images/image-anne.jpg";
import customer3 from "../../assets/images/image-irene.jpg";

const CustomerFeedbackDetails = () => {
  const testiMonialData = [
    {
      id: 1,
      profilePic: customer1,
      name: "Colton Smith",
      description:
        "We needed the some printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      id: 2,
      profilePic: customer2,
      name: "Irene Roberts",
      description:
        "We needed the some printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      id: 3,
      profilePic: customer3,
      name: "Anne Wallace",
      description:
        "We needed the some printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!",
    },
  ];
  return (
    <div
      className="flex flex-row max-sm:flex-col max-sm:m-auto  max-sm:items-center max-sm:pt-6  md:ml-[0.4em] 
    lg:items-center items-start  font-[500] gap-6 lg:ml-[7rem] ml-[23rem] mr-[30rem]">
      {testiMonialData?.map((data, index) => (
        <div
          key={data?.id}
          className={`w-[24rem] md:w-[20rem] lg:w-[21rem] rounded-lg font-style text-[#FFFFFF] bg-[#502050] ${
            index === 1
              ? "2xl:mt-8 lg:mt-10"
              : index === 2
              ? "2xl:mt-16 lg:mt-20"
              : ""
          }`}>
          <div className="w-[18.5rem] ">
            <div className="flex ">
              <img
                className="mt-7 ml-7 rounded-full w-[3rem]"
                src={data?.profilePic}
                alt=""
              />
              <div className="mt-8 ml-5 leading-5 ">
                <p>{data?.name}</p>
                <p className="text-[#EE68A4]">Verifield Buyer</p>
              </div>
            </div>
            <p className=" ml-7 text-[15px] md:w-[15rem] mt-5 pb-7">
              &quot;{data?.description}&quot;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedbackDetails;
