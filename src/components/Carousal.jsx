import React, { useState } from "react";
import { img } from "../utily/1";
import style from "../Styles/Style.module.css";
// MdNavigateNext;
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Carousal = () => {
  //   let i = 0;

  const [num, setNumber] = useState(0);
  console.log(num);

  return (
    <>
      <div className={style.carousal}>
        <button
          className={style.carousalBTN1}
          onClick={() => {
            if (0 < num) {
              setNumber(num - 1);
            } else {
              setNumber(img.length - 1);
            }
          }}
        >
          <GrFormPrevious />
        </button>
        <img id={style.slide} src={img[num]} alt="" srcSet="" />
        <button
          className={style.carousalBTN2}
          onClick={() => {
            if (img.length - 1 > num) {
              setNumber(num + 1);
            } else {
              setNumber(0);
            }
          }}
        >
          <MdNavigateNext />
        </button>
      </div>
    </>
  );
};

export default Carousal;
