import React from 'react'
import { Button } from '@mui/material'

interface Props {
    onClick : React.MouseEventHandler<HTMLButtonElement> | undefined
}


export const NextButton : React.FC<Props> = ({
    onClick
}) => {
    return (
      <div>
      <Button
     onClick={onClick}
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "18px",
          color: "#002F71",
          marginTop : "15px"
        }}
        variant="outlined"
       
      >
       Next 
      </Button>
    </div>
    )

}

