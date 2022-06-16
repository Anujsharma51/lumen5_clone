import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/signup.module.css";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { useDispatch } from "react-redux";

const companysLogo = [
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png",
];

export const Signin = () => {
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleType, setToggleType] = useState(false);

  const [error, sertError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSign, setSign] = useState(false);
  const handleSignin = () => {
    fetch(`http://localhost:8080/user?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({
            type: "go",
            payload: data[0],
          });
          setSign(true);
        }
        // console.log("data:", data)
        // data.filter(
        //   (el) =>
        //     el.email === email && el.password === password
        //       ? dispatch({
        //           type: "go",
        //           payload: { email: el.email, name: el.name },
        //         })
        //       : ""
        // setSign(true);

        // else {
        //   sertError("Your email or password was incorrect");
        // }
        // }

        //   el.email === email && el.password === password
        //     ? dispatch({
        //         type: "go",
        //         payload: { email: el.email, name: el.name },
        //       })
        //     : ""
        // )
      )
      .catch((err) => {
        sertError("Your email or password was incorrect");
      });
  };
  return (
    <>
      {isSign === true ? navigate("/dashboard") : ""}
      <div className={styles.sidenav}>
        <div style={{ height: "125px" }}>
          <img
            width="140px"
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
            alt=""
          />
        </div>

        <div className={styles.sidenavHeading}>
          Supercharge your content strategy
        </div>

        <div className={styles.sidenavPara}>Join 800,000+ brands creating</div>
        <div className={styles.sidenavPara}>videos with Lumen5</div>

        <div className={styles.sidenavGrid}>
          {companysLogo.map((el, idx) => {
            return (
              <div key={idx}>
                <img width="85px" src={el} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.afterSidenav}>
        <div className={styles.heading}>Welcome back</div>

        <div className={styles.formData}>
          <div>WORK EMAIL</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <span style={{ fontSize: "14px", color: "#ff4b38" }}>{error}</span>
          <div className={styles.passwordDivision}>
            <div>PASSWORD</div>
            <div
              className={styles.passwordEye}
              onClick={() => setToggleType(toggleType ? false : true)}
            >
              <div>{toggleType ? <BiShow /> : <GrHide />}</div>
              <div>{toggleType ? "Hide" : "Show"}</div>
            </div>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={toggleType ? "text" : "password"}
          />
        </div>

        <div>
          <button className={styles.handleSignUp} onClick={handleSignin}>
            Login
          </button>

          <div className={styles.hrDivision}>
            <hr></hr>
            <div>OR</div>
            <hr></hr>
          </div>

          <button className={styles.button2}>Login with Facebook</button>
          <button style={{ marginTop: "30px" }} className={styles.button3}>
            Log in via SSO
          </button>
        </div>

        <div className={styles.bottomLines}>
          Need a Lumen5 account? <Link to="/signUp">Create an account</Link>
        </div>

        <div className={styles.conclusionLine}>© 2022 Lumen5</div>
      </div>
    </>
  );
};
