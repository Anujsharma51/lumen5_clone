import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/signup.module.css";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const companysLogo = [
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png",
];

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleType, setToggleType] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        document.title =
          "Lumen5 - Video Maker | Create Videos Online in Minutes";
        navigate("/signIn");
      });
  };
  return (
    <>
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
        <div className={styles.heading}>Get started with a free account</div>

        <div className={styles.formData}>
          <div>FULL NAME</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <div>WORK EMAIL</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
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

        <div className={styles.afterPassword}>
          <div>
            <div>
              <span>•</span> One lowercase character
            </div>
            <div>
              <span>•</span> One uppercase character
            </div>
          </div>
          <div>
            <div>
              <span>•</span> 8 characters minimum
            </div>
            <div>
              <span>•</span> Contains a number or symbol
            </div>
          </div>
        </div>

        <div>
          <button className={styles.handleSignUp} onClick={handleSignUp}>
            Create account
          </button>

          <div className={styles.hrDivision}>
            <hr></hr>
            <div>OR</div>
            <hr></hr>
          </div>

          <button className={styles.button2}>Sign up with Facebook</button>
        </div>

        <div className={styles.bottomLines}>
          Already have a Lumen5 account? <a href="/signin">Log in</a>
        </div>

        <div className={styles.conclusionLine}>
          By clicking “Create account” I agree to Lumen5’s
          <a href="https://lumen5.com/terms/">Terms of Use</a> and
          <a
            href="https://lumen5.com/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </>
  );
};
