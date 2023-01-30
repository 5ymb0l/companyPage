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
import { Box } from "@mui/material";
import Plant from "../../../assests/images/plant.png"

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
  
<Box
 sx={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   backgroundColor: "#E5E5E5",

  }}>
    <Box className="card" >
      <Box
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
         <LoginHeader/>
          <Box
            className="main"
           sx={{
              // height: "290px",
            }}
          >
            {state.isLogin && state.isLogin ? (
              <OtpField otp={otp} setOtp={setOtp} />
            ) : (
              <Box className="inputfield"
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "50px",
                }}
              >
                <InputField />
                
                <Box  sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"}} > 

                  <HelperText/>
                </Box>
                <Box
                  className="input"
                 sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px"
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
                     <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                     }}>
                     {/* <Box>
                      <Button
                        onClick={handleClick}
                        sx={{
                          fontFamily: "Poppins",
                          fon sx: "normal",
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
                    </Box> */}

                    <NextButton  onClick={handleClick}/>

                     </Box>
                    
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
    <Box sx= {{
      display: "flex"
    }}>
  <img style ={{
        
        width:10,
        height:20,
      }}src={Plant} alt=""></img>
   </Box>
      </Box>

);
}

export default Form;

{/* <Box style ={{
  display:"flex",
     alignItems:"center",
     justifyContent: "center", 
     backgroundColor: "#E5E5E5",
}} > 
<img src={Plant} alt=""></img>
Footer


</Box> */}