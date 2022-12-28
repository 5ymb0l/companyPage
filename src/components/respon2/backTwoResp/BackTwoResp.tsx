import {Button} from '@mui/material'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from 'react-router-dom';


const BackTwoResp = () => {
  return (
    <Link  style={{textDecoration:"none"}} to="/dashbhai" >

      <Button   startIcon={<ChevronLeftIcon />}> Back to responsibility</Button>



    </Link>
  )
}

export default BackTwoResp