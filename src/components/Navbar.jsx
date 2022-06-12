import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Style.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { drop1 } from "../utily/DropDown";
import { nanoid } from "nanoid";
const Navbar = () => {
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
    <div id={style.Navbar}>
      <div>
        <Link to="/">
          <img
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
              <Link to="">Create</Link>

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
                    <Link key={nanoid(3)} to="/">
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
              <Link to="/pricing">Pricing</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/pricing">Enterprise</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/pricing">Case studies</Link>
            </li>
          </div>
          <div className={style.icon_div}>
            <li>
              <Link to="/pricing">Learn</Link>
            </li>
            <RiArrowDropDownFill style={iconStyles} />
          </div>

          <button className={style.login_btn}>Login</button>
          <button className={style.sign_btn}>Sign up</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
