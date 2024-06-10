import React from "react";
import Image from "next/image";
const Enjoy = () => {
  return (
    <div className=" py-[100px] px-5 lg:px-0">
      <h1 className="text-[26px] lg:text-[32px] text-center font-semibold">
        Enjoy reliable and affordable internet in <br className="hidden lg:block"/> your trips. We get you
        covered.
      </h1>
      <div className="max-w-[1440px] mx-auto">
        <div className=" w-full hidden lg:grid py-10 grid-cols-1 items-start lg:grid-cols-3 gap-10">
          <div className="flex items-center px-4 mt-3 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/unlimited-small.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-6 font-semibold">
              Unlimited data
            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
              Enjoy unlimited data while traveling to numerous destinations
              worry-free.{" "}
              <span className=" cursor-pointer underline">Learn more</span>
            </p>
          </div>
          <div className="flex items-center px-4 mt-1 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/edgesensor_high.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-3 font-semibold">
            Keep using your favorite apps

            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
            Get that safe ride home, find that great restaurant, and pin the local attractions, all while staying connected with your loved ones.
            </p>
          </div>
          <div className="flex items-center px-4 mt-1 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/keep-your-whatsapp-number.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-3 font-semibold">
            Keep your WhatsApp number
            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
            You can call and message all your contacts on WhatsApp, like you’re in the same country. Don’t lose touch with family and friends.
            </p>
          </div>
          <div className="flex items-center px-4 mt-1 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/forum.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-3 font-semibold">
            24/7 Customer Support

            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
            In need of assistance? Our 24/7 chat support is just a message away to keep you connected and help you with everything you need.
            </p>
          </div>
          <div className="flex items-center px-4 mt-1 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/rocket-beneficios.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-3 font-semibold">
            Fast and Reliable Internet Connection
            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
            Connect to the best networks at your destination and get internet that’s both reliable and fast
            </p>
          </div>
          <div className="flex items-center px-4 mt-1 flex-col ">
            <Image
              height={100}
              className=" w-[36px]"
              width={100}
              src={"/digital-sim.svg"}
            />
            <h6 className="text-[20px] pb-2 pt-3 font-semibold">
            Enjoy dual SIMs
            </h6>
            <p className="text-center text-[#62666b] text-[14px] lg:max-w-[317px] ">
            Enjoy the flexibility of our digital eSIM while keeping the option to use your original SIM as usual whenever you need it.
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
<button className="bg-[#48ec86] hover:bg-[#32A45E] hover:text-white font-medium py-2 px-[100px] rounded-[12px]">I want my eSIM</button>
          </div>
      </div>
    </div>
  );
};

export default Enjoy;
