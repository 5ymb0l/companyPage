// import React from 'react'
// import { Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// const AddMore = () => {
//   return (
//     <Button
//     variant="outlined"
//     startIcon={<AddIcon />}
    
//     // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
// > Add More </Button>
//   )
// }

// export default AddMore
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import EditNew from '../addnewPopup/AddNewResponsibility';
import Filter from '../filter/Filter';

export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add More
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
         <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
       <DialogContent>
          <Filter/>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}