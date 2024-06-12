import React from "react";
import Image from "next/image";
const Advantage = () => {
  const data = [
    {
      img: "/d/very-easy-use-esim.svg",
      title: "Very easy to use",
      desc: "Set up your data plan by scanning a simple QR code or with the manual installation. Activate the eSIM when you land and you’ll be connected instantly. All products come with thorough instructions.",
    },
    {
      img: "/d/esim-unlimited-data-holafly.svg",
      title: "Unlimited data plans",
      desc: "No more top-ups or worrying about running out of data. With a prepaid unlimited data in Albania, you can relax knowing we’ve got you covered.",
    },
    {
      img: "/d/keep-your-whatsapp-number.svg",
      title: "Keep your WhatsApp number",
      desc: "You can call and message all your contacts on WhatsApp, like you’re in the same country. Don’t lose touch with family and friends.",
    },
    {
      img: "/d/support-24-hours-esim.svg",
      title: "24/7 customer support",
      desc: "The eSIM is easy to use, but if you have questions or experience technical issues you can reach us by email or our 24 hour chat support. We’re here to help.",
    },
    {
      img: "/d/inmediate-shipment.svg",
      title: "Immediate delivery",
      desc: "If you’re in a rush or you’re already traveling, don’t worry about waiting for delivery. We send the Albania eSIM immediately to your email, so you can connect in seconds.",
    },
    {
      img: "/d/keep-your-local-number.svg",
      title: "Keep your original SIM for calls",
      desc: "The eSIM is digital, so your original SIM will work as usual if you need it.",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {data.map((item, ind) => (
        <div key={ind} className=" p-8 rounded-[12px] border">
          <Image src={item.img} width={200} height={200} className="w-[50px] h-[54px]" />
          <h1 className="py-5 text-[24px] font-semibold">{item.title}</h1>
          <p className=" font-semibold">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Advantage;
