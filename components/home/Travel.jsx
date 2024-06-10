import React from "react";
import Image from "next/image";
const Travel = () => {
  return (
    <div className="w-full  lg:mt-0 mb-[70px]">
      <div className="max-w-[1440px] mx-auto ">
        <div className="lg:w-[80%] px-4 lg:px-0 mx-auto">
          <h1 className="font-medium mt-[70px] text-[26px] lg:text-[32px] leading-[32px] text-center">
            Where are you traveling next?
          </h1>
          <p className="text-center mt-4">
            Choose your destination first, then a data plan according to your
            needs.
          </p>

          <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, ind) => (
              <div
                key={ind}
                className="border p-10 hover:border-black cursor-pointer relative rounded-[16px]  bg-white"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={"/United-States.png"}
                    className="w-[48px]  h-[48px] rounded-full"
                    height={100}
                    width={100}
                  />
                  <div>
                    <p>eSIM</p>
                    <h2 className=" font-medium text-[20px]">USA</h2>
                    <h2 className=" font-medium text-[20px]">
                      From $6.00 <span className="text-[12px]">USD</span>
                    </h2>
                  </div>
                </div>
                <Image
                  src={"/wave_button.svg"}
                  className=" absolute bottom-0 w-[180px] right-0 z-20 rounded-full"
                  height={100}
                  width={100}
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex w-full lg:w-auto items-center justify-center">
            <button className="bg-[#48ec86] w-full lg:w-auto hover:bg-[#32A45E] hover:text-white font-medium py-2 px-[100px] rounded-[12px]">
              View all destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
