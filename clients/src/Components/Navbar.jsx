import React, { useState } from "react";
import logo from "../assets/logo/logo-white.png";
import { IoIosCart } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { SiYamahamotorcorporation } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-root">
      <div className="container mx-auto py-4">
        <div className="flex md:justify-between items-center justify-evenly">
          <HiMenuAlt2
            onClick={() => setOpen(!open)}
            size={28}
            className="text-primary md:mr-10 cursor-pointer"
          />
          <Link to={"/"}>
            <picture className="md:w-[20%] w-[30%]">
              <img src={logo} className="md:w-[80%] w-full" alt="logo" />
            </picture>
          </Link>
          <div className="md:w-[60%] w-[40%] relative">
            <input
              type="text"
              placeholder="Search your items"
              className="w-full md:pl-36 md:text-base text-sm md:py-3 p-1 px-4 rounded-full"
            />
            <p className="md:block hidden absolute top-[50%] translate-y-[-50%] left-5 border-r after:w-[5px] after:h-full after:contents after:absolute after:right-0 after:bg-black pr-3">
              All Products
            </p>
            <CiSearch className="absolute top-[50%] md:w-[50px] w-[30px] translate-y-[-50%] md:right-5 right-2" />
          </div>

          <div className="md:w-[20%] w-[8%] flex md:justify-end justify-center">
            <Link to="cart">
              <IoIosCart size={28} className="text-white mr-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen bg-white w-[200px] absolute top-0 left-0 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MdOutlineCancel
          onClick={() => setOpen(false)}
          size={25}
          className="text-primary absolute top-3 right-3 cursor-pointer"
        />
        <ul className="mt-10 p-2">
          <li className="border rounded-lg py-2 px-2 flex items-center gap-x-2">
            <IoCarSport />
            Cars
          </li>
          <li className="border rounded-lg py-2 px-2 mt-3 flex items-center gap-x-2">
            <SiYamahamotorcorporation />
            Bike
          </li>
          <li className="border rounded-lg py-2 px-2 mt-3 flex items-center gap-x-2">
            <FaTruckFast />
            Truck
          </li>
          <li className="border rounded-lg py-2 px-2 mt-3 flex items-center gap-x-2">
            <FaBus />
            Bus
          </li>
          <li
            className="border rounded-lg py-2 px-2 mt-3 flex items-center gap-x-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaTools />
            Tools
            <IoIosArrowDown className="ml-auto" />
          </li>

          {/* Dropdown Menu */}
          <ul
            className={`pl-8 mt-2 overflow-hidden transition-all duration-300 ${
              dropdownOpen ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <li className="py-2">Tyers</li>
            <li className="py-2">Bulb</li>
            <li className="py-2">Filter</li>
            <li className="py-2">Bracks</li>
            <li className="py-2">Horn</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
