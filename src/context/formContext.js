import { createContext, useReducer } from "react";
import formReducer from "./formReducer";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialState = {
    formData: {
      eventName: "",
      hostName: "",
      startDate: "",
      endDate: "",
      location: "",
      subLocation: "",
    },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
