import React from "react";

const Hero = () => {
  return (
    <>
      <div className="font-bold text-[#240D57] text-[36px] mt-[94px] text-center leading-9">
        Imagine if
        <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
          Snapchat
        </span>
        <br /> had events.
      </div>
      <p className="text-[#4F4F4F] font-light text-[16px] text-center mt-4 mx-7 mb-9">
        Easily host and share events with your friends across any social media.
      </p>
    </>
  );
};

export default Hero;
