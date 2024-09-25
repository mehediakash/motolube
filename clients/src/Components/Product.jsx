import React from "react";
import product from "../assets/Product/1-29-600x600.jpg";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import from modules

import "swiper/swiper-bundle.css";
const Product = () => {
  return (
    <>
      <div className="bg-root py-20">
        <div className="container relative mx-auto flex flex-wrap justify-start  border border-[rgba(225,225,225,0.25)] pt-10  px-10 rounded-lg">
          <div className="absolute  top-[0%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-root py-3 px-5">
            <h2 className="text-white text-2xl">New Arrivals</h2>
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
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-5">
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-5">
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-y-5">
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-y-5">
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
              <ProductCard
                title={"Car Audio Systems"}
                discription={
                  "Dorman Steel Wheel Compatible with Select Honda Models"
                }
                img={product}
                price={"10"}
              />
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Product;
