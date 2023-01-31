import {Button} from '@mui/material'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from 'react-router-dom';


const BackTwoResp = () => {
  return (
    <Link  style={{textDecoration:"none"}} to="/dashbhai" >

      <Button sx={{
           color : ' #002F71',
           fontStyle : 'normal',
           fontWeight: 600,
           fontSize: "14px",
      }}  startIcon={<ChevronLeftIcon />}> Back to responsibilities</Button>



    </Link>
  )
}

export default BackTwoResp