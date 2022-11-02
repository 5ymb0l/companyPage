import React from "react";
// import "./inputField.css";
import { FormHelperText, Typography } from "@mui/material";
import { Box } from "@mui/system";
export const InputField = () => {
  return (
    <div >
      <div>
        <Typography
          sx={{
            // width: "460px",
            // height: "90px",
            // left: "809px",
            // top: "300px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "40px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "#002F71",
          }}
        >
          {" "}
          Enter your Mobile Number{" "}
        </Typography>
        <div style={ {
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
    }}>

        <FormHelperText
          sx={{
             height: "60px",
          fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "#002F71",
            opacity: 0.8,
            margin : 0
            
          }}
        >
          "You will receive a 6 digit code to verify next "
        </FormHelperText>

        </div>
      </div>
    </div>
  );
};

export default InputField;
