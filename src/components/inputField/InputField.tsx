import React from "react";
// import "./inputField.css";
import { FormHelperText, Typography } from "@mui/material";
import { Box } from "@mui/system";
export const InputField = () => {
  return (
    <div>
      <div>
        <Typography
          sx={{
            width: "460px",
            height: "90px",
            left: "809px",
            top: "300px",
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
        <FormHelperText
          sx={{

            width: "299px",
            height: "60px",
            left: "714px",
            top: "509px",
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
            marginTop: '3px',
            marginRight: '0px',
            marginBottom: '3px',
            marginLeft: '80px'
          }}
        >
          "You will receive a 6 digit code to verify next "
        </FormHelperText>
      </div>
    </div>
  );
};

export default InputField;
