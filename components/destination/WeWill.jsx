import React from "react";
import Image from "next/image";
const WeWill = () => {
  return (
    <div className="w-full">
      <div className=" max-w-[1440px] px-5 lg:px-0 mx-auto py-10 lg:py-32">
        <div className=" grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className=" hidden lg:flex items-center px-10 justify-center">
            <Image
              src={"/d/qr_mail.svg"}
              width={500}
              height={500}
              className="w-full "
            />
          </div>
          <div className=" lg:col-span-2 lg:pl-10">
            <h1 className="text-[26px] lg:text-[36px] font-medium">
              We will send you the eSIM to your e-mail
            </h1>
            <p className=" mt-3 mb-10">As soon as you complete your purchase, you’ll receive the instructions to install and activate your international travel eSIM and Buy Now on your adventure!</p>
            <div className="flex items-center gap-2">
            <Image
              src={"/d/desktop.svg"}
              width={500}
              height={500}
              className="w-[24px] "
            /> 
            <p className=" font-medium">Installation instructions with QR code</p>
            </div>
            <div className="flex items-center mt-2 gap-2">
            <Image
              src={"/d/cellphone.svg"}
              width={500}
              height={500}
              className="w-[24px] "
            /> 
            <p className=" font-medium">Manual installation instructions</p>
            </div>
          </div>
          <div className=" flex lg:hidden items-center px-10 justify-center">
            <Image
              src={"/d/qr_mail.svg"}
              width={500}
              height={500}
              className="w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWill;
