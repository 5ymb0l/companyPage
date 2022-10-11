import {  Autocomplete, TextField , Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import {CountryType} from "../country/CountrySelect"


export const TelInput  : React.FC <{
 phone : string;
 setPhone : React.Dispatch<React.SetStateAction<string>>

 }> = ({phone , setPhone}) => {
  return (
    <TextField className="phone"
    value={phone}
    onChange={( e ) => {
      setPhone(e.target.value)
    }
  }
    sx = {{
       ...TelInput, borderRadius: '50px',
       backgroundColor: 'info.light'
     }}
   type= "number"
      InputProps={{
   startAdornment : <InputAdornment position="start"> <PhoneInTalkIcon /> <option className="plus"> + </option> </InputAdornment>
     }} />
   
   );
    }
