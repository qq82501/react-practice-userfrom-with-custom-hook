import useInput from "../hooks/use-Input";

const BasicForm = (props) => {
  const nameValidator = function (name) {
    return name.trim() !== "";
  };

  const emailValidator = function (email) {
    return email.trim().includes("@") && email.trim() !== "";
  };
  const {
    typedInput: typedFirstName,
    isTypedInputValid: isTypedFirstNameValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useInput(nameValidator);

  const {
    typedInput: typedLastName,
    isTypedInputValid: isTypedLastNameValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useInput(nameValidator);
  const {
    typedInput: typedEmail,
    isTypedInputValid: isTypedEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput(emailValidator);

  const isFormValid =
    isTypedFirstNameValid && isTypedLastNameValid && isTypedEmailValid;

  const submitHandler = function (e) {
    e.preventDefault();

    if (!isFormValid) return;
    console.log(typedFirstName, typedLastName, typedEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError && "invalid"}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={typedFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">input can not be empty</p>
          )}
        </div>
        <div className={`form-control ${lastNameHasError && "invalid"}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={typedLastName}
          />
          {lastNameHasError && (
            <p className="error-text">input can not be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={typedEmail}
        />
        {emailHasError && (
          <p className="error-text">
            input can not be empty and must include "@"
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
