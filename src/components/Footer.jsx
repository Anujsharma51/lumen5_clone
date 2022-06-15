import React from "react";
import style from "../Styles/Style.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.mainFooter}>
        <div className={style.footerDive1}>
          <div>
            <img
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <p>
              Lumen5 combines powerful A.I. with a simple drag-and-drop
              interface to help you create professional video content in
              minutes.
            </p>
          </div>
        </div>
        <div className={style.footerDive2}>
          <div>
            <p>EXPLORE </p>
            <p>About</p>
            <p> Features Careers</p>
            <p> Careers</p>
            <p>LinkedIn</p>
            <p> Support</p>
            <p>Community group</p>
          </div>
          <div>
            <p>VIDEO TOOLS </p>
            <p> Add Text to Video</p>
            <p> Cut Video</p>
            <p> Merge Video</p>
            <p>LinkedIn</p>
            <p> Compress Video</p>
            <p>Resize Video See all</p>
          </div>
          <div>
            <p>VIDEO CREATORS </p>
            <p> Video Editor</p>
            <p> Photo Video Maker</p>
            <p> Facebook Video Maker</p>
            <p>YouTube Intro Maker</p>
            <p> Instagram Video Maker</p>
            <p>See all</p>
          </div>
        </div>
      </div>
      <div className={style.footerEnd}>
        <div>Copyright © 2022 Lumen5</div>
        <div>Terms of Use & Privacy Policy</div>
      </div>
    </>
  );
};

export default Footer;
