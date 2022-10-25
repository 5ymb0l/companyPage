import {  TextField  } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


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
       ...TelInput, 
       width: '300px',
       borderRadius: '50px',
      background: '#E6F2FE',
      border: '1px solid rgba(0, 47, 113, 0.2)',
      boxSizing: 'border-box'
     }}
   type= "number"
      InputProps={{
   startAdornment : <InputAdornment position="start"> <PhoneInTalkIcon /> <option className="plus"> + </option> </InputAdornment>
     }} />
   
   );
    }
