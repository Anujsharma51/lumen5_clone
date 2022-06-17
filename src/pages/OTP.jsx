// import React, { useState } from "react";
// import OtpInput from "react-otp-input";

// import ReactPhoneInput from "react-phone-input-2";

// import style from "../Styles/signup.module.css";
// import "react-phone-input-2/dist/style.css";

// function OTP() {
//   const [state, setState] = useState({
//     phone: "",
//     otp: "",
//   });

//   const setValue = (fieldName) => (evt) =>
//     setState({ [fieldName]: evt.target.value });

//   const handleChange = (otp) => setState({ otp });

//   return (
//     <div className="py-12 h-screen bg-gray-100 m-z ">
//       <div className="max-w-lg mx-auto">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
//           <div className="text-center">
//             <h1 className="font-bold text-gray-800 text-2xl">
//               Please Verify your account
//             </h1>
//           </div>
//           <div className="block  w-100">
//             {/* <div className="my-4">
//               <label
//                 className="block text-gray-700 text-sm font-medium mb-2 text-lg text-center"
//                 htmlFor="phone"
//               >
//                 Enter your 10 digit number
//               </label>
//               <input
//                 className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//                 type="number"
//                 id="phone"
//                 onChange={setValue("phone")}
//                 value={state.firstName}
//                 placeholder="+866*****"
//               />
//             </div> */}
//             <div className="my-4">
//               <label
//                 className="block text-gray-700 text-sm font-medium mb-2 text-lg text-center"
//                 htmlFor="phone"
//               >
//                 Enter your 10 digit number
//               </label>
//               <ReactPhoneInput
//                 className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//                 defaultCountry="pl"
//                 containerStyle={{ width: "100%" }}
//                 searchClass="search-class"
//                 searchStyle={{
//                   margin: "0px",

//                   width: "96%",
//                   height: "30px",
//                 }}
//                 enableSearchField
//                 disableSearchIcon
//               />
//             </div>
//             <div className="my-4">
//               <h1
//                 className="block text-gray-700 text-sm font-medium mb-2  text-lg text-center"
//                 htmlFor="username"
//               >
//                 Enter Your OTP here
//               </h1>
//               <OtpInput
//                 value={state.otp}
//                 className="otp-input bg-white mx-2 text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg  block w-full appearance-none leading-normal"
//                 onChange={handleChange}
//                 numInputs={4}
//                 separator={<span></span>}
//               />
//             </div>
//             <div className="m-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2   text-center"
//                 htmlFor="username"
//               >
//                 <span>
//                   Click here ?&nbsp;
//                   <a href="!#" className="text-blue-600">
//                     Resend OTP
//                   </a>
//                 </span>
//               </label>
//             </div>

//             <button className="btn-block w-full px-4 py-3 py-1 text-lg text-gray-100 rounded-lg font-semibold bg-green-700 hover:text-white hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default OTP;
import React from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/dashboard");
  }, 3000);
  // const alldone = () => {};
  return (
    <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
      <div className={"wrapperAlert"}>
        <div className={"contentAlert"}>
          <div className={"topHalf"}>
            <p>
              <svg viewBox="0 0 512 512" width="100" title="check-circle">
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
            </p>
            <h1>Congratulations</h1>
          </div>

          <div className="bottomHalf">
            <p>
              Well Done!, you actually managed to accomplish something today...
            </p>

            {/* <button id="alertMO" onClick={alldone}>
              Moving On
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
