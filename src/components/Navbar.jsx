import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Style.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { drop1 } from "../utily/DropDown";
import { nanoid } from "nanoid";
const Navbar = () => {
  const [navSize, setnavSize] = useState("100px");
  const [navColor, setnavColor] = useState("#fafafb");
  const [navimg, setnavImg] = useState("");
  const [logo, setlogo] = useState("");
  const [btn, setBtn] = useState("0.8571428571rem 0.8571428571rem");
  const listenScrollEvent = () => {
    window.scrollY > 3 ? setnavSize("70px") : setnavSize("90px");
    window.scrollY > 3 ? setnavImg("-7px") : setnavImg("0px");
    window.scrollY > 3
      ? setBtn("0.3571428571rem 0.3571428571rem")
      : setBtn("0.8571428571rem 0.8571428571rem");
    window.scrollY > 3 ? setlogo("-7px") : setlogo("0px");
    window.scrollY === 0 ? setnavColor("#fafafb") : setnavColor("white");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor]);

  const iconStyles = {
    fontSize: "24px",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  };

  const [create, setCreate] = useState(false);

  const handleOpen = () => {
    console.log(create);
    setCreate(!create);
  };
  return (
    <div
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all .5s",
      }}
      id={style.Navbar}
    >
      <div>
        <Link smooth spy to="/">
          <img
            style={{ marginTop: navimg }}
            className={style.bar_logo}
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
            alt=""
            srcSet=""
          />
        </Link>
      </div>
      <div className={style.right_bar}>
        <ul className={style.navbar_nar}>
          <div className={style.icon_div} onClick={handleOpen}>
            <li>
              <Link smooth spy to="">
                Create
              </Link>

              <div
                className={style.drop1}
                style={{
                  display: create === true ? "grid" : "none",
                  position: "absolute",
                  gridTemplateColumns: "auto auto",

                  border: "1px solid black",
                  columnGap: "50px",

                  textAlign: "left",
                }}
              >
                {drop1.map((el) => {
                  return (
                    <Link smooth spy key={nanoid(3)} to="/">
                      {el}
                    </Link>
                  );
                })}
              </div>
            </li>
            <RiArrowDropDownFill style={iconStyles} />
          </div>

          <div>
            <li>
              <Link smooth spy to="/pricing">
                Pricing
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link smooth spy to="/pricing">
                Enterprise
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link smooth spy to="/pricing">
                Case studies
              </Link>
            </li>
          </div>
          <div className={style.icon_div}>
            <li>
              <Link smooth spy to="/pricing">
                Learn
              </Link>
            </li>
            <RiArrowDropDownFill style={iconStyles} />
          </div>
          <Link to="signIN">
            <button
              style={{ marginTop: logo, padding: btn }}
              className={style.login_btn}
            >
              Login
            </button>
          </Link>
          <Link to="/signUp">
            <button
              style={{ marginTop: logo, padding: btn }}
              className={style.sign_btn}
            >
              Sign up
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
