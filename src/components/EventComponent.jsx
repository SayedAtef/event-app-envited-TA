const EventComponent = ({ Icon, title, subTitle, Arrow }) => {
  return (
    <div className="flex relative justify-start ml-5 my-2">
      <div className="p-4 icon rounded-[10px]">
        <Icon className="text-[#8456EC] w-5 h-5" />
      </div>
      <div className="flex justify-start flex-col ml-5 ">
        <h1 className="text-[16px] text-[#240D57] font-bold">{title}</h1>
        <p className="text-[14px] text-[#4F4F4F] font-normal">{subTitle}</p>
      </div>
      <Arrow className="absolute self-center text-[#BDBDBD] right-5" />
    </div>
  );
};

export default EventComponent;
