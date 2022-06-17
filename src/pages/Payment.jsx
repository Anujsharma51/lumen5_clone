import React from "react";
import style from "../Styles/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const Done = () => {
    navigate("/paymentVerify");
  };
  // const state= useSelector((state)=>state.email)
  return (
    <>
      <div className={style.main_bx}>
        {/* --------------left side box--------------- */}

        <div className={style.leftMain_Bx}>
          <div style={style.l_Logo_Bx}>
            <img
              className={style.pic}
              src="https://d1wqzb5bdbcre6.cloudfront.net/8c362dcde478842886a67b93643f08fd88d3b4242eb0c0e66bafb9c755e1745e/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878515756476445784961305979546c6c6e65475a6b66475a6662476c325a56393265465a43553246745a304e694e33425265565a4a54573931556d78694d6e593030336b647a76444754"
              alt=""
            />
          </div>
          <div className={style.head1}>
            <p className={style.topStyle}>Subscribe to Starter - v2 (Annual)</p>
            <p className={style.clr}>
              $708.00 <span className={style.span1}>per year</span>{" "}
            </p>
          </div>
          <div className={style.opt}>
            <div className={style.opt1}>
              <span className={style.span2}>Starter - v2 (Annual)</span>
              <span className={style.span2}>$708.00</span>
            </div>
            <span style={{ fontSize: "12px" }}>Billed yearly</span>
          </div>

          <div>
            <div className={style.opt1}>
              <span className={style.span2}>Subtotal</span>
              <span className={style.span2}>$708.00</span>
            </div>
            <hr style={{ marginTop: "15px", marginBottom: "15px" }} />

            <div className={style.opt1}>
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <hr style={{ marginTop: "15px", marginBottom: "15px" }} />

            <div className={style.opt1}>
              <span className={style.span2}>Total due today</span>
              <span className={style.span2}>$708.00</span>
            </div>
          </div>
        </div>

        <p className={style.Pstyles}></p>

        {/* <-----------------right side box-----------------> */}

        <div className={style.rightMain_Bx}>
          <div className={style.span2 + " " + style.margin}>Pay with card</div>
          <div className={style.emailSet_Bx + " " + style.margin}>
            <div className={style.emailSetDiv}>
              <div style={{ width: "100px" }}>Email</div>
              {/* <div className={style.clrBlck}>Jhon@gmail.com</div> */}
            </div>
          </div>

          <form>
            <div className={style.mainInp_boxx}>
              <span>Card information</span>
              <div>
                <input
                  className={style.cardInpTop + " " + style.inpBx_size}
                  placeholder="1234 1234 1234 1234"
                />
              </div>
              <div className={style.inpflex_box}>
                <div>
                  <input
                    className={style.inpBx_size1 + " " + style.cardInpBtm}
                    placeholder="MM/YY"
                  />
                </div>

                <div>
                  <input
                    style={{
                      borderBottomLeftRadius: "none",
                      borderBottomRightRadius: "none",
                      // borderBottomLeft: "none",
                      borderLeft: "none",
                      width: "169px",
                      // boxShadow:
                      //   " 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)",
                    }}
                    className={style.inpBx_size1}
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>

            <div className={style.NameCard}>
              <span>Name on card</span>
              <input
                style={{ borderRadius: "07px" }}
                className={style.inpBx_size}
              />
            </div>

            {/* -------------Billing address------------ */}

            <div className={style.margin}>
              <div>
                <span>Billing address</span>
                <br />

                <select
                  className={style.slctStyle + " " + style.inpBx_size1}
                  style={{
                    height: "36px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <option>india</option>
                </select>

                <input
                  placeholder="Address"
                  style={{ borderBottomRightRadius: "6px" }}
                  className={style.inpBx_size + " " + style.cardInpBtm}
                />
              </div>

              <span className={style.uDropDwn}>Enter address manually</span>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <input type="checkbox" />
              <span style={{ color: "rgba(26,26,26,.9)" }}>
                Save my info for secure 1-click checkout
              </span>
              <div style={{ fontSize: "14px" }}>
                Pay faster on Lumen5 Technologies Ltd and thousands of sites.
              </div>
            </div>

            <div className={style.btn} onClick={Done}>
              <p className={style.btnC}>Subscribe</p>
            </div>

            <div
              style={{
                marginTop: "15px",
                fontSize: "13px",
                color: "#1A1A1A99",
              }}
            >
              By confirming your subscription, you allow Lumen5 Technologies Ltd
              to charge your card for this payment and future payments in{" "}
              <span style={{ marginLeft: "110px" }}>
                accordance with their terms.
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
