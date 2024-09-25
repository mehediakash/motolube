import React from "react";
import emaillogo from "../assets/logo/email-white.svg";
import footerlogo from "../assets/logo/Group 2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#060A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-x-5 md:flex-row justify-between items-center  py-6">
            <div>
              <picture>
                <img className="w-[100px]" src={emaillogo} alt="" />
              </picture>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">
                SUBSCRIBE & GET Updated
              </h3>
              <p className="text-sm text-gray-300 mt-2 md:pr-40">
                your first purchase! Plus, be the first to know about sales, new
                product launches, and exclusive offers!
              </p>
            </div>
            {/* Email Input */}
            <div className="flex justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full bg-white text-black placeholder-gray-500 w-full md:w-64 lg:w-80 focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full ml-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-root text-white py-8">
        {/* Upper Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <img src={footerlogo} alt="" />
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF /> {/* Add Font Awesome */}
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaPinterestP /> {/* Add Font Awesome */}
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>

              <a href="#" className="text-white hover:text-gray-300">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold text-red-600">COMPANY INFO</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Store Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}

          {/* Customer Care */}
          <div className="mapouter mr-5" style={{ display: "table" }}>
            <div
              className="gmap_canvas "
              style={{
                overflow: "hidden",
                position: "relative",
                height: "290px",
                background: "#fff",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Pangsha,Rajbari-7720&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "500px",
                  height: "290px",
                  position: "relative",
                  zIndex: 2,
                }}
                allowFullScreen
                title="Google Map"
              ></iframe>
              <a
                href="https://www.taxuni.com/qbi-calculator/"
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              >
                QBI Calculator
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#060A0F] py-6 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center  md:space-y-0">
            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-gray-400">
              <i className="fas fa-phone-alt text-red-600"></i>
              <p>
                We’re available by phone{" "}
                <span className="text-red-600">01711-154387</span>
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <i className="fas fa-envelope text-red-600"></i>
              <p>
                Email:{" "}
                <span className="text-white">motolubebangladesh@gmail.com</span>
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <i className="fas fa-clock text-red-600"></i>
              <p>Opening Hours: Monday till Friday 10 to 6 EST</p>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            {/* <img src={visaIcon} alt="Visa" className="w-8 h-auto" />
          <img src={paypalIcon} alt="PayPal" className="w-8 h-auto" />
          <img src={amexIcon} alt="American Express" className="w-8 h-auto" />
          <img src={payIcon} alt="Pay" className="w-8 h-auto" /> */}
          </div>

          {/* Copyright */}
        </div>
        <div className=" text-white text-sm mt-4 text-center">
          <p>Copyright © 2024 LogicGrid Soft. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
