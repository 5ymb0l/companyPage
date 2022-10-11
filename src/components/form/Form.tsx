import {useState} from"react"
import { Button } from "@mui/material";
import InputField from "../inputField/InputField";
import CountrySelect from "../country/CountrySelect"
import {TelInput } from "../phoneNo/MuiTelInput";
import "./Form.css";
import {CountryType} from "../Countries"


export const Form = () => {
  const [value , setValue] = useState<CountryType | undefined>();
  const [phone, setPhone] = useState<string>('');
  console.log(phone)
  return (
    <div className='card'>
    <div className="div">
    <h1 className="h1">Login</h1>
    <InputField/>
    <CountrySelect value={value} setValue = {setValue} setPhone = {setPhone} />
    <TelInput phone = {phone} setPhone = {setPhone}/>
  
    <Button className="next" variant="outlined"> Next </Button>
    </div>
    </div>
  )
}

export default Form