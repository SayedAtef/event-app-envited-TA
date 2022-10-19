import { EventImage, EventTitle, EventList } from "../components";

const Event = () => {
  return (
    <div className="bg-[#FBFAFF] xl:grid xl:grid-cols-2 justify-center">
      <div className="xl:hidden">
        <EventImage />
      </div>
      <div className="md:max-w-[593px] md:m-auto md:mt-9 xl:mt-48">
        <EventTitle />
        <EventList />
      </div>
      <div className="hidden xl:block">
        <EventImage />
      </div>
    </div>
  );
};

export default Event;
