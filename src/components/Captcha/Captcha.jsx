import { useEffect, useState } from "react";

import "./Captcha.css";

import { useCaptcha } from "../../context";

const Captcha = () => {
  const { captchaText, setCaptchaText, userInputCaptcha, setUserInputCaptcha } =
    useCaptcha();

  //using a count state for reseting captcha
  const [resetCaptcha, setResetCaptcha] = useState(0);

  useEffect(() => {
    generateCaptcha(setCaptchaText);
  }, [resetCaptcha, setCaptchaText]);

  //generating captcha text
  const generateCaptcha = (setCaptchaText) => {
    //random characters
    const randomChars =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    const captcha = [];
    // Generate captcha of 5 random character
    for (let i = 0; i < 5; i++) {
      let random = Math.round(Math.random() * randomChars.length);
      captcha.push(randomChars.charAt(random));
    }

    setCaptchaText(captcha);
  };

  return (
    <div className="captcha__wrapper">
      <div className="captcha__text-container">
        <div className="captcha__text">
          {captchaText?.map((char, i) => (
            <span key={i} className="captcha__char">
              {char}
            </span>
          ))}
        </div>

        <div
          className="captcha__reset-btn"
          onClick={() => setResetCaptcha((prev) => prev + 1)}
        >
          Reset
        </div>
      </div>
      <div className="captcha__input-container">
        <input
          type="text"
          placeholder="Captcha text here.."
          className="auth__input"
          value={userInputCaptcha}
          onChange={(e) => setUserInputCaptcha(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Captcha;
