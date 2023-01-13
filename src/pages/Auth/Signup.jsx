import { useState } from "react";

import "./Auth.css";

import { useCaptcha } from "../../context";

import { getErrorMsg } from "../../utils";

import { Captcha, NotifyModal } from "../../components";

function Signup() {
  const { captchaText, userInputCaptcha, setUserInputCaptcha } = useCaptcha();

  // default user inputs
  const inputObj = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userInput, setUserInput] = useState(inputObj);

  const [view, setView] = useState({ password: false, confirmPassword: false });
  const [isError, setIsError] = useState(false);
  const [isViewModal, setIsViewModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalContent, setModalContent] = useState("");

  const { name, email, password, confirmPassword } = userInput;

  //set user input
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  // view or hide password btn handler
  const getToggleBtn = (type) => {
    return (
      <div
        className="auth__input-btn"
        onClick={() => setView((prev) => ({ ...prev, [type]: !prev[type] }))}
      >
        {view[type] ? "Hide" : "View"}
      </div>
    );
  };

  // handle form submit
  const clickHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setIsError(true);
      return;
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      setIsError(true);
      return;
    }

    if (password !== confirmPassword) {
      setIsViewModal(true);
      setModalContent("Opps! Password does not match.Try again");
      return;
    }

    if (captchaText.join("") !== userInputCaptcha) {
      setModalType("captcha");
      setIsViewModal(true);
      setModalContent("Invalid Captcha...");
      return;
    }

    // successful signup msg through modal
    setModalType("success");
    setIsViewModal(true);
    setModalContent("Signup Successfully.");
  };

  //handle modal btn click
  const modalClickHandler = () => {
    if (modalType === "captcha") {
      setUserInputCaptcha("");
    } else if (modalType === "success") {
      setUserInput(inputObj);
      setUserInputCaptcha("");
      setIsError(false);
    }
    setIsViewModal(false);
  };

  return (
    <div className="auth">
      {/* modal */}
      {isViewModal && (
        <NotifyModal
          content={modalContent}
          handleModalClick={modalClickHandler}
        />
      )}

      {/* form */}
      <form className="auth__form">
        <div className="auth__title">User Signup</div>

        <div className="auth__input-container">
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={(e) => changeHandler(e)}
            placeholder="Name"
            className={`auth__input ${
              isError && !name && "auth__input--error"
            }`}
          />
          {/* error msg */}
          {isError && getErrorMsg(userInput, "name")}
        </div>

        <div className="auth__input-container">
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={(e) => changeHandler(e)}
            placeholder="Email"
            className={`auth__input ${
              isError && !email && "auth__input--error"
            }`}
          />

          {/* error msg */}
          {isError && getErrorMsg(userInput, "email")}
        </div>

        <div className="auth__input-container">
          <input
            type={`${view.password ? "text" : "password"}`}
            name="password"
            value={userInput.password}
            onChange={(e) => changeHandler(e)}
            placeholder="Password"
            className={`auth__input ${
              isError &&
              (!password || password.length < 6) &&
              "auth__input--error"
            }`}
          />

          {/* error msg */}
          {isError && getErrorMsg(userInput, "password")}

          {/*  password toggle btn */}
          {getToggleBtn("password")}
        </div>

        <div className="auth__input-container">
          <input
            type={`${view.confirmPassword ? "text" : "password"}`}
            name="confirmPassword"
            value={userInput.confirmPassword}
            onChange={(e) => changeHandler(e)}
            placeholder="Confirm Password"
            className={`auth__input ${
              isError &&
              (!confirmPassword || confirmPassword.length < 6) &&
              "auth__input--error"
            }`}
          />

          {/* confirm password toggle btn */}
          {getToggleBtn("confirmPassword")}

          {/* error msg */}
          {isError && getErrorMsg(userInput, "confirmPassword")}
        </div>

        {/* captcha section */}
        <Captcha />

        <button className="auth__btn" onClick={clickHandler}>
          Signup
        </button>

        <div className="auth__link-container">
          Already have an account?
          <span className="auth__link">Sign In</span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
