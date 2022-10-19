const EventImage = () => {
  return (
    <div>
      <img src="event-image.png" alt="event" className="m-auto md:hidden" />
      <img
        src="event-image-md.png"
        alt="event"
        className="hidden m-auto mt-[88px] md:block"
      />
    </div>
  );
};

export default EventImage;
