
import { FormHelperText} from "@mui/material";

const HelperText = () => {
  return (
  

        <FormHelperText
          sx={{
             height: "60px",
          fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "18px",
            color: "#002F71",
            opacity: 0.8,
            margin : 0,
            paddingTop : "20px"
            
          }}
        >
          You will receive a 6 digit code to verify next 
        </FormHelperText>

      
  )
}

export default HelperText 