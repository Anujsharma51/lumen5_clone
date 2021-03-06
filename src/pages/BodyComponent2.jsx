import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Style.module.css";
// BsDiscord;
import { BsDiscord } from "react-icons/bs";
const BodyComponent2 = () => {
  return (
    <div className={style.full2}>
      <div className={style.main2}>
        <div className={style.mainImageSection2}>
          <img
            className={style.mainImageSection_image2}
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
            alt=""
            srcSet=""
          />
        </div>

        <div className={style.mainTextSection2}>
          <BsDiscord
            style={{
              fontSize: "4rem",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              //   marginTop: "-20px",
            }}
          />
          <h3 className={style.heading2}>
            <b>
              Transform blog posts<br></br> into videos with A.I.
            </b>
          </h3>
          <div className={style.inner_first2}>
            <p className={style.description2}>
              Starting from a blank page is hard — and with Lumen5, you don’t
              have to. Our AI-powered technology helps you storyboard your
              ideas, fit your content to a layout, and find music and visuals
              that enhance your message.
            </p>

            <Link to="">Get started for free →</Link>
            <hr className={style.userUpper} />
          </div>
          <div className={style.userProfile}>
            <p>
              “Lumen5 has enabled us to create more videos and drive more
              traffic, while having more time to invest in other projects.”
            </p>
          </div>
          <div className={style.profile}>
            <div>
              <img
                style={{ width: "90%", borderRadius: "50%" }}
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <div className={style.innerUser}>
              <p>Drew Sykes, Social Media Director</p>
              <img
                className={style.img1}
                src="	https://storage.googleapis.com/lumen5-site-images/website-assets/logo-nc-red.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent2;
