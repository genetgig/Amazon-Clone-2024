import React from "react";
import { footerBottomItem } from "./constant";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footer_bottom py-8">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-4   gap-6 ml-3 md:grid-cols-7 place-content-center text-gray-400">
          {footerBottomItem.map((item) => (
            <div className="group cursor-pointer" key={item._id}>
              <h3 className="w-24 font-semibold  text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">{item.title}</h3>
              <p className=" w-24  font-bodyFont tracking-tight text-[12px] text-[#999] group-hover:underline leading-3">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-7 items-center justify-center mt-6 text-gray-300 text-[13px]">
          <small>Condition of use</small>
          <small>Privacy Notice</small>
          <small>Your Ads Privacy Choicces</small>
        </div>
        <small className=" flex items-center justify-center text-gray-300 ">
        © 1996-2024, Amazon.com, Inc. or its affiliates
        </small>
      </div>
    </div>
  );
};

export default FooterBottom;
