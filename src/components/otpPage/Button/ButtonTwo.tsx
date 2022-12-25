
import { Button } from '@mui/material'
import  {useState} from "react"
import { Link } from 'react-router-dom'

export const ButtonTwo = () => {
  const [State, setState] = useState()
  return (
    <div>
          <Button
           onClick={()=> window.open("/dashbhai")}
            // onClick={handleClick}
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18px",
              color: "#002F71",
              marginTop: "15px",
            }}
            variant="outlined"
          >
            Next
          </Button>
        </div>
  )
}
// import React from 'react'
// import { Button } from '@mui/material'
// interface Props {
//     onClick : React.MouseEventHandler<HTMLButtonElement> | undefined
// }
// // export const NextButton = (props: Props ) => {
// //     const {   onClick } = props;


// export const ButtonTwo : React.FC<Props> = ({
//     onClick
// }) => {
//     return (
//       <div>
//       <Button
//       onClick={onClick}
//         sx={{
//           fontFamily: "Poppins",
//           fontStyle: "normal",
//           fontWeight: 500,
//           fontSize: "14px",
//           lineHeight: "18px",
//           color: "#002F71",
//           marginTop : "15px"
//         }}
//         variant="outlined"
//       >
//        Next
//       </Button>
//     </div>
//     )

// }