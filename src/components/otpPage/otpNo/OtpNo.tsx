import React from 'react'
import { MuiOtpInput } from "mui-one-time-password-input";
import "../index.ts/Otp.css"

type Props = {
    otp: string;
    setOtp: React.Dispatch<React.SetStateAction<string>>;
  };
export const OtpNo = ({otp , setOtp} : Props) => {
    const handleChange = (newValue: any) => {
        setOtp(newValue);
      };
  return (
    <div style={{
        width: "100%",
        marginTop: "10px",
     }}>

     <MuiOtpInput value={otp} length={6} onChange={handleChange} />

     </div>
  )
}

