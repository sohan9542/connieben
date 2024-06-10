import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CgArrowDown, CgArrowRight } from "react-icons/cg";

const Header = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [searchVal, setsearchVal] = useState("");
  const [destination, setDestination] = useState(false);
  return (
    <div className=" relative w-full">
      <div className="w-full fixed top-0 left-0  z-50 bg-white  border-b">
        <div className="py-2 flex items-center text-[15px] justify-center gap-1 w-full text-center bg-[#edf9fe]">
          <FaWhatsapp className="w-4 h-4" /> WhatsApp 24/7:{" "}
          <span className=" cursor-pointer underline">+1 (661) 384-8482</span>
        </div>
        <div className=" max-w-[1440px] mx-auto">
          <div className="w-full hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="#" className="-m-1.5 mr-4 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={"/logo.png"}
                  width={300}
                  height={300}
                  className=" w-full"
                />
              </a>

              <Popover className="relative">
                <Popover.Button
                  className="flex border-b-[2px] border-transparent
hover:border-b-[2px] hover:border-[#E6485B] py-5 items-center gap-x-1 font-semibold outline-none leading-6 text-gray-900"
                >
                  Destinations
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition>
                  <Popover.Panel className="absolute -left-8 z-[90] lg:min-w-[1100px] top-full shadow-sm  mt-3 w-screen max-w-md overflow-hidden  bg-white ">
                    <div className="  bg-white w-full p-5">
                      <div className="grid grid-cols-5 ">
                        <div className="border-r">
                          <h6 className="text-[20px] text-center font-semibold">
                            Best Sellers
                          </h6>
                          <div className="flex flex-col gap-2 items-center py-5">
                            <Link href={"/usa"}>USA</Link>
                            <Link href={"/Canada"}>Canada</Link>
                            <Link href={"/Turkey"}>Turkey</Link>
                            <Link href={"/Spain"}>Spain</Link>
                            <Link href={"/France"}>France</Link>
                            <Link href={"/Mexico"}>Mexico</Link>
                          </div>
                          <h6 className="text-[20px] text-center font-semibold">
                            Regional plans
                          </h6>
                          <div className="flex flex-col gap-2 items-center py-5">
                            <Link href={"/usa"}>Europe</Link>
                            <Link href={"/Canada"}>Asia</Link>
                            <Link href={"/Turkey"}>North America</Link>
                            <Link href={"/Spain"}>Latin America</Link>
                            <Link href={"/France"}>United Kingdom</Link>
                            <Link href={"/Mexico"}>Caribbean</Link>
                          </div>
                        </div>
                        <div className=" lg:col-span-4 px-10">
                          <div className="flex items-center gap-6">
                            <h6 className="text-[20px] font-semibold">
                              All destinations
                            </h6>
                            <div className="flex items-center">
                              <div
                                onClick={() => setActive(1)}
                                className={`${
                                  active === 1 &&
                                  "border bg-opacity-70 bg-green-50 border-green-300 "
                                } px-[20px] rounded-[24px] py-1 cursor-pointer`}
                              >
                                A - B
                              </div>
                              <div
                                onClick={() => setActive(2)}
                                className={`${
                                  active === 2 &&
                                  "border bg-opacity-70 bg-green-50 border-green-300 "
                                } px-[20px] rounded-[24px] py-1 cursor-pointer`}
                              >
                                C - E
                              </div>
                              <div
                                onClick={() => setActive(3)}
                                className={`${
                                  active === 3 &&
                                  "border bg-opacity-70 bg-green-50 border-green-300 "
                                } px-[20px] rounded-[24px] py-1 cursor-pointer`}
                              >
                                G - H
                              </div>
                              <div
                                onClick={() => setActive(4)}
                                className={`${
                                  active === 4 &&
                                  "border bg-opacity-70 bg-green-50 border-green-300 "
                                } px-[20px] rounded-[24px] py-1 cursor-pointer`}
                              >
                                I - K
                              </div>
                              <div
                                onClick={() => setActive(5)}
                                className={`${
                                  active === 5 &&
                                  "border bg-opacity-70 bg-green-50 border-green-300 "
                                } px-[20px] rounded-[24px] py-1 cursor-pointer`}
                              >
                                L - M
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="pl-4">
                              <div className="flex flex-col gap-5  py-5">
                                <Link href={"/usa"}>Albania</Link>
                                <Link href={"/Canada"}>Algeria</Link>
                                <Link href={"/Turkey"}>Andorra</Link>
                                <Link href={"/Spain"}>Argentina</Link>
                                <Link href={"/France"}>Armenia</Link>
                                <Link href={"/Mexico"}>Aruba</Link>
                                <Link href={"/Mexico"}>Asia</Link>
                                <Link href={"/Mexico"}>Australia</Link>
                              </div>
                            </div>
                            <div>
                              <div className="flex flex-col gap-5  py-5">
                                <Link href={"/usa"}>Austria</Link>
                                <Link href={"/Canada"}>Azerbaijan</Link>
                                <Link href={"/Turkey"}>Bahamas</Link>
                                <Link href={"/Spain"}>Bahrain</Link>
                                <Link href={"/France"}>Bangladesh</Link>
                                <Link href={"/Mexico"}>Barbados</Link>
                                <Link href={"/Mexico"}>Belarus</Link>
                                <Link href={"/Mexico"}>Belgium</Link>
                              </div>
                            </div>
                            <div>
                              <div className="flex flex-col gap-5  py-5">
                                <Link href={"/usa"}>
                                  Bosnia and Herzegovina
                                </Link>
                                <Link href={"/Canada"}>Botswana</Link>
                                <Link href={"/Turkey"}>Brazil</Link>
                                <Link href={"/Spain"}>Brunei</Link>
                                <Link href={"/France"}>Bangladesh</Link>
                                <Link href={"/Mexico"}>Bulgaria</Link>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 px-8 w-full">
                            <div className="border flex items-center py-2 justify-center">
                              <p>See all destination</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <Link
                href="/about-us"
                className=" font-semibold py-5 border-b-[2px] border-transparent leading-6 hover:border-b-[2px] hover:border-[#E6485B] text-gray-900"
              >
                About us
              </Link>
              <Link
                href="/faqs"
                className=" font-semibold py-5 border-b-[2px] border-transparent leading-6 hover:border-b-[2px] hover:border-[#E6485B] text-gray-900"
              >
                FAQs
              </Link>
              <Link
                href="/reviews"
                className=" font-semibold py-5 border-b-[2px] border-transparent leading-6 hover:border-b-[2px] hover:border-[#E6485B] text-gray-900"
              >
                Reviews
              </Link>
              <Popover className="relative">
                <Popover.Button
                  className="flex border-b-[2px] border-transparent
hover:border-b-[2px] hover:border-[#E6485B] py-5 items-center gap-x-2 font-semibold outline-none leading-6 text-gray-900"
                >
                  Partnerships
                  <p className=" px-2 py-1 text-xs text-black font-light rounded-[24px] bg-[#EBF3FF]">
                    New
                  </p>
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8  top-full  rounded-[18px] shadow-lg z-10 mt-3 d overflow-hidden  bg-white ">
                    <div className="  bg-white w-full p-5">
                      Holafly for Business
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Link
                href="/contact-us"
                className=" font-semibold py-5 border-b-[2px] border-transparent leading-6 hover:border-b-[2px] hover:border-[#E6485B] text-gray-900"
              >
                Contact us
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button className="border px-5 rounded-[12px] py-2 ">
                Login
              </button>
              <div className=" border-r flex px-4 items-center gap-2">
                <CiGlobe /> <p>EN - USD ($)</p>
              </div>
              <div className="  cursor-pointer px-2">
                <IoSearch className="w-5 h-5" />
              </div>
              <div className="  cursor-pointer px-2">
                <BsCart2 className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex px-5 items-center justify-between lg:hidden">
            {open ? (
              <AiOutlineClose
                onClick={() => setOpen(false)}
                className="w-5 h-5"
              />
            ) : (
              <FaBars onClick={() => setOpen(true)} className="w-5 h-5" />
            )}
            <a href="#" className="-mr-2">
              <span className="sr-only">Your Company</span>
              <Image
                src={"/logo.png"}
                width={300}
                height={300}
                className=" w-full h-[60px]"
              />
            </a>
            <div className="  cursor-pointer px-2">
              <BsCart2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className=" absolute px-5 left-0 top-[100px] overflow-x-auto h-[600px] w-full  bg-white z-[60]">
          <div className="flex mb-[30px] relative">
            <div className=" border  flex items-center  rounded-[12px] gap-2 mt-3  px-2 py-3 bg-white ">
              <div>
                <IoSearchOutline className="text-gray-400" />
              </div>
              <div className="border-l relative">
                <input
                  placeholder="Search"
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
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
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
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <AiOutlineClose className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div
            onClick={() => setDestination(!destination)}
            className="flex items-center border-b pb-3 px-3 mr-2 justify-between"
          >
            <h6 className=" font-semibold text-[17px]">Destinations</h6>{" "}
         {destination ?    <CgArrowDown className="w-5 h-5" />:    <CgArrowRight className="w-5 h-5" />}
          </div>
          {destination && (
            <div className=" py-4 px-[70px]">
              <h6 className="text-[20px] text-center  font-semibold">
                Best Sellers
              </h6>
              <div className="flex flex-col gap-2  py-5">
                <Link href={"/usa"}>USA</Link>
                <Link href={"/Canada"}>Canada</Link>
                <Link href={"/Turkey"}>Turkey</Link>
                <Link href={"/Spain"}>Spain</Link>
                <Link href={"/France"}>France</Link>
                <Link href={"/Mexico"}>Mexico</Link>
              </div>
              <h6 className="text-[20px] text-center  font-semibold">
                Regional plans
              </h6>
              <div className="flex flex-col gap-2 py-5">
                <Link href={"/usa"}>Europe</Link>
                <Link href={"/Canada"}>Asia</Link>
                <Link href={"/Turkey"}>North America</Link>
                <Link href={"/Spain"}>Latin America</Link>
                <Link href={"/France"}>United Kingdom</Link>
                <Link href={"/Mexico"}>Caribbean</Link>
              </div>
              <div className="border flex w-full items-center py-2 justify-center">
                              <p>See all destination</p>
                            </div>
            </div>
          )}
          <Link href="/about-us">
            <div className="flex items-center border-b py-3 px-3 mr-2 justify-between">
              <h6 className=" font-semibold text-[17px]">About us</h6>{" "}
              <CgArrowRight className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/faq">
            <div className="flex items-center border-b py-3 px-3 mr-2 justify-between">
              <h6 className=" font-semibold text-[17px]">FAQs</h6>{" "}
              <CgArrowRight className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/faq">
            <div className="flex items-center border-b py-3 px-3 mr-2 justify-between">
              <h6 className=" font-semibold text-[17px]">Reviews</h6>{" "}
              <CgArrowRight className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/faq">
            <div className="flex items-center border-b py-3 px-3 mr-2 justify-between">
           <div className="flex items-center gap-2">
           <h6 className=" font-semibold text-[17px]">Partnership</h6>{" "}
           <p className=" px-2 py-1 text-xs text-black font-light rounded-[24px] bg-[#EBF3FF]">
                    New
                  </p>
           </div>
           
              <CgArrowRight className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/faq">
            <div className="flex items-center  py-3 px-3 mr-2 justify-between">
              <h6 className=" font-semibold text-[17px]">Contact us</h6>{" "}
              <CgArrowRight className="w-5 h-5" />
            </div>
          </Link>
    <div className="px-3">
    <button className="border w-full px-5 rounded-[12px] py-2 ">
                Login
              </button>
    </div>
        </div>
      )}
    </div>
  );
};

export default Header;
