import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, typedInput: action.payload };
    case "SET_INPUT_TOUCH":
      return { ...state, isTouched: true };
    case "RESET_INPUT":
      return { typedInput: "", isTouched: false };
    default:
      return initialState;
  }
};

const initialState = {
  typedInput: "",
  isTouched: false,
};

function useInput(validator) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isTypedInputValid = validator(state.typedInput);
  const hasError = !isTypedInputValid && state.isTouched;

  const inputChangeHandler = function (e) {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  };

  const inputBlurHandler = function () {
    dispatch({ type: "SET_INPUT_TOUCH" });
  };

  const resetInput = function () {
    dispatch({ type: "RESET_INPUT" });
  };

  return {
    typedInput: state.typedInput,
    isTypedInputValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
}

export default useInput;
