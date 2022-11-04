import { useState } from "react";
import { Button } from "@mui/material";
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
          className="ex"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            className="h1"
            style={{
              fontFamily: "Poppins",
              color: "#002F71",
              fontSize: "3em",
              height: "10vh",
              marginBottom : "10px",
              fontWeight: 600

              //        width: "500px",
              // height: "60px",
              // left: "809px",
              // top: "300px",
              // fontStyle: "normal",

              // lineHeight: "60px",
            }}
          >
            Login
          </h1>
          <div className="main" style={{
            height : "290px"
          }}>
            {state.isLogin && state.isLogin ? (
              <OtpField otp={otp} setOtp={setOtp} />
            ) : (
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom : "50px"
                }}
              >
                <InputField />

                <div  className="inputField"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap : "20px"
                  }}
                > <div className="countryselect" style={{
                  width : "100%"
                }}>

                  <CountrySelect
                    value={value}
                    setValue={setValue}
                    setPhone={setPhone}
                  />
                </div>
                <div style={
                  {
                  width : "100%"
                  }
                }>
                  <TelInput phone={phone} setPhone={setPhone} />

                </div>
                </div>
              </div>
            )}
          </div>
          <div style={{

          }}>
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
