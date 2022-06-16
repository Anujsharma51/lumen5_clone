import React from "react";

const DashboardVideo = ({ value }) => {
  return (
    <div>
      <video
        onMouseEnter={(event) => {
          event.target.play();
          value.setShow(false);
        }}
        onMouseOut={(event) => {
          value.setShow(true);
          event.target.pause();
        }}
        poster={value.el.poster}
        src={value.el.video}
      ></video>
      1
    </div>
  );
};

export default DashboardVideo;
