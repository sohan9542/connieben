import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import DHero from "../../components/destination/DHero";
import ChangePlan from "../../components/home/ChangePlan";
import Recommand from "../../components/home/Recommand";
import FAQ from "../../components/home/FAQ";
import { useRouter } from "next/router";
import Advantage from "../../components/destination/Advantage";
import HowDoes from "../../components/destination/HowDoes";
import What from "../../components/destination/What";
import WeWill from "../../components/destination/WeWill";
import BuyPopup from "../../components/destination/BuyPopup";
const CountryName = () => {
  const router = useRouter();
  const { cname } = router.query;
  return (
    <div className=" relative min-h-screen w-full">
      <Header />
      <div className=" min-h-screen w-full">
        <DHero cname={cname} />
        <div className=" py-8  w-full lg:bg-[#F8F8FB]">
          <div className="max-w-[1440px] px-5 lg:px-0 mx-auto">
            <h1 className="text-[26px]  font-semibold lg:text-[34px] pl-3 pb-7">
              Advantages of using Holafly eSIM in Albania
            </h1>
          </div>
          <ChangePlan white={true} />
          <div className="max-w-[1440px] px-5 lg:px-0 mt-10 mx-auto">
           <Advantage/>
          </div>
        </div>
        <HowDoes/>
        <What/>
        <WeWill/>
        <Recommand/>
        <div className=" w-full my-32">
       <FAQ title={`Frequently Asked Questions about the ${cname} eSIM`} subtitle={'We’ve put together this list to give you the answers you need.'}/>
       </div>

      </div>
      <BuyPopup/>
      <Footer />
    </div>
  );
};

export default CountryName;
