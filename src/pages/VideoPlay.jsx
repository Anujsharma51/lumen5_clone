import React, { useState } from "react";
import style from "../Styles/Style.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
const VideoPlay = (props) => {
  const [show, setShow] = useState(true);
  //   console.log("props:", props.value.show);
  return (
    <div className={style.innervideoDiv}>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          top: "30%",
          // bottom: "50%",
          left: "42%",
        }}
        className={style.playBTN}
      >
        {show === true ? (
          <AiOutlinePlayCircle className={style.playIcon} />
        ) : (
          ""
        )}
      </div>
      <div>
        <video
          onMouseEnter={(event) => {
            event.target.play();
            setShow(false);
          }}
          onMouseOut={(event) => {
            setShow(true);  
            event.target.pause();
          }}
          className={style.video}
        >
          <source src={props.value.el} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoPlay;
