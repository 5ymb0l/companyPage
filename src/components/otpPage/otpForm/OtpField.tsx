import { Button } from "@mui/material";
import { useState } from "react";
import { VerifyText } from "../verifyCode/verifyText";
import { OtpHelperText } from "../helperText/HelperText";
import { MobileNo } from "../mobileNo/MobileNo";
import { OtpNo } from "../otpNo/OtpNo";
import { ButtonTwo } from "../Button/ButtonTwo";
import Dashboard from "../../responsibility/dashboard/Dashboard";
// import Dashboard from "../responsibility/dashboard/Dashboard";
// import {
//   Link as Dashboard
// } from "react-router-dom";
interface Props {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

// interface Istate {
//   isLogin: boolean;
// }

export const OtpField: React.FC<Props> = ({ otp, setOtp }) => {
  // const [state, SetState] = useState<Istate>({
  //   isLogin: false,
  // });

  // const handleClick = ()=>{
  //   SetState ({isLogin :true});
  // }
  return (
    <div>
      {/* {state.isLogin && state.isLogin ? (
        <Dashboard />) : ( */}

        
    <div
      className="verifyDiv"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <VerifyText />
      <div
        className="otpHelpertext"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OtpHelperText />
      </div>
      <div
                  className="input"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px"
                  }}
                >
      <div
        className="mobileNo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MobileNo />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="otp"
      > <div>

        <OtpNo otp={otp} setOtp={setOtp} />

      </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <ButtonTwo />
      </div>
      </div>
    </div>
        {/* )} */}
</div>
  );
};

// export const OtpField: React.FC<{
//     otp: string ;
//     setOtp: React.Dispatch<React.SetStateAction<string>>;
// }> = ({otp, setOtp }): JSX.Element => {

// return (
//     <div className="verifyDiv">
//       <Typography
//         sx={{
//           width: "460px",
//           height: "90px",
//           left: "809px",
//           top: "300px",
//           fontFamily: "Poppins",
//           fontStyle: "normal",
//           fontWeight: 600,
//           fontSize: "30px",
//           lineHeight: "130px",
//           display: "block",
//           alignItems: "center",
//           textAlign: "center",
//           color: "#002F71",
//         }}
//       >
//         <p>Verification code </p>{" "}
//       </Typography>
//       <FormHelperText
//       sx={{
//         width: "299px",
//         height: "60px",
//         left: "714px",
//         top: "509px",
//         fontFamily: "Poppins",
//         fontStyle: "normal",
//         fontWeight: 400,
//         fontSize: "14px",
//         lineHeight: "20px",
//         display: "block",
//         alignItems: "center",
//         textAlign: "center",
//         color: "#002F71",
//         opacity: 0.8,
//         marginTop: '3px',
//         marginRight: '0px',
//         marginBottom: '3px',
//         marginLeft: '80px'
//       }}
//       >
//         <p>
//           We have sent the code verification to your Mobile number
//         </p>
//       </FormHelperText>

//       <div className="otp">
//         <MuiOtpInput
//           sx={{}}
//           TextFieldsProps={{ placeholder: "-" }}
//           value={otp}
//           length={6}

//         />
//       </div>
//     </div>
//   );
// };

// import { MuiOtpInput } from "mui-one-time-password-input";
// import { FC } from "react";
// import { FormHelperText, Typography } from "@mui/material";
// import "./otp"
// import {otpNo} from "./otp"

// export const OtpField: FC<{

//     otpPin ?: string ;
//     setOtpPin : React.Dispatch<React.SetStateAction<otpNo>>;
// }> = ({otpPin , setOtpPin }): JSX.Element => {

// const handleChange = (value: otpNo) => {
//     setOtpPin(value);
//   };

//   return (
//     <div className="verifyDiv">
//       <Typography
//         sx={{
//           width: "460px",
//           height: "90px",
//           left: "809px",
//           top: "300px",
//           fontFamily: "Poppins",
//           fontStyle: "normal",
//           fontWeight: 600,
//           fontSize: "30px",
//           lineHeight: "130px",
//           display: "block",
//           alignItems: "center",
//           textAlign: "center",
//           color: "#002F71",
//         }}
//       >
//         <p>Verification code </p>{" "}
//       </Typography>
//       <FormHelperText
//       sx={{
//         width: "299px",
//         height: "60px",
//         left: "714px",
//         top: "509px",
//         fontFamily: "Poppins",
//         fontStyle: "normal",
//         fontWeight: 400,
//         fontSize: "14px",
//         lineHeight: "20px",
//         display: "block",
//         alignItems: "center",
//         textAlign: "center",
//         color: "#002F71",
//         opacity: 0.8,
//         marginTop: '3px',
//         marginRight: '0px',
//         marginBottom: '3px',
//         marginLeft: '80px'
//       }}
//       >
//         <p>
//           We have sent the code verification to your Mobile number
//         </p>
//       </FormHelperText>

//       <div className="otp">
//         <MuiOtpInput
//           sx={{}}
//           TextFieldsProps={{ placeholder: "-" }}
//           value={otpPin}
//           length={6}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };
