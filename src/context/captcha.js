import { createContext, useContext, useState } from "react";

//context
const CaptchaContext = createContext();

//context provider
export const CaptchaProvider = ({ children }) => {
  const [captchaText, setCaptchaText] = useState([]);
  const [userInputCaptcha, setUserInputCaptcha] = useState("");
  return (
    <CaptchaContext.Provider
      value={{
        captchaText,
        setCaptchaText,
        userInputCaptcha,
        setUserInputCaptcha,
      }}
    >
      {children}
    </CaptchaContext.Provider>
  );
};

// consume context
export const useCaptcha = () => useContext(CaptchaContext);
