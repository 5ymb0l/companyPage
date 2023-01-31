import { FormHelperText } from '@mui/material'

export const OtpHelperText = () => {
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
        We have sent the code verification to your Mobile number
      </FormHelperText>
  )
}

