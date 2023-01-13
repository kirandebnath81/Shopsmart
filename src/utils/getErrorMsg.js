const getErrorMsg = (userInput, name) => {
  if (!userInput[name]) {
    return (
      <div className="auth__input-error-msg">This field is required !</div>
    );
  }

  if (name === "password" || name === "confirmPassword") {
    if (userInput[name].length < 6) {
      return (
        <div className="auth__input-error-msg">Min 6 characters required !</div>
      );
    }
  }
};

export default getErrorMsg;
