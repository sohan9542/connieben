import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FAQ = () => {
  const [active, setActive] = useState(null);
  return (
    <div className=" px-5 lg:px-0 my-[60px]">
      <h1 className=" text-[26px] lg:text-[32px] font-medium text-center ">
        Frequently Asked Questions (FAQs)
      </h1>
      <p className=" mt-5 mb-10 text-center">
        Find helpful information to answer your questions
      </p>
      <div className=" max-w-[1440px] mx-auto ">
        <div className=" lg:px-[44px] flex items-start flex-wrap gap-x-[2%] gap-y-4">
          {[1, 2, 3, 3, 3, 3, 3, 3, 3, 3].map((item, ind) => (
            <div
              onClick={() => {
                if (active === ind) {
                  setActive(null);
                } else {
                  setActive(ind);
                }
              }}
              className=" border  w-full lg:w-[49%]  rounded-[12px] bg-white "
            >
              <div className="flex items-center cursor-pointer justify-between p-5">
                <p>Can I top up my eSIM?</p>
                {active === ind ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              {active === ind && (
                <div className=" bg-[#F8F8FB] text-[14px] px-5 py-3 ">
                  Yes, you can do it by entering the Holafly Center or through
                  our App.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
