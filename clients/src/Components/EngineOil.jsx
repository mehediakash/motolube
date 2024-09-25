import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import from modules

import "swiper/swiper-bundle.css";
import brane1 from "../assets/EnginOil/mobil-logo1.png";
import brane2 from "../assets/EnginOil/caltex_logo 1.png";
import EnginOilCard from "./EnginOilCard";

const EngineOil = () => {
  return (
    <div className="bg-root py-20">
      <div className="container relative mx-auto flex flex-wrap justify-start  border border-[rgba(225,225,225,0.25)] pt-10  px-10 rounded-lg">
        <div className="absolute  top-[-5%] left-[50%] translate-x-[-50%] bg-root py-3 px-5">
          <h2 className="text-white text-2xl">Engine Oil</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2} // Default for mobile
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2, // Mobile view
            },
            768: {
              slidesPerView: 4, // Tablets
            },
            1024: {
              slidesPerView: 4, // Larger screens show 12 items
            },
          }}
          navigation={false} // Adds navigation arrows
          pagination={{ clickable: true }} // Adds pagination dots
          modules={[Navigation, Pagination]} // Swiper modules
          className="mySwiper relative pb-10 md:pb-20"
        >
          {/* Slider Items */}
          <SwiperSlide className="flex flex-col gap-y-5">
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-y-5">
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
              link={"brandshop"}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-y-5">
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-y-5">
            <div className="slider-item w-full cursor-pointer">
              <div className="bg-white px-10 py-20 rounded-md">
                <picture>
                  <img className="mx-auto" src={brane1} alt="Mobil Oil" />
                </picture>
              </div>
              <p className="text-white text-base text-center my-1">
                Lorem iposome json Edit
              </p>
              <h2 className="text-primary font-medium text-xl text-center">
                Mobil Oil
              </h2>
            </div>
            <div className="slider-item w-full cursor-pointer">
              <div className="bg-white px-10 py-20 rounded-md">
                <picture>
                  <img className="mx-auto" src={brane1} alt="Mobil Oil" />
                </picture>
              </div>
              <p className="text-white text-base text-center my-1">
                Lorem iposome json Edit
              </p>
              <h2 className="text-primary font-medium text-xl text-center">
                Mobil Oil
              </h2>
            </div>
            <div className="slider-item w-full cursor-pointer">
              <div className="bg-white px-10 py-20 rounded-md">
                <picture>
                  <img className="mx-auto" src={brane1} alt="Mobil Oil" />
                </picture>
              </div>
              <p className="text-white text-base text-center my-1">
                Lorem iposome json Edit
              </p>
              <h2 className="text-primary font-medium text-xl text-center">
                Mobil Oil
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-y-5">
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
            <EnginOilCard
              discription={"Lorem iposome json Edit"}
              title=" Mobil Oil"
              img={brane1}
            />
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default EngineOil;
