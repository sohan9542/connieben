import React from 'react'
import Image from "next/image";
const PMethod = () => {
  return (
    <div className=' py-[40px] my-[60px] bg-[#F8F8FB] flex items-center justify-center gap-10'>
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
  )
}

export default PMethod