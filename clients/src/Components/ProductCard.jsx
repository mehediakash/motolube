import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductCard = ({ title, discription, price, img, id }) => {
  return (
    <div className=" rounded-md max-w-[280px] overflow-hidden group relative">
      <img className=" rounded-md" src={img} alt="product" />
      <h1 className="text-white mt-5 mb-2 text-base">{title}</h1>
      <p className="text-white text-sm">{discription}</p>

      <p className=" mt-2 font-medium text-base text-primary flex items-center gap-x-1">
        {price} <TbCurrencyTaka size={18} />
      </p>

      <div className="bg-white py-4 h-[70%] px-2 absolute bottom-0 left-[0] transition-transform duration-300 -translate-y-[-101%] border-red-300 border group-hover:translate-y-[0%] ">
        <h1 className="text-black mt-5 font-medium mb-2 text-base ">{title}</h1>
        <p className="text-black text-sm font-medium hover:text-primary transition-colors">
          {discription}
        </p>

        <p className=" mt-2 font-bold  text-primary text-base">{price} TK</p>
        <div className="flex  justify-between items-center mt-5">
          <Link to={"/product"}>
            <button className="bg-root hover:bg-primary w-[100px] h-[100px]  transition-colors rounded-full px-4 py-1 text-white font-medium  text-center ">
              Buy Now
            </button>
          </Link>

          <div className="bg-gray-300 w-[50px] h-[50px] flex rounded-full justify-center items-center text-black hover:bg-primary    font-bold hover:text-white transition-colors ">
            <CiShoppingCart size={25} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
