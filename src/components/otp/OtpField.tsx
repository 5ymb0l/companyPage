import { MuiOtpInput } from "mui-one-time-password-input";
import { FormHelperText, Typography } from "@mui/material";
import {otpNo} from "./otp"
type Props = {
  otp: string ;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  
}
export const OtpField = ({otp , setOtp} : Props) => {
 
  const handleChange = (newValue : any) => {
    setOtp(newValue)
  }
return (
  <div className="verifyDiv">
    <Typography
      sx={{
        width: "460px",
        height: "90px",
        left: "809px",
        top: "300px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "130px",
        display: "block",
        alignItems: "center",
        textAlign: "center",
        color: "#002F71",
      }}
    >
      <p>Verification code </p>{" "}
    </Typography>
    <FormHelperText
    sx={{
      width: "299px",
      height: "60px",
      left: "714px",
      top: "509px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      display: "block",
      alignItems: "center",
      textAlign: "center",
      color: "#002F71",
      opacity: 0.8,
      marginTop: '3px',
      marginRight: '0px',
      marginBottom: '40px',
      marginLeft: '80px'
    }}
    >
      <p>
        We have sent the code verification to your Mobile number
        </p>
      <p>+ 91 9967239635</p>
      
    </FormHelperText>

    <div className="otp">
      <MuiOtpInput
        TextFieldsProps={{ placeholder: "-" }}
        value={otp}
        length={6}
        onChange = {handleChange}
        
      />
    </div>
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


