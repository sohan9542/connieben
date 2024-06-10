import React from "react";
import Image from "next/image";
const Download = () => {
  return (
    <div className="bg-[#F4F4F4] w-full py-[50px] lg:pt-[100px]  lg:pb-[200px] mt-[100px]">
      <div className=" max-w-[1400px] relative mx-auto">
        <Image
          height={2000}
          className=" w-full h-[450px] lg:h-[340px] rounded-[20px] object-cover"
          width={2000}
          src={"/banner-app.svg"}
        />
        <div className="flex items-center justify-between px-5 pt-5 flex-col lg:flex-row absolute top-0 left-0 w-full h-full z-40">
          <div className="lg:pl-[107px] lg:w-[505px]">
            {" "}
            <h1 className="text-[34px] font-medium leading-[40px]">
              Download the App and manage your eSIMs easily
            </h1>
            <div className="mt-8 flex items-center  gap-6">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center bg-black justify-center px-3 py-[10px] rounded-[8px]">
                  <Image
                    height={100}
                    className="  h-[22px] -mt-[2px]"
                    width={100}
                    src={"/appStoreApp.svg"}
                  />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center bg-black justify-center px-3 py-[10px] rounded-[8px]">
                  <Image
                    height={100}
                    className="  h-[22px] -mt-[2px]"
                    width={100}
                    src={"/gpayApp.svg"}
                  />
                </div>
              </a>
         
            </div>
          </div>
          <div>
            {" "}
            <Image
              height={2000}
              className=" w-full lg:-mt-[70px]"
              width={2000}
              src={"/imageBannerApp.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
