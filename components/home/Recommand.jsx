import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
const Recommand = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-full px-5 mb-[50px] lg:mb-0 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:w-[80%] mx-auto">
          <h1 className="text-center text-[26px]  lg:text-[32px] font-medium">
            Holafly is the most recommended <br className="hidden lg:block"/> International eSIM: check
            yourself.
          </h1>
          <div className="grid my-10 grid-cols-1 gap-[100px] lg:grid-cols-3">
            <div className=" lg:col-span-2 border rounded-[12px] lg:border-transparent p-5 lg:p-0">
              <div className="slider-container">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  <div className="w-full lg:pr-[100px] ">
                    <Image
                      width={100}
                      height={100}
                      className="w-[24px]"
                      src="/quote-symbol.svg"
                    />
                    <p className="text-[18px] py-5">
                      DON’T stress about your phone service when you travel
                      abroad! I used Holafly to travel home to California this
                      year. The instructions were super easy to follow and I had
                      no problems with the service for the whole 20 days that I
                      used it. It was nice not to worry about how much my phone
                      company was going to charge me for service abroad.
                    </p>
                    <div className="flex items-center gap-3">
                      <p className=" font-medium text-[14px]">
                        Karen Christensen
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          width={100}
                          height={100}
                          className="w-[14px]"
                          src="/verified.svg"
                        />
                        <p className="text-[14px] font-medium text-[#2065ce]">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:pr-[100px] ">
                    <Image
                      width={100}
                      height={100}
                      className="w-[24px]"
                      src="/quote-symbol.svg"
                    />
                    <p className="text-[18px] py-5">
                      Excellent service and when I needed help, the help was
                      there.
                    </p>
                    <div className="flex items-center gap-3">
                      <p className=" font-medium text-[14px]">Paul Elwood</p>
                      <div className="flex items-center gap-2">
                        <Image
                          width={100}
                          height={100}
                          className="w-[14px]"
                          src="/verified.svg"
                        />
                        <p className="text-[14px] font-medium text-[#2065ce]">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:pr-[100px] ">
                    <Image
                      width={100}
                      height={100}
                      className="w-[24px]"
                      src="/quote-symbol.svg"
                    />
                    <p className="text-[18px] py-5">
                      DON’T stress about your phone service when you travel
                      abroad! I used Holafly to travel home to California this
                      year. The instructions were super easy to follow and I had
                      no problems with the service for the whole 20 days that I
                      used it. It was nice not to worry about how much my phone
                      company was going to charge me for service abroad.
                    </p>
                    <div className="flex items-center gap-3">
                      <p className=" font-medium text-[14px]">
                        Karen Christensen
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          width={100}
                          height={100}
                          className="w-[14px]"
                          src="/verified.svg"
                        />
                        <p className="text-[14px] font-medium text-[#2065ce]">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:pr-[100px] ">
                    <Image
                      width={100}
                      height={100}
                      className="w-[24px]"
                      src="/quote-symbol.svg"
                    />
                    <p className="text-[18px] py-5">
                      Excellent service and when I needed help, the help was
                      there.
                    </p>
                    <div className="flex items-center gap-3">
                      <p className=" font-medium text-[14px]">Paul Elwood</p>
                      <div className="flex items-center gap-2">
                        <Image
                          width={100}
                          height={100}
                          className="w-[14px]"
                          src="/verified.svg"
                        />
                        <p className="text-[14px] font-medium text-[#2065ce]">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    className=" px-[15px] text-[24px] rounded-full border"
                    onClick={previous}
                  >
                    ‹
                  </button>
                  <button
                    className=" px-[15px] text-[24px] rounded-full border"
                    onClick={next}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block">
              {" "}
              <Image
                width={500}
                height={500}
                className="w-[320px]"
                src="/people.webp"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:gap-[100px] lg:grid-cols-3">
            <div className=" lg:col-span-2">
              <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-10 ">
                <div className="flex items-center gap-2">
                  <h1 className=" font-medium text-[30px]">
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
                  <p className="text-center lg:text-left">Based on 38000+ </p>
                  <p className="text-center lg:text-left">
                    customer reviews on{" "}
                    <a href="#" className=" font-medium underline">
                      Trustpilot
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row lg:gap-5  ">
                <h1 className="text-[50px]  font-medium">+1M</h1>
                <p>Travelers who <br className="hidden lg:block"/> trust us worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommand;
