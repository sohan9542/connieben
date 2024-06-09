import React from "react";
import Image from "next/image";
const ChangePlan = () => {
  return (
    <div className="w-full mb-[70px]">
      <div className="max-w-[1360px] mx-auto ">
        <div className="gb flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image
              src={"/refund.png"}
              className="w-[253px] -mt-[20px]"
              height={500}
              width={500}
            />
            <div>
              <h2 className="text-[20px] font-semibold">
                Change of plans? No problem at all!
              </h2>
              <p className="mt-1">
                Purchase your Holafly eSIM with added peace of mind. You have up
                to 6 <br /> months to request a refund.
              </p>
            </div>
          </div>
          <button className="text-white mr-20 bg-black rounded-[12px] px-[100px] py-2 hover:bg-[#56575A]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePlan;
