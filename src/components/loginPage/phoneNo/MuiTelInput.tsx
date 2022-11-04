import {  TextField  } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import "./TelInput.css"

export const TelInput  : React.FC <{
 phone : string;
 setPhone : React.Dispatch<React.SetStateAction<string>>

 }> = ({phone , setPhone}) => {
  return (
     <div>
      <TextField className="phone"
     
      value={phone}
      onChange={( e ) => {
        setPhone(e.target.value)
      }
    }
      sx = {{
        //  ...TelInput, 
        //  width: '300px',
        //  borderRadius: '50px',
        // backgroundColor: '#E6F2FE',
        // boxSizing: 'border-box',
        // height: "57px",

       }}
     type= "number"
        InputProps={{
     startAdornment : <InputAdornment position="start"> <PhoneInTalkIcon /> <option className="plus"> + </option> </InputAdornment>
       }} />
    </div>
   
   );
    }
