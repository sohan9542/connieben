import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { LuHome } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

const DHero = ({ cname }) => {
  const [active, setActive] = useState(1);
  const [pActive, setPActive] = useState(0);

  const pricing = [
    {
      days: 7,
      data: 1,
      price: "25.00",
    },
    {
      days: 15,
      data: 2,
      price: "35.00",
    },
    {
      days: 30,
      data: 3,
      price: "55.00",
    },
    {
      days: 30,
      data: 5,
      price: "95.00",
    },
    {
      days: 30,
      data: 10,
      price: "145.00",
    },
    {
      days: 30,
      data: 20,
      price: "200.00",
    },
  ];

  const [travelars, setTravelars] = useState(1);
  const makeChange = (method) => {
    if (method === "plus") {
      setTravelars(travelars + 1);
    } else {
      if (travelars > 1) {
        setTravelars(travelars - 1);
      }
    }
  };
  return (
    <div className=" w-full px-5 lg:px-0 my-[100px]">
      <div className=" max-w-[1440px] mx-auto">
        <div className=" py-2 lg:py-8 flex items-center gap-4">
          <LuHome className="w-5 h-5" /> <MdKeyboardArrowRight />
          <Link className=" font-medium" href={"/shop"}>
            Destinations
          </Link>
          <MdKeyboardArrowRight /> {cname}
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-12 ">
          <div className=" hidden lg:flex flex-col lg:col-span-4">
            <div className="relative">
              <Image
                src={"/d/esim-albania.jpg"}
                className="w-full"
                width={1000}
                height={1000}
              />
              <div className=" absolute bottom-0 left-0 z-10">
                <Image
                  src={"/d/product-wave.svg"}
                  className="w-full"
                  width={600}
                  height={600}
                />
              </div>
              <div className=" absolute -bottom-[72px] left-0 w-full flex items-center justify-center z-20">
                <div className=" relative bg-white shadow-md rounded-[12px] overflow-hidden">
                  <Image
                    src={"/d/wave-tarjeta-producto.svg"}
                    className="w-full"
                    width={600}
                    height={600}
                  />
                  <div className="flex  items-start ">
                    <Image
                      src={"/d/qr.svg"}
                      className="w-[80px] ml-2"
                      width={300}
                      height={300}
                    />
                    <div className="text-[9px] mt-2">
                      Scan the QR code and connect <br /> instantly.
                    </div>
                  </div>
                  <div className=" absolute  z-30 left-3 top-5">
                    <Image
                      src={"/d/h-card.svg"}
                      className="w-[54px] "
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:pl-10 lg:col-span-8">
            <p className="hidden lg:block text-sm text-[#56575a]">
              eSIM with Unlimited Data in
            </p>
            <div className="hidden lg:flex items-center justify-between">
              <h1 className=" capitalize text-[32px] lg:text-[40px] font-medium ">
                {cname}
              </h1>
              <h1 className=" capitalize text-[32px] lg:text-[40px] font-medium ">
                $27.00<span className="text-xs font-medium">USD</span>
              </h1>
            </div>

            <div className="  rounded-[16px]  shadow-shop  lg:p-8">
              <div className="hidden lg:flex items-center justify-between">
                <h1 className="text-[22px] font-medium">
                  How many days are you traveling for?
                </h1>
                <div className="border rounded-[8px]  px-4  py-2">
                  <select className="cursor-pointer" name="" id="">
                    <option value="">USD ($)</option>
                    <option value="">GBP ($)</option>
                  </select>
                </div>
              </div>
              <div className="flex lg:hidden items-center gap-2">
              <h1 className="text-[30px] lg:hidden font-semibold">
                Get a {cname} eSIM
              </h1>
              <Image
                src={"/al.png"}
                width={100}
                height={100}
                className="w-[30px] rounded-full h-[30px] object-cover"
              />
              </div>
              <p className=" lg:hidden font-semibold">
                Downloadable {cname} SIM card with <br /> prepaid data
              </p>
              <div className="grid my-5 grid-cols-2 gap-3 lg:grid-cols-3">
                {pricing.map((item, ind) => (
                  <div
                    key={ind}
                    onClick={() => setPActive(ind)}
                    className={`border ${
                      pActive === ind && "bg-[#F5FFF9] border-[#47EC86]"
                    } cursor-pointer hover:border-black rounded-[8px] p-3 lg:p-5`}
                  >
                    <div className="flex relative items-start w-full justify-between">
                      <div >
                        <h6 className="font-semibold">{item.days} Days</h6>
                        <h6 className="font-semibold  text-nowrap text-gray-500">
                          {item.data} GB data
                        </h6>
                        <p className="mt-5 text-nowrap">
                          <strong>${item.price} </strong>
                          <span className="text-xs">USD</span>
                        </p>
                      </div>
                      <div className="w-full lg:hidden absolute top-[58%] left-0 h-[1px] bg-gray-200">

                      </div>
                      {pActive === ind ? (
                        <div className="bg-[#47EC86] p-[6px] rounded-full flex items-center justify-center">
                          <div className="w-[7px] h-[7px]  bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <div className="bg-white p-[8px] border border-gray-400 rounded-full flex items-center justify-center"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <h1 className="text-[22px] hidden lg:flex items-center gap-1 font-medium">
                <IoIosInformationCircleOutline /> How many travelers are you
                purchasing for?
              </h1>
              <div className="my-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className=" hidden lg:flex px-5 items-center justify-between">
                  <div
                    onClick={() => makeChange("minus")}
                    className="border cursor-pointer hover:bg-gray-50 px-3 py-3 rounded-[4px] flex items-center justify-center"
                  >
                    <FiMinus />
                  </div>
                  {travelars}
                  <div
                    onClick={() => makeChange("plus")}
                    className="border cursor-pointer hover:bg-gray-50 px-3 py-3 rounded-[4px] flex items-center justify-center"
                  >
                    <FiPlus />
                  </div>
                </div>
                <div className=" lg:col-span-2">
                  <button className="w-full hidden lg:block bg-[#48EC86] py-3 font-medium hover:text-white rounded-[6px] hover:bg-[#32A45E]">
                    Get unlimited internet
                  </button>
                  <button className="w-full block lg:hidden bg-[#48EC86] py-3 font-medium hover:text-white rounded-[6px] hover:bg-[#32A45E]">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex mt-[30px] flex-wrap items-center justify-center gap-3  mb-5">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/d/proteger.svg"}
                    className="w-[24px] "
                    width={600}
                    height={600}
                  />
                  <p className=" font-medium text-gray-500 text-sm lg:text-xs">
                    Secure <br className="hidden lg:block"/> payment <br className="hidden lg:block"/>
                    guaranteed
                  </p>
                </div>
              <div className="flex items-center gap-3">
              <Image
                  src={"/d/visa.svg"}
                  className="w-[58px] "
                  width={600}
                  height={600}
                />
                <Image
                  src={"/d/mastercard.svg"}
                  className="w-[58px] "
                  width={600}
                  height={600}
                />
                <Image
                  src={"/d/ApplePay.svg"}
                  className="w-[38px] "
                  width={600}
                  height={600}
                />
                <Image
                  src={"/d/GPay.svg"}
                  className="w-[38px] "
                  width={600}
                  height={600}
                />
                <Image
                  src={"/d/Paypal.svg"}
                  className="w-[58px] "
                  width={600}
                  height={600}
                />
              </div>
              </div>
            </div>
            <div className="flex my-5 items-center justify-between">
              <div className="flex items-center gap-2 lg:bg-[#f8f8fb] p-2 rounded-[16px]">
                <div
                  onClick={() => setActive(1)}
                  className={`${
                    active === 1 ? "border border-black bg-white" : ""
                  } text-[14px] px-2 lg:px-5 py-2 font-semibold cursor-pointer rounded-[16px]`}
                >
                  Features
                </div>
                <div
                  onClick={() => setActive(2)}
                  className={`${
                    active === 2 ? "border border-black bg-white" : ""
                  } text-[14px] px-2 lg:px-5 py-2 font-semibold cursor-pointer rounded-[16px]`}
                >
                  Description
                </div>
                <div
                  onClick={() => setActive(3)}
                  className={`${
                    active === 3 ? "border border-black bg-white" : ""
                  } text-[14px] px-2 lg:px-5 py-2 font-semibold cursor-pointer rounded-[16px]`}
                >
                  Technical Specs
                </div>
              </div>
              {/* <div className="border px-5 rounded-[8px] cursor-pointer hover:bg-gray-50 py-3 flex items-center gap-2">
                Check compatibility{" "}
                <Image
                  src={"/d/yes-device-compatibility.svg"}
                  className="w-[24px]"
                  width={60}
                  height={60}
                />
              </div> */}
            </div>
            {active === 1 && (
              <div className=" py-3">
                <div className="flex items-center gap-3">
                  <div className="w-[25px]">
                    <Image
                      src={"/d/unlimited.svg"}
                      className="w-[25px] "
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>Unlimited data</p>
                </div>
                <div className="flex items-center mt-2 gap-3">
                  <div className="w-[25px]">
                    <Image
                      src={"/d/bolt.svg"}
                      className="w-[25px] "
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>Fast and reliable internet</p>
                </div>
                <div className="flex items-center mt-2 gap-3">
                  <div className="w-[25px]">
                    <Image
                      src={"/d/money-off.svg"}
                      className="w-[25px] "
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>No more roaming charges</p>
                </div>
              </div>
            )}
            {active === 2 && (
              <div>
                <p className="font-medium">
                  Buy an <strong>international eSIM for Albania </strong> and
                  never pay for roaming again. Connect to unlimited Internet at
                  3G / LTE speed in minutes and{" "}
                  <strong>stay in touch with your family and friends.</strong>
                </p>
                <p className="mt-3 font-medium">
                  It’s easy to start using our services. After your purchase,
                  you will receive a QR code in your email, scan it with your
                  smartphone camera, install and enjoy a fast and{" "}
                  <strong>stable Internet connection in Albania.</strong>
                </p>
              </div>
            )}
            {active === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
                <div>
                  <ul className=" list-disc pl-10">
                    <li className="font-medium mt-1">
                      <strong>Speed:</strong> 4G / LTE
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Tethering / Hotspot: </strong> No
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Data packages: </strong> Unlimited
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Days of use: </strong> 5, 7, 10, 15, 20.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Phone number: </strong> No
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Plan type:</strong> Prepaid
                    </li>
                    <li className="font-medium mt-1">
                      <strong>SMS:</strong> No
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Analog calls: </strong> No, only through apps
                      (VOIP)
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Compatibility: </strong> all smartphones with eSIM
                      technology enabled. Operation on smartwatches and tablets
                      is not guaranteed.
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className=" list-disc pl-10">
                    <li className="font-medium mt-1">
                      <strong>Coverage:</strong> You will enjoy good coverage in
                      Tirana, Apolonia, Durres, Berat, Shkodra, Gjirokastra,
                      Kruja, Dhërmi, and other cities and tourist destinations
                      in Albania.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Shipping: </strong> via email.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Delivery time: </strong> immediate, after
                      purchase.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Installation </strong> scan a QR code.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>ID required: </strong> No
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Technology</strong> eSIM
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Designed for</strong> tourism, backpackers,
                      vacations, digital nomads, and business.
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Speed reduction: </strong> the eSIM includes
                      unlimited data for the contracted time. However, please
                      note that the carrier may reserve the right to apply a
                      Fair Usage
                    </li>
                    <li className="font-medium mt-1">
                      <strong>Networks: </strong> ALBtelecom sh.a./ Vodafone /
                      TELEKOM ALBANIA SH.A
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DHero;
