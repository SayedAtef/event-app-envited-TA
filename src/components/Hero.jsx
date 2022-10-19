import React from "react";

const Hero = () => {
  return (
    <>
      <div className="font-bold text-[#240D57] text-[36px] leading-9 md:text-[64px] md:leading-[64px] mt-[70px] md:mt-[60px] xl:mt-[20px] text-center xl:mb-10">
        Imagine if
        <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
          Snapchat
        </span>
        <br /> had events.
      </div>
      <p className="text-[#4F4F4F] font-light text-[16px] md:text-[24px] md:leading-[27.6px] md:max-w-[521px] md:m-auto text-center mt-3 mx-7 xl:mt-10">
        Easily host and share events with your friends across any social media.
      </p>
    </>
  );
};

export default Hero;
