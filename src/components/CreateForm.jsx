import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/formContext";

const CreateForm = () => {
  const { dispatch } = useContext(FormContext);
  const [formData, setFormData] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    subLocation: "",
  });

  const { eventName, hostName, startDate, endDate, location, subLocation } =
    formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_FORM", payload: { formData } });
    navigate("/event");
  };

  return (
    <section className="block mx-auto min-w-[350px] md:min-w-[500px]">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            Event Name
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={onChange}
            placeholder="Enter Event Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            Host Name
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
            id="hostName"
            name="hostName"
            value={hostName}
            onChange={onChange}
            placeholder="Enter Host Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            Start Date
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={onChange}
            placeholder="Ex: 18 August 6:00PM"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            End Date
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={onChange}
            placeholder="Ex: 18 August 6:00PM"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            Location
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-[#8456EC] focus:border-[#8456EC] w-full p-2.5 "
            id="location"
            name="location"
            value={location}
            onChange={onChange}
            placeholder="Ex: Street name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E0E0E0] ">
            Sub Location
          </label>
          <input
            type="text"
            className="block m-auto bg-[#F6F2FF] border border-[#CCB6FF] text-[#240D57] text-sm rounded-lg focus:ring-[#8456EC] focus:border-[#8456EC] w-full p-2.5 "
            id="subLocation"
            name="subLocation"
            value={subLocation}
            onChange={onChange}
            placeholder="Ex: Suburb, State, Postcode"
            required
          />
        </div>

        <button className="text-white font-bold text-[16px] rounded-xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8] py-3 w-full mb-4">
          Next
        </button>
      </form>
    </section>
  );
};

export default CreateForm;
