const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
