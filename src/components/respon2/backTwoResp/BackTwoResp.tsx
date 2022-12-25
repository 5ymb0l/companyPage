import {Button} from '@mui/material'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const BackTwoResp = () => {
  return (
 <Button  onClick={()=> window.open("/dashbhai")} startIcon={<ChevronLeftIcon />}> Back to responsibility</Button>
  )
}

export default BackTwoResp