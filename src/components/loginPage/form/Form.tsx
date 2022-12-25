import { useState } from "react";
import InputField from "../inputField/InputField";
import CountrySelect from "../country/CountrySelect";
import { TelInput } from "../phoneNo/MuiTelInput";
import "./Form.css";
import { CountryType } from "../index.ts/Countries";
import { OtpField } from "../../otpPage/otpForm/OtpField";
import { LoginHeader } from "../loginHead/Header";
import HelperText from "../helperText/HelperText";
import { NextButton } from "../buttonNext/Button";
import { Link } from "react-router-dom";

// import {
//   Link as OtpField
// } from "react-router-dom";

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
  // const matches = useMediaQuery('(min-width:600px)');
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
        backgroundColor: "#E5E5E5",
      }}
    >
      <div
        className="whiteColor"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "422px",

          height: "500px",
          backgroundColor: "white",
          boxShadow: "0px 17px 55px rgba(0, 46, 113, 0.25)",
          borderRadius: "10px",
        }}
      >
        <div
          className="Login"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
         <LoginHeader/>
          <div
            className="main"
            style={{
              // height: "290px",
            }}
          >
            {state.isLogin && state.isLogin ? (
              <OtpField otp={otp} setOtp={setOtp} />
            ) : (
              <div className="inputfield"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "50px",
                }}
              >
                <InputField />
                
                <div  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"}} > 

                  <HelperText/>
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
                    className="countryselect"
                    style={{
                      width: "100%",
                    }}
                  >
                    <CountrySelect
                      value={value}
                      setValue={setValue}
                      setPhone={setPhone}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <TelInput phone={phone} setPhone={setPhone} />
                     <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                     }}>
                     {/* <div>
                      <Button
                        onClick={handleClick}
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "14px",
                       
                          lineHeight: "18px",
                          color: "#002F71",
                          marginTop : "15px"
                        }}
                        variant="outlined"
                      >
                        Next
                      </Button>
                    </div> */}

                    <NextButton  onClick={handleClick}/>

                     </div>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
