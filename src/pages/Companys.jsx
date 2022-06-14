import React from "react";
import { companys } from "../utily/CompanysIamge";
import style from "../Styles/Style.module.css";

const Companys = () => {
  return (
    <>
      <p className={style.companyText}>
        Over 6 million videos created by thousands of businesses
      </p>
      <div className={style.company}>
        {companys.map((el, i) => {
          return (
            <div key={i}>
              <img src={el} alt="" srcSet="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Companys;
