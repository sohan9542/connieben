import React from "react";
import Image from "next/image";
const ChangePlan = ({white}) => {
  return (
    <div className="w-full px-5 lg:px-0 mb-[70px]">
      <div className="max-w-[1430px] mx-auto ">
        <div className={` ${white ? 'bg-white border rounded-[12px]': 'gb'} flex items-center w-full flex-col px-5 pt-5 lg:p-0 lg:flex-row gap-5 lg:gap-0 justify-between`}>
          <div className="flex items-center  gap-10">
            <Image
              src={"/refund.png"}
              className="w-[253px] hidden lg:block -mt-[20px]"
              height={500}
              width={500}
            />
            <div>
              <h2 className="text-[20px] md:text-center lg:text-left font-medium">
                Change of plans? No problem at all!
              </h2>
              <p className="text-[14px] md:text-center lg:text-left  lg:text-[16px] mt-2">
                Purchase your Holafly eSIM with added peace of mind. You have up
                to 6 <br /> months to request a refund.
              </p>
            </div>
          </div>
          <button className="text-white w-full md:w-auto lg:mr-20 bg-black  rounded-[12px] md:px-[100px] py-2 hover:bg-[#56575A]">Learn More</button>
          <Image
              src={"/refund.png"}
              className="w-[253px]   lg:hidden "
              height={500}
              width={500}
            />
        </div>
      </div>
    </div>
  );
};

export default ChangePlan;
