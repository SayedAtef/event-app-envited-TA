import { EventComponent } from "./index";
import { FaCalendar, FaArrowRight, FaLocationArrow } from "react-icons/fa";

const EventList = () => {
  return (
    <div className="mt-8">
      <EventComponent
        Icon={FaCalendar}
        title="18 August 6:00PM"
        subTitle="to 19 August 1:00PM UTC +10"
        Arrow={FaArrowRight}
      />
      <EventComponent
        Icon={FaLocationArrow}
        title="Street name"
        subTitle="Suburb, State, Postcode"
        Arrow={FaArrowRight}
      />
    </div>
  );
};

export default EventList;
