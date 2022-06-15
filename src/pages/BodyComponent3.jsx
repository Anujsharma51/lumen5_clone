import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Style.module.css";
import { BsDiscord } from "react-icons/bs";
const BodyComponent = (props) => {
  //   console.log("props:", props.value);
  return (
    <>
      <div
        className={style.main}
        style={{ backgroundColor: "white", marginTop: "4%" }}
      >
        <div className={style.mainTextSection2} style={{ marginLeft: "9rem" }}>
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
            <b>Content library with millions of stock photos & videos</b>
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
              “We promoted our downloadable study on top PPC skills for 2019 on
              social media using a short video created in Lumen5 in just 30
              minutes, and decreased cost per download by 5x!”
            </p>
          </div>
          <div className={style.profile}>
            <div>
              <img
                style={{ width: "90%", borderRadius: "50%" }}
                src="	https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <div className={style.innerUser}>
              <p>
                <b>Julia Olennikova,</b>, Product Marketing<br></br>
                Manager
              </p>
              <img
                className={style.img1}
                src="			https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "15%" }} className={style.mainImageSection}>
          <img
            className={style.mainImageSection_image}
            src={props.value}
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
