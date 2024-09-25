import React from "react";
import banner1 from "../assets/banner/banner3-1.webp";
import banner2 from "../assets/banner/banner3-2.webp";
import { Link } from "react-router-dom";
const BannerAdd = () => {
  return (
    <div className="bg-root">
      <div className="container mx-auto justify-between gap-x-20 flex md:flex-row flex-col md:pt-20 pt-10">
        <Link to="/shop">
          <picture className="md:w-[48%] transition-all duration-300 hover:scale-105 cursor-pointer md:mb-0 pb-10">
            <img className="rounded-xl" src={banner1} alt="banner1" />
          </picture>
        </Link>
        <Link to="/shop">
          <picture className="md:w-[48%]  h-auto relative z-0 rounded-lg  transition-all duration-300 hover:scale-105 cursor-pointer">
            <img className="rounded-xl" src={banner2} alt="banner1" />
          </picture>
        </Link>
      </div>
    </div>
  );
};

export default BannerAdd;
