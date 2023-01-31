
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
export const InputField = () => {
  return (
    <div >
      <div>
        <Typography
          sx={{
            fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "2em",
      lineHeight: "7vh",
      color: "#002F71",
      margin: 0,
          }}
        >
       
          Enter your Mobile Number
        </Typography>
       
      </div>
    </div>
  );
};

export default InputField;
