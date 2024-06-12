import React,{useState, useEffect} from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const BuyPopup = () => {
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`py-4 px-5 lg:px-0 ${scrollY > 799 ? 'opacity-100 bottom-0': ' opacity-0 -bottom-[100px]'} bg-white transition-all duration-500 bgpop z-50 fixed  left-0 w-full`}>
      <div className=" max-w-[1440px] mx-auto">
        <div className="w-full flex items-center  justify-between">
          <div className="w-full lg:w-auto">
            <h1 className=" font-medium hidden lg:block">Albania </h1>
            <h1 className=" font-medium text-[20px] block lg:hidden">$27.00 <span className="text-[11px]">USD</span> </h1>
            <h1 className=" font-medium ">7 Days 1 GB data</h1>
          </div>
          <div className="flex items-center  gap-5">
            <h1 className=" hidden font-medium lg:flex items-center gap-1">
              $27.00 <span className="text-[11px]">USD</span>{" "}
            </h1>
            <div className="flex items-center gap-5">
              <div
                onClick={() => makeChange("minus")}
                className="px-2 py-[7px] border cursor-pointer hover:bg-gray-50 rounded-[8px]"
              >
                <FiMinus className="w-3 h-3" />
              </div>
              {travelars}
              <div
                onClick={() => makeChange("plus")}
                className="px-2 py-[7px] border cursor-pointer hover:bg-gray-50 rounded-[8px]"
              >
                <FiPlus className="w-3 h-3" />
              </div>
            </div>
            <button className="w-full hidden lg:block bg-[#48EC86] py-2 px-[40px] font-medium hover:text-white rounded-[6px] hover:bg-[#32A45E]">
                    Get unlimited internet
                  </button>
          </div>
         
        </div>
        <button className="w-full my-4  block lg:hidden  bg-[#48EC86] py-2 px-[40px] font-medium hover:text-white rounded-[6px] hover:bg-[#32A45E]">
                    Get unlimited internet
                  </button>
      </div>
    </div>
  );
};

export default BuyPopup;
