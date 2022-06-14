import React from "react";
import style from "../Styles/Style.module.css";

const BodyComponent = () => {
  return (
    <>
      <div className={style.main}>
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
            <button id={style.sign_up_button} className={style.pointer1}>
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
