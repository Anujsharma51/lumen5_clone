import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Styles/Style.module.css";

const BodyComponent = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/signUp");
  };
  return (
    <>
      <div className={style.main} style={{ backgroundColor: "#fafafb" }}>
        <div className={style.mainTextSection}>
          <div className={style.inner_first}>
            <h3 className={style.heading}>
              <b>Video maker built to supercharge your content strategy</b>
            </h3>
            <p className={style.description}>
              Easily make videos for<br></br>
              <b>
                content marketing,<br></br> thought leadership,
              </b>{" "}
              and
              <b> brand awareness</b>
              in a snap.
            </p>
            <button
              id={style.sign_up_button}
              className={style.pointer1}
              onClick={home}
            >
              Sign up free
            </button>
          </div>
        </div>
        <div className={style.mainImageSection}>
          <img
            className={style.mainImageSection_image}
            src="	https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
