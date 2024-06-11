import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import DHero from "../../components/destination/DHero";
import { useRouter } from "next/router";
const CountryName = () => {
  const router = useRouter();
  const { cname } = router.query;
  return (
    <div className=" relative min-h-screen w-full">
      <Header />
      <div className=" min-h-screen w-full">
        <DHero cname={cname}/>
      </div>
      <Footer />
    </div>
  );
};

export default CountryName;
