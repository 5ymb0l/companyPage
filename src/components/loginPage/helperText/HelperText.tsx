import React from 'react'
import { FormHelperText} from "@mui/material";

const HelperText = () => {
  return (
    // <div style={ {
    //   display : "flex",
    //   alignItems : "center",
    //   justifyContent : "center"
    // }}>

        <FormHelperText
          sx={{
             height: "60px",
          fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "18px",
            // display: "flex",
            // alignItems: "center",
            // textAlign: "center",
            color: "#002F71",
            opacity: 0.8,
            margin : 0,
            paddingTop : "20px"
            
          }}
        >
          You will receive a 6 digit code to verify next 
        </FormHelperText>

        // </div>
  )
}

export default HelperText 