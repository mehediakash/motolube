import React from "react";
import servicesAdd from "../assets/servicesAdd/services.png";
const ServicesAdd = () => {
  return (
    <>
      <div className=" mx-auto w-full  ">
        <picture>
          <img
            src={servicesAdd}
            className="mx-auto w-full  h-[400px]"
            alt="servicess Add"
          />
        </picture>
      </div>
    </>
  );
};

export default ServicesAdd;
