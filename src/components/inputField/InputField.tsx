import React from "react";
// import "./inputField.css";
import { FormHelperText } from '@mui/material';
export const InputField = () => {
  return (
    <div >
      <div className="h2">Enter your Mobile Number</div>
     <FormHelperText className="help-text">
     "You will receive a 6 digit code to verify next "
     </FormHelperText>
    </div>
  );
};

export default InputField;
