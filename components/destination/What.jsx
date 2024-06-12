import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const What = () => {
  return (
    <div className="bg-[#F8F8FB] px-5 lg:px-0 w-full py-20">
      <div className=" lg:max-w-[1440px] mx-auto">
        <h1 className="text-[26px] font-semibold lg:text-[38px] pb-5">What you should know about eSIMs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className=" bg-white rounded-[12px] border p-10">
            <Image
              src={"/d/no-phone-number-local.svg"}
              width={200}
              height={200}
              className="w-[48px] "
            />
            <h5 className="text-[24px] pt-5  pb-3 font-semibold">
              No local phone number
            </h5>
            <p className=" font-semibold">
              This eSIM only includes data. It does not allow you to make cell
              phone calls or send SMS messages. You can still use WhatsApp or
              Skype to call your contacts.
            </p>
          </div>
          <div className=" bg-white rounded-[12px] border p-10">
            <Image
              src={"/d/phone-magic.svg"}
              width={200}
              height={200}
              className="w-[48px] "
            />
            <h5 className="text-[24px] pt-5  pb-3 font-semibold">
              Your phone must support eSIM
            </h5>
            <p className=" font-semibold">
              Make sure your phone is both unlocked and compatible with eSIM
              technology.
            </p>
            <div className="mt-4 flex font-medium underline items-center gap-2">
              Check compatible devices <BsArrowRight />
            </div>
          </div>
          <div className=" bg-white rounded-[12px] border p-10">
            <Image
              src={"/d/install-before-travel-1.svg"}
              width={200}
              height={200}
              className="w-[48px] "
            />
            <h5 className="text-[24px] pt-5  pb-3 font-semibold">
            Install before you travel and take off
            </h5>
            <p className=" font-semibold">
            Scan the QR code from your smartphone settings and add the data plan. But don’t activate it until you land at your destination. Take the printed QR code on your travels just in case.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
