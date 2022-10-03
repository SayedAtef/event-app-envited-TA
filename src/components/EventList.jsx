import { useContext } from "react";
import { EventComponent } from "./index";
import { FaCalendar, FaArrowRight, FaLocationArrow } from "react-icons/fa";
import FormContext from "../context/formContext";

const EventList = () => {
  const { formData } = useContext(FormContext);
  return (
    <div className="mt-8">
      <EventComponent
        Icon={FaCalendar}
        title={formData ? formData.formData.startDate : "18 August 6:00PM"}
        subTitle={
          formData ? formData.formData.endDate : "to 19 August 1:00PM UTC +10"
        }
        Arrow={FaArrowRight}
      />
      <EventComponent
        Icon={FaLocationArrow}
        title={formData ? formData.formData.location : "Street name"}
        subTitle={
          formData ? formData.formData.subLocation : "Suburb, State, Postcode"
        }
        Arrow={FaArrowRight}
      />
    </div>
  );
};

export default EventList;
