import React from "react";

const BodyComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          // marginRight: "3rem !important",
          border: "1px solid red",
          // marginLeft: "3rem",
          // marginTop: "3rem",
        }}
      >
        <div
          style={{
            width: "50%",
            marginLeft: "3rem",
            border: "1px solid black",
            padding: "2rem",
            textAlign: "center",
            fontFamily: "pop",
          }}
        >
          <h1>
            Video maker built to <br></br>supercharge your<br></br> content
            strategy
          </h1>
          
        </div>
        <div
          style={{
            width: "50%",
            marginRight: "3rem",
            border: "1px solid black",
            padding: "2rem",
          }}
        >
          <img
            style={{ width: "500px" }}
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
