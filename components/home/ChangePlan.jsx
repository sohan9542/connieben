import React from "react";
import Image from "next/image";
const ChangePlan = () => {
  return (
    <div className="w-full px-5 lg:px-0 mb-[70px]">
      <div className="max-w-[1360px] mx-auto ">
        <div className="gb flex items-center w-full flex-col px-5 pt-5 lg:p-0 lg:flex-row gap-5 lg:gap-0 justify-between">
          <div className="flex items-center  gap-10">
            <Image
              src={"/refund.png"}
              className="w-[253px] hidden lg:block -mt-[20px]"
              height={500}
              width={500}
            />
            <div>
              <h2 className="text-[20px] font-semibold">
                Change of plans? No problem at all!
              </h2>
              <p className="mt-1 text-[14px] lg:text-[16px] mt-2">
                Purchase your Holafly eSIM with added peace of mind. You have up
                to 6 <br /> months to request a refund.
              </p>
            </div>
          </div>
          <button className="text-white w-full lg:mr-20 bg-black  lg:w-auto rounded-[12px] lg:px-[100px] py-2 hover:bg-[#56575A]">Learn More</button>
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
