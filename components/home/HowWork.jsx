import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HowWork = () => {
  return (
    <div className="px-5 lg:px-0">
      <h1 className="text-[26px] lg:text-[32px] font-semibold text-center">
        How does Holafly’s eSIM work?
      </h1>
      <div className=" hidden lg:block max-w-[1075px] relative mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-[200px]">
          <div className="flex items-center justify-end">
            <Image
              className="w-[360px]"
              src={"/phone-and-cart-desktop.svg"}
              height={600}
              width={600}
            />
          </div>
          <div>
            <h6 className="text-[20px] font-semibold">
              Check that your device is eSIM-compatible and buy your data plan.
            </h6>
            <p className="mt-2 text-[14px]">
              Your phone must be compatible with eSIM. After verifying, look for
              your destination and buy a data plan.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Link href={"/"} className=" underline">
                Check compatibility
              </Link>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-[200px]">
          <div>
            <h6 className="text-[20px] font-semibold">
              Follow the installation instructions
            </h6>
            <p className="mt-2 ">
              Please check the instructions email we sent you upon purchasing
              your eSIM to complete the installation and activation process.
            </p>
          </div>
          <div className="">
            <Image
              className="w-[360px]"
              src={"/traveler-desktop.svg"}
              height={600}
              width={600}
            />
          </div>
        </div>
        <div className=" absolute top-[200px] left-0 w-full h-full flex-col z-40 hidden lg:flex items-center justify-start">
          <div className="w-[12px] h-[12px] bg-black rounded-full"></div>
          <div className="w-[2px] h-[350px] mt-1 bg-black"></div>
          <div className="w-[12px] h-[12px] my-1 bg-black rounded-full"></div>
          <div className="w-[2px] h-[350px]  bg-[#e3e3e7]"></div>
          <div className="w-[12px] h-[12px] my-1 bg-black rounded-full"></div>
        </div>
      </div>
      <div className=" border lg:hidden mt-10  rounded-[12px] bg-white pt-5 px-5">
        <div>
          <h6 className="text-[20px] text-center font-semibold">
            Check that your device is eSIM-compatible and buy your data plan.
          </h6>
          <p className="mt-2 text-center text-[14px]">
            Your phone must be compatible with eSIM. After verifying, look for
            your destination and buy a data plan.
          </p>
          <div className="mt-3 flex justify-center items-center gap-2">
            <Link href={"/"} className=" underline">
              Check compatibility
            </Link>
            <BsArrowRight />
          </div>
        </div>
        <div className="flex mt-10 items-center justify-end">
          <Image
            className="w-[360px] h-[200px] object-cover"
            src={"/phone-and-cart-desktop.svg"}
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className=" border lg:hidden mt-10  rounded-[12px] bg-white pt-5 px-5">
        <div>
        <h6 className="text-[20px] text-center font-semibold">
              Follow the installation instructions
            </h6>
            <p className="mt-2 text-center ">
              Please check the instructions email we sent you upon purchasing
              your eSIM to complete the installation and activation process.
            </p>
         
        </div>
        <div className="flex mt-10 items-center justify-end">
          <Image
            className="w-[360px] h-[200px] object-top object-cover"
            src={"traveler-desktop.svg"}
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className=" border lg:hidden mt-10  rounded-[12px] bg-[#F8F8FA] pt-5 px-5">
        <div>
        <h6 className="text-[20px] text-center font-semibold">
           Get online right after landing. Start using your data plan as
                soon as you arrive at your destination
            </h6>
            <p className="mt-2 text-center ">
              Your phone will automatically connect to the internet network
                upon arrival.
            </p>
            <div className="mt-5 flex items-center justify-center">
                <button className="bg-[#48ec86] hover:bg-[#32A45E] hover:text-white font-medium py-2 px-[40px] rounded-[12px]">
                  View all destinations
                </button>
              </div>
        </div>
        <div className="flex mt-10 items-center justify-end">
        <DotLottieReact
                  src="/travel.lottie"
                  width={360}
                  height={260}
                  loop
                  autoplay
                />
        </div>
      </div>
      <div className="w-full hidden lg:block bg-[#F8F8FA]">
        <div className="max-w-[1075px] relative mx-auto">
          <div className=" grid grid-cols-2 items-center gap-[200px]">
            <div className="flex items-center justify-end">
              <div className="w-[360px] ">
                <DotLottieReact
                  src="/travel.lottie"
                  width={360}
                  height={360}
                  loop
                  autoplay
                />
              </div>
            </div>
            <div>
              <h6 className="text-[20px] font-semibold">
                Get online right after landing. Start using your data plan as
                soon as you arrive at your destination
              </h6>
              <p className="mt-2 text-[14px]">
                Your phone will automatically connect to the internet network
                upon arrival.
              </p>
              <div className="mt-5 flex items-center">
                <button className="bg-[#48ec86] hover:bg-[#32A45E] hover:text-white font-medium py-2 px-[40px] rounded-[12px]">
                  View all destinations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
