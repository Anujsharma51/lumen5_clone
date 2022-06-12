import React from "react";
import style from "../Styles/Style.module.css";
const Body = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container_first_div}>
          <span>
            Video maker built to
            <br></br>supercharge your <br></br> content strategy
          </span>
          <span>
            Easily make videos for <br></br>content marketing<br></br> thought
            leadership, and <br></br>brand awareness<br></br> in a snap.
          </span>
        </div>
        <div className={style.container_seound_div}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};

export default Body;
