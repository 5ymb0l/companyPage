import React from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const AddMore = () => {
  return (
    <Button
    variant="outlined"
    startIcon={<AddIcon />}
    
    // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
> Add More </Button>
  )
}

export default AddMore