import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Import from modules

import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoUmbrella } from "react-icons/io5";
import bannar1 from "../assets/banner/banner1.jpg";
import bannar2 from "../assets/banner/banner2.jpg";

const Banner = () => {
  return (
    <div className="relative mx-auto h-screen overflow-hidden">
      {/* Swiper Banner Slider */}
      <Swiper
        modules={[Navigation, Autoplay]} // Use Swiper modules here
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }} // Use these classes for custom styling
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={bannar1}
              alt="banner1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={bannar2}
            alt="banner2"
          />
        </SwiperSlide>
        <div className="swiper-button-prev custom-swiper-button text-primary"></div>
        <div className="swiper-button-next custom-swiper-button text-primary"></div>
      </Swiper>

      {/* Services Section */}
      <div className="absolute bottom-0 w-full z-10 bg-opacity-50 bg-black py-10 px-5">
        <div className="xl:flex hidden justify-center container mx-auto gap-x-10">
          <div className="flex items-center group gap-x-5">
            <div className="bg-primary p-5 rounded-full">
              <TbTruckDelivery
                size={35}
                className="text-white group-hover:animate-bounce transition-transform"
              />
            </div>
            <div>
              <h2 className="mb-2 text-base font-medium text-primary">
                FREE US DELIVERY
              </h2>
              <p className="text-white text-sm">
                For US customers (including Alaska and Hawaii) or orders over
                $200
              </p>
            </div>
          </div>
          <div className="flex items-center group gap-x-5">
            <div className="bg-primary p-5 rounded-full">
              <RiSecurePaymentLine
                size={35}
                className="text-white group-hover:animate-bounce transition-transform"
              />
            </div>
            <div>
              <h2 className="mb-2 text-base font-medium text-primary">
                SECURE PAYMENT
              </h2>
              <p className="text-white text-sm">
                We accept Visa, American Express, Paypal, Payoneer Mastercard
                and Discover
              </p>
            </div>
          </div>
          <div className="flex items-center group gap-x-5">
            <div className="bg-primary p-5 rounded-full">
              <IoUmbrella
                size={35}
                className="text-white group-hover:animate-bounce transition-transform"
              />
            </div>
            <div>
              <h2 className="mb-2 text-base font-medium text-primary">
                1 YEAR WARRANTY
              </h2>
              <p className="text-white text-sm">
                All of our products are made with care and covered for one year
                against manufacturing defects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
