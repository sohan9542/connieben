import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchVal, setsearchVal] = useState("");
  return (
    <div className=" w-full hero mt-[60px] min-h-screen relative">
      <div className="max-w-[1440px] mx-auto  ">
        <div className=" w-[80%] mx-auto">
          <div className=" flex items-center justify-between ">
            <div>
              <p
                className="mb-3
"
              >
                International eSIM
              </p>
              <h1 className=" text-[62px] font-semibold leading-[65px]">
                Stay connected <br />{" "}
                <span className="text-[#e6485c]">wherever</span> you go
              </h1>
              <p className=" mt-6">
                With Holafly’s eSIM, enjoy internet connection on every
                adventure <br /> and forget about expensive roaming bills upon
                your return.
              </p>
              <div className="flex mb-[70px] relative">
                <div className=" border shadow-md flex items-center  rounded-[12px] gap-2 mt-10  p-2 bg-white ">
                  <div>
                    <Image
                      height={100}
                      className=" w-[20px]"
                      width={100}
                      src={"/location.svg"}
                    />
                  </div>
                  <div className="border-l relative">
                    <input
                      placeholder="Where do you need internet?"
                      className="px-3 outline-none min-w-[300px]
                "
                      onChange={(e) => setsearchVal(e.target.value)}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      type="text"
                    />
                    {isFocus && searchVal !== "" && (
                      <div className=" absolute top-[26px] p-2 shadow-md left-0 w-full z-[100] bg-white border">
                        <p className="text-xs mb-2 tracking-wide font-semibold text-gray-500 w-full border-b pb-1">
                          DESTINATION
                        </p>
                        <div className="mb-[0px] hover:bg-gray-50 py-1 cursor-pointer flex items-center gap-2 ">
                          <Image
                            height={100}
                            className=" w-[35px] rounded-[4px] h-[30px] object-cover"
                            width={100}
                            src={"/ar.jpeg"}
                          />
                          <div>
                            <p className="text-[12px] font-semibold">Armenia</p>
                            <p className="text-[10px] -mt-1 text-gray-400">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing.
                            </p>
                          </div>
                        </div>
                        <div className="mb-[0px] hover:bg-gray-50 py-1 cursor-pointer flex items-center gap-2 ">
                          <Image
                            height={100}
                            className=" w-[35px] rounded-[4px] h-[30px] object-cover"
                            width={100}
                            src={"/ar.jpeg"}
                          />
                          <div>
                            <p className="text-[12px] font-semibold">Armenia</p>
                            <p className="text-[10px] -mt-1 text-gray-400">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button className=" py-2 px-[10px] rounded-[12px] hover:bg-[#3ac26e]  bg-[#47EC86]">
                    <Image
                      height={100}
                      className=" w-[30px]"
                      width={100}
                      src={"/search.png"}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className=" relative z-40">
              <Image
                height={800}
                className=" w-[456px]"
                width={1000}
                src={"/hero.webp"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" -mt-[100px] py-5  bg-[#f8f8fb] w-full">
        <div className="max-w-[1440px] mx-auto ">
          <div className="w-[80%] mx-auto">
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-2">
                <h1 className=" font-semibold text-[30px]">
                  <span className="text-[50px]">4.6</span>/5
                </h1>
                <Image
                  height={100}
                  className=" w-[40px]"
                  width={100}
                  src={"/star.svg"}
                />
              </div>
              <div>
                <p>Based on 38000+ </p>
                <p>
                  customer reviews on{" "}
                  <a href="#" className=" font-semibold underline">Trustpilot</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mt-[90px] mx-auto">
        <div className="w-[80%] mx-auto">
          <div className=" w-full grid grid-cols-1 items-start lg:grid-cols-4 gap-5">
            <div className="flex items-center mt-3 flex-col ">
              <Image
                height={100}
                className=" w-[36px]"
                width={100}
                src={"/unlimited-small.svg"}
              />
              <h6 className="text-[20px] pb-2 pt-6 font-semibold">
                Unlimited data
              </h6>
              <p className="text-center text-[#62666b] ">
                Get unlimited data plans at <br /> multiple destinations.
              </p>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                height={100}
                className=" w-[36px]"
                width={100}
                src={"/no-additional-charges.svg"}
              />
              <h6 className="text-[20px] pb-2 pt-4 font-semibold">
              No roaming charges
              </h6>
              <p className="text-center text-[#62666b] ">
              Travel and stay connected without <br /> roaming or surprise bills.
              </p>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                height={100}
                className=" w-[36px]"
                width={100}
                src={"/digital-sim.svg"}
              />
              <h6 className="text-[20px] pb-2 pt-4 font-semibold">
              Keep your physical SIM
              </h6>
              <p className="text-center text-[#62666b] ">
              Keep your local SIM card to <br /> receive calls.
              </p>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                height={100}
                className=" w-[36px]"
                width={100}
                src={"/rocket-beneficios.svg"}
              />
              <h6 className="text-[20px] pb-2 pt-4 font-semibold">
              Easy installation
              </h6>
              <p className="text-center text-[#62666b] ">
              Purchase and setup your eSIM in <br /> minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
