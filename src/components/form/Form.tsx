import { Button } from "@mui/material";
import InputField from "../inputField/InputField";
import CountrySelect from "../country/CountrySelect"
import TelInput from "../phoneNo/MuiTelInput"
import "./Form.css";

export const Form = () => {
  return (
    <div className='card'>
    <div className="div">
    <h1 className="h1">Login</h1>
    <InputField />
    <CountrySelect />
    <TelInput />
    <Button className="next" variant="outlined"> Next </Button>
    </div>
    </div>
  )
}

export default Form