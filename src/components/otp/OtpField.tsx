import { MuiOtpInput } from "mui-one-time-password-input";
import { FormHelperText, Typography } from "@mui/material";
import "./Otp.css"
import { padding } from "@mui/system";
type Props = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
};
export const OtpField = ({ otp, setOtp }: Props) => {
  const handleChange = (newValue: any) => {
    setOtp(newValue);
  };
  return (
   
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
      <Typography  className="VerifyCode"
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "2em",
          lineHeight: "7vh",
          color: "#002F71",
          margin : 0
           // till here
          // width: "50%",
          // fontFamily: "Poppins",
          // fontStyle: "normal",
          // fontWeight: 600,
          // fontSize: "30px",
          // lineHeight: "130px",
          // display: "block",
          // alignItems: "center",
          // textAlign: "center",
          // color: "#002F71",
        }}
      >
      Verification code{" "}
      </Typography>
      {/* <div style={{
       margin : "5px"
      }}> */}
        {/* <div> */}
          <FormHelperText
            sx={
              {
        //         display : "flex",
        // justifyContent : "center",
        // alignItems : "center",
                // height: "7vh",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1em",
                lineHeight: "7vh",
                color: "#002F71",
                opacity: 0.8,
                 margin: 0,
           //till here
                 // paddingTop: "20px",
                // width: "299px",
                // height: "60px",
                // left: "714px",
                // top: "509px",
                // fontFamily: "Poppins",
                // fontStyle: "normal",
                // fontWeight: 400,
                // fontSize: "14px",
                // lineHeight: "20px",
                // display: "block",
                // alignItems: "center",
                // textAlign: "center",
                // color: "#002F71",
                // opacity: 0.8,
                // marginTop: "3px",
                // marginRight: "0px",
                // marginBottom: "40px",
                // marginLeft: "80px",
              }
            }
          >
            "We have sent the code verification to your Mobile number"
          </FormHelperText>
        {/* </div> */}

        
          <Typography
            sx={
               
            {
                // display : "flex",
              // justifyContent : "center",
              // alignItems : "center",
              // height: "7vh",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "18px",
              color: "#002F71",
              opacity: 0.8,
              margin: 0,
              //till here
                // height: "60px",
                // fontFamily: "Poppins",
                // fontStyle: "normal",
                // fontWeight: 500,
                // fontSize: "16px",
                // lineHeight: "18px",
                // color: "#002F71",
                // opacity: 0.8,
                // margin: 0,
                // paddingTop: "20px",
                // width: "299px",
                // height: "20px",
                // left: "714px",
                // top: "509px",
                // fontFamily: "Poppins",
                // fontStyle: "normal",
                // fontWeight: 400,
                // fontSize: "14px",
                // lineHeight: "20px",
                // display: "block",
                // alignItems: "center",
                // textAlign: "center",
                // color: "#002F71",
                // opacity: 0.8,
                // marginTop: "3px",
                // marginRight: "0px",
                // marginBottom: "40px",
                // marginLeft: "80px",
              }
            }
          >
            {" "}
            + 91 9967239635
          </Typography>
        
      {/* </div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width : "50%",
          paddingTop : "10px"
         }}
        className="otp"
      >
        <MuiOtpInput value={otp} length={6} onChange={handleChange} />
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
