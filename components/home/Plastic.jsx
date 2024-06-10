import React from "react";
import Image from "next/image";
const Plastic = () => {
  return (
    <div className=" w-full px-5 lg:px-0 mt-[80px] mb-[40px]">
      <div className=" max-w-[1440px] mx-auto">
        <div className="lg:w-[80%] relative mx-auto">
          <Image
            height={2000}
            className=" w-full h-[500px] lg:h-[300px]"
            width={2000}
            src={"/goodbye-to-plastic.webp"}
          />
          <div className=" absolute p-5 lg:p-0 top-0 flex justify-center flex-col items-center left-0 w-full h-full z-30">
            <h6 className="text-[20px]  font-medium text-center">
              Travel the world responsibly with Holafly, and <br className="hidden lg:block"/> let’s say
              goodbye to plastic!
            </h6>
            <p className="lg:w-[496px] text-center py-5">
              By using eSIMs, we can eliminate the environmental impact
              associated with physical SIM cards production, packaging, and
              distribution.{" "}
              <a href="" className=" font-medium underline">
                Learn more.
              </a>
            </p>
            <div className="flex items-center flex-wrap justify-center lg:justify-start gap-5">
              <div className=" border border-black rounded-[24px] bg-white flex items-center gap-1 px-3 py-1">
                <Image
                  height={100}
                  className=" w-[24px]"
                  width={100}
                  src={"/leaf.svg"}
                />
                <h3 class="goodbye-to-plastic-tag-zero-plastic__item text-[14px]">
                  Zero plastic
                </h3>
              </div>
              <div className=" border border-black rounded-[24px] bg-white flex items-center gap-1 px-3 py-1">
                <Image
                  height={100}
                  className=" w-[24px]"
                  width={100}
                  src={"/leaf.svg"}
                />
                <h3 class="goodbye-to-plastic-tag-zero-plastic__item text-[14px]">
                  Zero plastic
                </h3>
              </div>
          
              <div className=" border border-black rounded-[24px] bg-white flex items-center gap-1 px-3 py-1">
                <Image
                  height={100}
                  className=" w-[24px]"
                  width={100}
                  src={"/truck.svg"}
                />
                <h3 class="goodbye-to-plastic-tag-zero-plastic__item text-[14px]">
                Zero transport
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
<button className="bg-[#48ec86] hover:bg-[#32A45E] hover:text-white font-medium py-2 w-full lg:w-auto lg:px-[140px] rounded-[12px]">Buy your eSIM</button>
          </div>
    </div>
  );
};

export default Plastic;
