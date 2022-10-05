import { useRef } from "react";
import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const nameValidator = function (name) {
    return name.trim() !== "";
  };
  const emailValidator = function (email) {
    return email.trim() !== "" && email.trim().includes("@");
  };

  const {
    typedInput: typedNameInput,
    isTypedInputValid: isTypedNameInputValid,
    hasError: nameHasError,
    inputChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    resetInput: resetName,
  } = useInput(nameValidator);

  const {
    typedInput: typedEmailInput,
    isTypedInputValid: isTypedEmailInputValid,
    hasError: emailHasError,
    inputChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    resetInput: resetEmail,
  } = useInput(emailValidator);

  const isFormValid = isTypedNameInputValid && isTypedEmailInputValid;

  const submitHandler = function (e) {
    e.preventDefault();

    if (!isTypedNameInputValid) return;

    nameRef.current.focus();

    resetName();
    resetEmail();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={typedNameInput}
        />
        {nameHasError && (
          <p className="error-text">Input should not be empty.</p>
        )}
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={typedEmailInput}
        />
        {emailHasError && (
          <p className="error-text">
            Input should not be empty and must ininclude "@".
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
