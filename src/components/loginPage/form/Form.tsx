import { useState } from "react";
import { Button } from "@mui/material";
import InputField from "../inputField/InputField";
import CountrySelect from "../country/CountrySelect"
import { TelInput } from "../phoneNo/MuiTelInput";
import "./Form.css";
import { CountryType } from "../Countries"
import { OtpField } from "../../otp/OtpField";

interface Istate{
  isLogin : boolean; 
 
}
export const Form = () => {
  const [value, setValue] = useState<CountryType | undefined>();
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("")
  const [state, SetState] = useState <Istate>({
     isLogin : false,
    })
  console.log(phone); 
  const handleClick = () : void => {
    if (otp === "123456") {
         setOtp ( "")
     }
     else {
         setOtp("123456")
     }
     
    SetState ({ isLogin : true})
  }
  return (
    <div className="card">
      <div>
        <h1 className="h1">Login</h1>
        <div className = "main">
          {state.isLogin && state.isLogin ? (
        <OtpField  otp={otp} setOtp={setOtp} />  
            ) : (
            <div>
         <InputField />
        <CountrySelect value={value} setValue={setValue} setPhone={setPhone} />
        <TelInput phone={phone} setPhone={setPhone} />
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
            bottom : "-50px"
            
          }}
          variant="outlined"
        >
        
         Next
        </Button>
        </div>
      </div>
    </div>
 
 );
  
};



export default Form;
