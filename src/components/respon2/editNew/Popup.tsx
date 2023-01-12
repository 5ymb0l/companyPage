import * as React from 'react';
import {Button ,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   useMediaQuery,
   makeStyles,
   Box,
   styled,
   Typography
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';

  import { useTheme } from '@mui/material/styles';
// import { AddNewResponsibility } from './AddNewResponsibility';
// import { PeoplesData } from '../Person.type';
type Props = {
  children : any;
  title? : string;
     openPopup : boolean;
    setOpenPopup : ( param: boolean) => void
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

const StyledBox = styled(Dialog)(({ theme }) => ({
  // color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  // padding: theme.spacing(1),
  // borderRadius: theme.shape.borderRadius,

    // padding: theme.spacing(2),
    // position: 'absolute',
    // top: theme.spacing(5)


}));

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });



export default function EditPopup(props : Props) {
  // const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const { children , title , openPopup , setOpenPopup  } = props;
  // console.log(onSubmitClickHnd)

//   const handleClick = () => {
//   (e : React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
// }
  return (

   
      <Dialog   sx={{
          '& .MuiPaper-root' : {
           
             maxWidth : '52%',
            
          }
      }}
        fullScreen={fullScreen}
        open={openPopup}
      onClose = {() => {setOpenPopup(false)}}
        aria-labelledby="responsive-dialog-title"
      
      >
      
     <DialogContent  sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding : 0 ,
          overflowX: 'hidden',
          marginRight : '10px'
        }}>

        {children} 
        </DialogContent>
       
      </Dialog>


    
  );
}
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