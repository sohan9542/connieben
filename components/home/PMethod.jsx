import React from "react";
import Image from "next/image";
const PMethod = () => {
  return (
    <div className="w-full">
      <div className=" py-[40px] hidden lg:px-0 my-[60px] bg-[#F8F8FB] lg:flex flex-wrap items-center justify-center gap-10">
        <Image
          className="h-[40px] w-auto"
          src={"/pay_safely.svg"}
          height={600}
          width={600}
        />
        <Image
          className="h-[40px] w-[59px] "
          src={"/visa_icon.svg"}
          height={600}
          width={600}
        />
        <Image
          className="h-[40px]  w-[48px]"
          src={"/mastercard-icon.svg"}
          height={600}
          width={600}
        />
        <Image
          className="h-[40px] w-[53px]"
          src={"/GooglePay.svg"}
          height={600}
          width={600}
        />
        <Image
          className="h-[40px] w-[89px]"
          src={"/paypal-icon.svg"}
          height={600}
          width={600}
        />
        <Image
          className="h-[40px] w-[51px]"
          src={"/apple-pay-icon.svg"}
          height={600}
          width={600}
        />
      </div>
      <div className=" py-[40px] flex lg:px-0 my-[60px] flex-col bg-[#F8F8FB] lg:hidden flex-wrap items-center justify-center gap-10">
        <Image
          className="h-[40px] w-auto"
          src={"/pay_safely.svg"}
          height={600}
          width={600}
        />
        <div className="flex items-center gap-6">
          <Image
            className="h-[40px] w-[59px] "
            src={"/visa_icon.svg"}
            height={600}
            width={600}
          />
          <Image
            className="h-[40px]  w-[48px]"
            src={"/mastercard-icon.svg"}
            height={600}
            width={600}
          />
          <Image
          className="h-[40px] w-[89px]"
          src={"/paypal-icon.svg"}
          height={600}
          width={600}
        />
        
        </div>
       <div className="flex items-center gap-6">
       <Image
            className="h-[40px] w-[53px]"
            src={"/GooglePay.svg"}
            height={600}
            width={600}
          />
        <Image
          className="h-[40px] w-[51px]"
          src={"/apple-pay-icon.svg"}
          height={600}
          width={600}
        />
       </div>
      </div>
    </div>
  );
};

export default PMethod;
