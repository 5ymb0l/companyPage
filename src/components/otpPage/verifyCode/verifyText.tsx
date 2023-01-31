import {Typography} from "@mui/material"
export const VerifyText = () => {
  return (
    <Typography
    className="VerifyCode"
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
    Verification code
  </Typography>
  )
}
