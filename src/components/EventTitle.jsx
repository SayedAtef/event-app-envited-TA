import { useContext } from "react";
import FormContext from "../context/formContext";

const EventTitle = () => {
  const { formData } = useContext(FormContext);

  return (
    <div className="ml-5 md:m-0">
      <h1 className="text-[28px] md:text-[48px] text-[#240D57] font-bold ">
        {formData.formData.eventName}
      </h1>
      <p className="text-[14px] md:text-[18px] font-light text-[#828282]">
        Hosted by{" "}
        <span className="font-bold">{formData.formData.hostName}</span>
      </p>
    </div>
  );
};

export default EventTitle;
