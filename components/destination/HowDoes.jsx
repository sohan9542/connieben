import React from "react";
import Image from "next/image";
const HowDoes = () => {
  return (
    <div className="my-[100px] px-5 lg:px-0">
      <h1 className="text-[26px]  font-medium lg:text-[34px] text-center">
        How does the Holafly eSIM for Albania work?
      </h1>
      <div className="mt-16 max-w-[1440px] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex items-center flex-col gap-5">
            <div className="bg-[#DCF4FF] rounded-[12px] font-medium px-3 py-2">
              01.
            </div>
            <h1 className="  text-center font-medium leading-[24px]  text-[20px]">
              Check your phone is compatible <br /> with eSIM
            </h1>
            <p className=" font-medium text-center">
              Check if your smartphone is compatible <br /> now
            </p>
            <Image
              src={"/d/compatibility.svg"}
              width={200}
              height={200}
              className="w-[160px] "
            />
          </div>
          <div className="flex items-center flex-col gap-5">
            <div className="bg-[#DCF4FF] rounded-[12px] font-medium px-3 py-2">
              02.
            </div>
            <h1 className="  text-center font-medium leading-[24px]  text-[20px]">
              Buy your prepaid eSIM
            </h1>
            <p className=" font-medium text-center">
              Chose the plan that suits you best and buy your <br /> eSIM card
              from our online store.
            </p>
            <Image
              src={"/d/add_to_cart.svg"}
              width={200}
              height={200}
              className="w-[160px] "
            />
          </div>
          <div className="flex items-center flex-col gap-5">
            <div className="bg-[#DCF4FF] rounded-[12px] font-medium px-3 py-2">
              03.
            </div>
            <h1 className="  text-center font-medium leading-[24px]  text-[20px]">
              Scan the QR code
            </h1>
            <p className=" font-medium text-center">
              It’s easy. Just scan the QR code we send you and <br /> turn on
              data roaming from your settings. Now you <br /> can enjoy browsing
              the web.
            </p>
            <Image
              src={"/d/install_and_activate.svg"}
              width={200}
              height={200}
              className="w-[160px] "
            />
          </div>
        </div>
        <div className=" mt-[60px] border rounded-[20px] p-5 lg:p-10">
          <h1 className="  text-[26px]  font-medium lg:text-[34px] text-center">
            Fast and reliable connection
          </h1>
          <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2  gap-5">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src={"/d/whatsapp.webp"}
                  width={200}
                  height={200}
                  className="w-[30px] rounded-full "
                />
                <p className=" font-medium">
                  Clear video calls with no delays
                </p>
              </div>
              <div className="flex mt-2 items-center gap-3">
                <Image
                  src={"/d/insta.png"}
                  width={200}
                  height={200}
                  className="w-[36px] -ml-[2px] rounded-full "
                />
                <p className=" font-medium">
                  Share stories in just a few seconds
                </p>
              </div>
              <div className="flex mt-2 items-center gap-3">
                <Image
                  src={"/d/tiktok.jpg"}
                  width={200}
                  height={200}
                  className="w-[36px] -ml-[2px] rounded-full "
                />
                <p className=" font-medium">
                  Enjoy creating video content and super fast uploading
                </p>
              </div>
              <div className="flex mt-2 items-center gap-3">
                <Image
                  src={"/d/gmap.png"}
                  width={200}
                  height={200}
                  className="w-[27px] ml-1 "
                />
                <p className=" font-medium">Find your way wherever you go!</p>
              </div>
            </div>
            <div className="bg-[#F8F8FB] p-8 rounded-[12px]">
              <h6 className="text-[20px] font-medium">
                The best performace in all your apps
              </h6>
              <p className=" py-5">
                Discover the freedom of reliable connectivity with high{" "}
                <strong>speed 4G and 5G.</strong> <br /> Holafly keeps you
                connected, no matter the adventure!
              </p>
              <div className="flex items-center gap-3">
              <div className=" bg-white rounded-full px-2 py-3 ">
              <Image
                  src={"/d/uber.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              <div className=" bg-white rounded-full px-1 py-1 ">
              <Image
                  src={"/d/fb.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              <div className=" bg-white rounded-full px-1 py-1 ">
              <Image
                  src={"/d/ding.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              <div className=" bg-white rounded-full px-1 py-1 ">
              <Image
                  src={"/d/skype.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              <div className=" bg-white rounded-full px-1 py-1 ">
              <Image
                  src={"/d/fast.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              <div className=" bg-white rounded-full px-1 py-1 ">
              <Image
                  src={"/d/gmail.png"}
                  width={200}
                  height={200}
                  className="w-[35px] rounded-full "
                />
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoes;
