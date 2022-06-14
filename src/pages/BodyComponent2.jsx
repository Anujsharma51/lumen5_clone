import React from "react";
import style from "../Styles/Style.module.css";
const BodyComponent2 = () => {
  return (
    <div className={style.main}>
      <div className={style.mainImageSection}>
        <img
          className={style.mainImageSection_image}
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
          alt=""
          srcSet=""
        />
      </div>
      <div className={style.mainTextSection}>
        <div className={style.inner_first}>
          <h3 className={style.heading}>
            <b>Transform blog posts into videos with A.I.</b>
          </h3>
          <p className={style.description}>
            Starting from a blank page is hard — and with Lumen5, you don’t have
            to. Our AI-powered technology helps you storyboard your ideas, fit
            your content to a layout, and find music and visuals that enhance
            your message.
          </p>
          <button id={style.sign_up_button} className={style.pointer1}>
            Sign up free
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent2;
