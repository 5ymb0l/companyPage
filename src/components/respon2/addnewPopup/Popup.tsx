import * as React from 'react';
import {Button ,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   useMediaQuery,
   makeStyles,
   Box
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';

  import { useTheme } from '@mui/material/styles';
// import { AddNewResponsibility } from './AddNewResponsibility';
// import { PeoplesData } from '../Person.type';
type Props = {
    children : any;
    // openPopup : boolean;
    // setOpenPopup : boolean;
    // title : string;
  // onSubmitClickHnd : (data : PeoplesData) => void
}

// const useStyles = makeStyles(theme => ({
//   dialogWrapper: {
//       padding: theme.spacing(2),
//       position: 'absolute',
//       top: theme.spacing(5)
//   },
//   dialogTitle: {
//       paddingRight: '0px'
//   }
// }))

export default function Popup(props : Props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { children } = props;
  // console.log(onSubmitClickHnd)

//   const handleClick = () => {
//   (e : React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
// }
  return (
   <Box>
      <Button sx ={{
        backgroundColor : "white",
        borderRadius : "50px"
      }}variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon />}>
        Add New  
      </Button>
      <Dialog style={{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
      }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        
      >
       {/* <DialogTitle>{title} </DialogTitle> */}

         {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel 
          </Button>
          <Button onClick ={() => {
            
            handleClose()
          }} 
          // value = {query}
          // onChange = {handleClick}
           autoFocus>
            Add
          </Button>
        </DialogActions> */}

       <DialogContent>
{/* <AddNewResponsibility onSubmitClickHnd={onSubmitClickHnd} /> */}
        {children} 
        </DialogContent>
       
      </Dialog>
    </Box>
  );
}