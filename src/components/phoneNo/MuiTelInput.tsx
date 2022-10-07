import {  TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export const TelInput = () => {
  return (
    <TextField className="phone"
    sx={{
      ...TelInput, borderRadius: '50px',
      backgroundColor: 'info.light'
    }}
  type= "number"
     InputProps={{
  startAdornment : <InputAdornment position="start"> <PhoneInTalkIcon /> <option className="plus"> + </option> </InputAdornment>
    }} />
  
  );
};


// ...TelInput, borderRadius: '50px'
// import React from 'react'
// import {
//   MuiTelInput,
//   MuiTelInputCountry,
//   MuiTelInputInfo,
//   MuiTelInputContinent
// } from 'mui-tel-input'

// export const TelInput = () => {
//   const [value, setValue] = React.useState<string>('')

//   const handleChange = (newValue: string, info: MuiTelInputInfo) => {
//     setValue(newValue)
//   }

//   const continents: MuiTelInputContinent[] = ['EU']
//   const excludedCountries: MuiTelInputCountry[] = ['FR']

//   return (
//     <MuiTelInput
//       value={value}
//       onChange={handleChange}
//       continents={continents}
//       excludedCountries={excludedCountries}
//     />
//   )
// }


// export default TelInput