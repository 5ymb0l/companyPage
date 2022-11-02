import { useState } from "react";
import { Button, Card } from "@mui/material";
import InputField from "../inputField/InputField";
import CountrySelect from "../country/CountrySelect";
import { TelInput } from "../phoneNo/MuiTelInput";
import "./Form.css";
import { CountryType } from "../Countries";
import { OtpField } from "../../otp/OtpField";

interface Istate {
  isLogin: boolean;
}
export const Form = () => {
  const [value, setValue] = useState<CountryType | undefined>();
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [state, SetState] = useState<Istate>({
    isLogin: false,
  });
  console.log(phone);
  const handleClick = (): void => {
    if (otp === "123456") {
      setOtp("");
    } else {
      setOtp("123456");
    }

    SetState({ isLogin: true });
  };
  return (
    <div
      className="card"
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <div className="whiteColor"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth : "50%",
          height : "65vh",
          backgroundColor: "white",
          boxShadow: "0px 17px 55px rgba(0, 46, 113, 0.25)",
          borderRadius: "10px"
      }}>
        <div style={ {
          display : "flex",
          alignItems : "center",
          justifyContent : "center",
          flexDirection : "column"
        }}>
          <h1 className="h1" style={{
           fontFamily: 'Poppins',
           color: "#002F71",
               fontSize: "40px"
    //        width: "500px",
    // height: "60px",
    // left: "809px",
    // top: "300px",
    // fontStyle: "normal",
    // fontWeight: 600

    // lineHeight: "60px",


          }}>Login</h1>
          <div className="main">
            {state.isLogin && state.isLogin ? (
              <OtpField otp={otp} setOtp={setOtp} />
            ) : (
              <div style={ {
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                flexDirection : "column"
              }}>
                 <InputField />
              
                 
                  <div  style={ {
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                flexDirection : "column"
              }}>
                <CountrySelect
                  value={value}
                  setValue={setValue}
                  setPhone={setPhone}
                  
                />
                {/* <TelInput phone={phone} setPhone={setPhone} /> */}
              </div>
                  
                 </div> 
            )}
          </div>
          <div>
            <Button
              onClick={handleClick}
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "18px",
                color: "#002F71",
              }}
              variant="outlined"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
