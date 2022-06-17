import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/signup.module.css";
const NewOTP = () => {
  const navigate = useNavigate();
  const donePage = (e) => {
    e.preventDefault();
    navigate("/successfully");
  };
  return (
    <form onSubmit={donePage}>
      <div className={styles.mainOTp}>
        <div className={styles.innerOTP}>Enter verification code</div>

        <div className={styles.inpDiv}>
          <input
            style={{ mozAppearance: "textfield" }}
            type="text"
            name=""
            maxlength="1"
            required
            className={styles.otpinp}
          />
          <input
            type="text"
            name=""
            required
            maxlength="1"
            className={styles.otpinp}
          />
          <input type="text" name="" required className={styles.otpinp} />
          <input
            type="text"
            name=""
            required
            maxlength="1"
            className={styles.otpinp}
          />
        </div>
        <div className={styles.btnOTPdiv}>
          <input
            type="submit"
            name=""
            maxlength="1"
            className={styles.otpbtn}
          ></input>
        </div>
      </div>
    </form>
  );
};

export default NewOTP;
