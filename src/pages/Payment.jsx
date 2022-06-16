import React from "react";
import styles from "../Styles/signup.module.css";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div className={styles.onePage}>
      <div className={styles.mainPayments}>
        <div>
          <p>Subscribe to Starter - v2 (Annual)</p>
          <h1> US$708.00 per year</h1>
        </div>

        <div className={styles.pricingPayment}>
          <div>
            Starter - v2 (Annual)<br></br>Billed yearly
          </div>
          <div>US$708.00</div>
          <div>Subtotal</div>
          {/* <div style={{ border: "1px solid black" }}></div> */}
          <div>US$708.00</div>
          <div>Tax</div>
          <div>Us$0.00</div>
          <div>Total due today</div>
          <div>US$708.00</div>
        </div>
      </div>
      {/* <div className={styles.inputSection}>
        <div>
          <input type="text" name="" id={styles.firstinp} placeholder="Email" />
        </div>

        <div>
          <label>Card infomation</label>
          <br></br>
          <input type="number" name="" id="" />
          <div>
            <input type="number" name="" id="" placeholder="MM/YY" />
            <input type="number" name="" id="" placeholder="CVC" />
          </div>
          <div>
            <label>Name on card</label>
            <br></br>
            <input type="number" name="" id="" placeholder="CVC" />
          </div>
          <div>
            <label>Billing address</label>
            <br></br>
            
            <input type="number" name="" id="" placeholder="CVC" />
            <br></br>
            <Link to="">Enter address manually</Link>
          </div>

          <input type="submit" />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Payment;
