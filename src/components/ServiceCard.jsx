import React from "react";

const ServiceCard = ({ image, heading, altDesc, subHeading, description }) => {
  return (
    <div>
      <div className=" border-2 border-[#e36392] border-t-[#e66337] rounded-br-3xl rounded-tl-3xl">
      <img src={image} alt={altDesc} className="w-full rounded-tl-3xl  " />
      <div className="p-5 ">
        <h1 className="text-2xl font-semibold ">{heading}</h1>
        <br />
        <h3 className="text-base font-normal tracking-wider text-[#e66337]">{subHeading}</h3>
        <br />
        <p className=" text-base font-normal tracking-wide ">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default ServiceCard;
