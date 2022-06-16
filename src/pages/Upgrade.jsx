import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
const Upgrade = () => {
  var priceList = [
    {
      name1: "Community",
      name2: "For casual video enthusiasts",
      name3: "$0",
      name4: "for even free",
      name5: "Current plan",
    },
    {
      name1: "Starter",
      name2: "For individual content creators",
      name3: "$59 USD",
      name4: "per month, billed yearly",
      name5: "Upgrade",
    },
    {
      name1: "Professional",
      name2: "For professional video storytellers",
      name3: "$149 USD",
      name4: "per month, billed yearly",
      name5: "Upgrade",
    },
    {
      name1: "Enterprise",
      name2: "For large-scale video teams",
      name3: ".",
      name4: "Custom",
      name5: "Upgrade",
    },
  ];
  //   const [select, setSelect] = useState("white");
  const getName = localStorage.getItem("name");
  const name = useSelector((state) => state.name.name);
  var navigate = useNavigate();
  const GoToPayment = () => {
    navigate("/payment");
  };
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
          {/* <input type="text" className={styles.inp} /> */}
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

      <div className={styles.upgradeTop}>
        <h3>PRICING</h3>
        <h1>Plans for your video content creation </h1>
        <h1>strategy</h1>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "50rem",
            objectFit: "fill",
            width: "20%",
            margin: "auto",
          }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "10%",
              width: "50%",
            }}
          >
            <p>Bill monthly</p>
          </div>
          <div
            style={{
              padding: "10px",
              // border-radius:  !important;
              borderRadius: "50rem",
              backgroundColor: "#48505e",
              height: "100%",
              width: "40%",
              color: "white",
            }}
          >
            <p>Bill Yearly</p>
          </div>
        </div>
      </div>
      {/* ///////////////////// */}
      <div>
        <div className={styles.priceMAin}>
          {priceList.map((el) => {
            return (
              <div className={styles.Innerprice}>
                <div>
                  <h5>{el.name1}</h5>
                  <p>{el.name2}</p>
                </div>
                <div>
                  <h1>{el.name3}</h1>
                  <p>{el.name4}</p>
                </div>
                <div>
                  <button onClick={GoToPayment}>{el.name5}</button>
                </div>
              </div>
            );
          })}
          {/* <div>
          <h5>Community</h5>
          <p>For casual video enthusiasts</p>
        </div>
        <div>
          <h1>$0</h1>
          <p>for even free</p>
        </div>

        <div>
          <button>Current plan</button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Upgrade;
//  <div className={styles.pricingtable}>
//         <div className={styles.pricingcard}>
//           <div className={styles.price}>
//             {/* <sup>$</sup>15<span>/MO</span> */}
//             <b>Community</b>
//             <p>For Casual video enthusiasts</p>
//           </div>
//           <ul>
// <li>
//   <strong>3</strong> Websites
// </li>
