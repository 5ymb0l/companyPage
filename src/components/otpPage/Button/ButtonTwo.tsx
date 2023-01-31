
import { Button } from '@mui/material'
import  {useState} from "react"
import { Link } from 'react-router-dom'

export const ButtonTwo = () => {
  const [State, setState] = useState()
  return (
    <div>
        <Link  style={{textDecoration:"none"}} to="/dashbhai" >
        
          <Button
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
        
        </Link>
        </div>
  )
}
