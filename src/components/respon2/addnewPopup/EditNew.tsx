import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TelInput } from '../../loginPage/phoneNo/MuiTelInput';

export default function EditNew() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
>
      <TextField id="standard-basic" label="First Name" variant="standard" />
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      <TextField id="standard-basic" label="Email Address" variant="standard" />
      <TelInput phone={phone} setPhone={setPhone} />
    </Box>
  );
}