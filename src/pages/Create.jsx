import { CreateForm } from "../components";

const Create = () => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-5">
      <div>
        <div className="font-bold text-[#240D57] text-[36px]  text-center leading-9">
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Event
          </span>
        </div>
        <p className="text-[#4F4F4F] font-light text-[16px] text-center mt-4 mx-7 mb-9">
          Fill in all fields to create the event
        </p>
      </div>
      <CreateForm />
    </div>
  );
};

export default Create;
