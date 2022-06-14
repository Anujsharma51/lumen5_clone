import React, { useState } from "react";
import { play } from "../utily/VideoPlay";
import style from "../Styles/Style.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import VideoPlay from "../pages/VideoPlay";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const VideosSection = () => {
  return (
    <>
      <div className={style.videoUpperText}>
        <span>
          <h1>
            <b>Captivating video templates</b>
          </h1>
          <p>Drag and drop. No experience required.</p>
        </span>
      </div>
      <div className={style.videoDiv}>
        {play.map((el) => {
          return <VideoPlay value={{ el }} />;
        })}
      </div>
    </>
  );
};

export default VideosSection;
