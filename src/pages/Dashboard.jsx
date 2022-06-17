import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "../Styles/signup.module.css";
import { videos } from "../utily/videoTamplate";

import DashboardVideo from "./DashboardVideo";

const Dashboard = () => {
  // const name=
  const name = useSelector((state) => state.name.name);
  console.log("name:", name);

  const [show, setShow] = useState(false);
  const [data, setData] = useState(videos);
  const navigate = useNavigate();
  const GotoUpgrade = () => {
    navigate("/upgrade");
  };
  const getName = localStorage.getItem("name");

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoDiv}>
          <img
            src="	https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className={styles.RightDiv}>
          <input type="text" className={styles.inp} />
          <button className={styles.upgrade}>UPGRADE</button>
          <div></div>
          <div
            style={{
              //   border: "1px solid  #24282f",
              width: "60px",
              borderRadius: "50%",
              textAlign: "center",
              marginLeft: "4px",
              display: "flex",
              justifyContent: "center",
              lineHeight: "2",
              backgroundColor: "#dddee6",
            }}
          >
            {name === "" ? getName[0] : name[0]}
          </div>
        </div>
      </div>
      <div className={styles.bodydivs}>
        <div className={styles.bodyLeftDiv}>
          <div>
            <div style={{ marginTop: "-16px" }}>
              <p>All video</p>
            </div>
            <div>
              <p>Instant video</p>
            </div>
            <div>
              <p>Brand kits</p>
            </div>
            <div>
              <p>Saved templateds</p>
            </div>
            <div>
              <p>Analytics</p>
            </div>

            <br></br>
            <br></br>
            <div>
              <span>Projuct</span>
            </div>
          </div>
        </div>

        <div className={styles.bodyRightDiv}>
          <div className={styles.bodyRightDivFirst}>
            <span>All Videos</span>
            <select className={styles.bodyRightDivFirstOption}>
              <option value>Last modify</option>
              <option value>Last Create</option>
              <option value>Alphabetically</option>
            </select>
          </div>

          <div className={styles.rightDivItem}>
            <div className={styles.block}>
              <div className={styles.inblock}>
                <div
                  onClick={GotoUpgrade}
                  style={{
                    textAlign: "center",
                    height: "200px",
                    width: "300px",
                    backgroundColor: "#5846f6",
                    borderRadius: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "40px",
                  }}
                >
                  New Video +
                </div>
                {data.map((el, i) => {
                  return (
                    <DashboardVideo key={i} value={{ setShow, show, el }} />
                  );
                })}
                {/* <div>
                  <video
                    poster="https://storage.googleapis.com/lumen5-site-images/Prev_Classic_2.png"
                    src="https://storage.googleapis.com/lumen5-site-images/Prev_Classic_2_v2.mp4"
                  ></video>
                </div>
                <div>
                  <video
                    poster="https://storage.googleapis.com/lumen5-site-images/Prev_Underline_bar.png"
                    src="https://storage.googleapis.com/lumen5-site-images/Prev_Underline_bar_v2.mp4"
                  ></video>
                </div>
                <div>
                  <video
                    poster="https://storage.googleapis.com/lumen5-site-images/Prev_Sleek_2b_v3.png"
                    src="https://storage.googleapis.com/lumen5-site-images/Prev_Sleek_2b_v3.mp4"
                  ></video>
                </div>
                <div>
                  <video
                    poster="https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2b.png"
                    src="https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2b_v2.mp4"
                  ></video>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
