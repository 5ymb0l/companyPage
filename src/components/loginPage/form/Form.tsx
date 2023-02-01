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

import { Box, Paper } from "@mui/material";
import Plant from "../../../assests/images/plant.png";
import PlantTwo from "../../../assests/images/plant2.png";
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
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <Box
        className="Main"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "aliceblue",


          marginTop: "584px",
        }}
      >
        <img style={{}} src={Plant} alt=""></img>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aliceblue",

        }}
        className="card"
      >
        <Paper elevation={3}
          className="whiteColor"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "422px",

            height: "500px",
            backgroundColor: "white",
            boxShadow: "#E6F2FE",
            borderRadius: "10px",
          }}
        >
          <Box
            className="Login"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <LoginHeader />
            <Box
              className="main"
              sx={
                {
                  // height: "290px",
                }
              }
            >
              {state.isLogin && state.isLogin ? (
                <OtpField otp={otp} setOtp={setOtp} />
              ) : (
                <Box
                  className="inputfield"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: "50px",
                  }}
                >
                  <InputField />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <HelperText />
                  </Box>
                  <Box
                    className="input"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Box
                      className="countryselect"
                      sx={{
                        width: "100%",
                      
                      }}
                    >
                      <CountrySelect
                        value={value}
                        setValue={setValue}
                        setPhone={setPhone}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TelInput phone={phone} setPhone={setPhone} />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                    
                        <NextButton onClick={handleClick} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box
        className="PlantTwo"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "aliceblue",

        
        }}
      >
        <img style={{
          height: "68vh",
          marginBottom: "280px"
        }} src={PlantTwo} alt=""></img>
      </Box>
    </Box>
  );
};

export default Form;

