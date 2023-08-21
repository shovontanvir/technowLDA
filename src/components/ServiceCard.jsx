import React from "react";

const ServiceCard = ({ image, heading, altDesc, subHeading, description }) => {
  return (
    <div>
      <div className=" border-2 border-[#e36392] border-t-[#e66337] rounded-br-3xl rounded-tl-3xl">
      <img src={image} alt={altDesc} className="w-full rounded-tl-3xl  " />
      <div className=" p-5 ">
        <h1 className="  text-2xl font-semibold pb-2 font-worksansnormal">{heading}</h1>
        <h3 className=" text-base font-normal font-Inter pb-2 text-[#e66337] tracking-wide line-clamp-2">{subHeading}</h3>
        <p className=" text-base font-normal font-Inter ">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default ServiceCard;
