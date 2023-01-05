import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import {
  Grid,
  Box,
  TextField,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Autocomplete,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Divider,
  Paper
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { PeoplesData } from '../Person.type';
type Props = {
  onBackBtnClickHnd : () => void
  onSubmitClickHnd: (data: PeoplesData) => void;
};
export const  AddNewResponsibility = (props : Props)  => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [sanghat, setSanghat] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = React.useState(false);

  
const { onSubmitClickHnd ,onBackBtnClickHnd } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onFirstNameChangeHnd = (e: any) => {
     setFirstName(e.target.value);
   };
   const onLastNameChangeHnd = (e: any) => {
     setLastName(e.target.value);
   };
   const onEmailChangeHnd = (e: any) => {
     setEmail(e.target.value);
   };
 
   const onPhoneChangeHnd = (e: any) => {
     setPhone(e.target.value);
   };
   const onTypeChange = (event: SelectChangeEvent) => {
     setType(event.target.value);
   };
   const onCountryChange = (event: SelectChangeEvent) => {
     setCountry(event.target.value);
   };
   const onStateChange = (event: SelectChangeEvent) => {
     setState(event.target.value);
   };
   const onSanghatChange = (event: SelectChangeEvent) => {
     setSanghat(event.target.value);
   };
   const onRoleChange = (event: SelectChangeEvent) => {
     setRole(event.target.value);
   };
   const onSubmitBtnClickHnd = (e: any) => {
     e.preventDefault();
     const data: PeoplesData = {
       id: new Date().toJSON().toString(),
       firstName: firstName,
       lastName: lastName,
       phone: phone,
       email: email,
       types: type,
       country: country,
       state: state,
       sanghat: sanghat,
       role : role
     };
     onSubmitClickHnd(data);
 onBackBtnClickHnd();
    }
  return (
    <div>
      <Button sx ={{
        backgroundColor : "white",
        borderRadius : "50px"
      }}variant="outlined" startIcon={<AddIcon />}  onClick={handleClickOpen}>
        Add New
      </Button>
     
      <Dialog open={open} onClose={handleClose}>
      {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions> */}
        {/* <DialogTitle>Add New Responsibilites</DialogTitle> */}
        <DialogContent>
        <Box
      title = " Add New Responsibilites"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Box onSubmit={onSubmitBtnClickHnd}>
  <Box sx = {{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }}>
    <Stack direction="row" spacing={2}>
    <Button  onClick={onBackBtnClickHnd} > Cancel</Button>
    <Button  onClick={onSubmitBtnClickHnd}> Add </Button>
    </Stack>
    </Box>
     
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
   
          <Grid item xs = {6}>
             <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                value={firstName}
                onChange={onFirstNameChangeHnd}
              />
            </Grid>
          
            <Grid item xs = {6}>
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                value={lastName}
                onChange={onLastNameChangeHnd}
              />
            </Grid>
         <Grid item xs = {6}>
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                type="number"
                value={phone}
                onChange={onPhoneChangeHnd}
              />
            </Grid>
            <Grid item xs = {6}>
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                value={email}
                onChange={onEmailChangeHnd}
              />
            </Grid>
        
          
            <Grid item xs = {12}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 200, align: "center" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={type}
                  onChange={onTypeChange}
                  label="Type"
                >
                  <MenuItem value={"Ten"}>Ten</MenuItem>
                  <MenuItem value={"Twenty"}>Twenty</MenuItem>
                  <MenuItem value={"Thirty"}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
       

           <Divider />
          
            <Grid item xs = {6}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 200, align: "center" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={country}
                  onChange={onCountryChange}
                  label="Country"
                >
                  <MenuItem value={"Ind"}>Ind</MenuItem>
                  <MenuItem value={"Pak"}>Pak</MenuItem>
                  <MenuItem value={"Usa"}>Usa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
         
  
            <Grid item xs = {6}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 200, align: "center" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={state}
                  onChange={onStateChange}
                  label="State"
                >
                  <MenuItem value={"Mh"}>Mh</MenuItem>
                  <MenuItem value={"Guj"}>Guj</MenuItem>
                  <MenuItem value={"Kerala"}>Kerala</MenuItem>
                </Select>
              </FormControl>
            </Grid>
        
       
            <Grid item xs = {6}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 200, align: "center" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Sanghat
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sanghat}
                  onChange={onSanghatChange}
                  label="Sanghat"
                >
                  <MenuItem value={"Surat"}>Surat</MenuItem>
                  <MenuItem value={"Valsad"}>Valsad</MenuItem>
                  <MenuItem value={"Vapi"}>Vapi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs = {6}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 200, align: "center" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={role}
                  onChange={onRoleChange}
                  label="Role"
                >
                  <MenuItem value={"SA"}>SA</MenuItem>
                  <MenuItem value={"A"}>A</MenuItem>
                </Select>
              </FormControl>
            </Grid>
         
       </Grid>
      </Box>
     </Box>
     </DialogContent>
      
      </Dialog>
    </div>
  );
}


// import * as React from 'react';
// import {Button ,
//    Dialog,
//    DialogActions,
//    DialogContent,
//    DialogContentText,
//    DialogTitle,
//    useMediaQuery,
//    makeStyles,
//    Box,
//    styled,
//    Typography
//   } from '@mui/material';
//   import AddIcon from '@mui/icons-material/Add';

//   import { useTheme } from '@mui/material/styles';
// // import { AddNewResponsibility } from './AddNewResponsibility';
// // import { PeoplesData } from '../Person.type';
// type Props = {
//   children? : any;
//   title?: string;
//      openPopup : boolean;
//     setOpenPopup : ( param: boolean) => void
//   // onSubmitClickHnd : (data : PeoplesData) => void
// }


// // const useStyles = makeStyles(theme => ({
// //   dialogWrapper: {
// //       padding: theme.spacing(2),
// //       position: 'absolute',
// //       top: theme.spacing(5)
// //   },
// //   dialogTitle: {
// //       paddingRight: '0px'
// //   }
// // }))

// const StyledBox = styled(Dialog)(({ theme }) => ({
//   // color: theme.palette.primary.contrastText,
//   // backgroundColor: theme.palette.primary.main,
//   // padding: theme.spacing(1),
//   // borderRadius: theme.shape.borderRadius,

//     padding: theme.spacing(2),
//     position: 'absolute',
//     top: theme.spacing(5)


// }));

// // const useStyles = makeStyles({
// //   root: {
// //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// //     border: 0,
// //     borderRadius: 3,
// //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// //     color: 'white',
// //     height: 48,
// //     padding: '0 30px',
// //   },
// // });



// export default function Popup(props : Props) {
//   // const [open, setOpen] = React.useState(false);
//   // const classes = useStyles();

//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };
//   const { children , title , openPopup , setOpenPopup  } = props;
//   // console.log(onSubmitClickHnd)

// //   const handleClick = () => {
// //   (e : React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
// // }
//   return (
//     <StyledBox open={openPopup}>

//       <Dialog style={{
//         // display : "flex",
//         // justifyContent : "center",
//         // alignItems : "center",
//       }}
//         fullScreen={fullScreen}
//         open={openPopup}
//       onClose = {() => {setOpenPopup(false)}}
//         aria-labelledby="responsive-dialog-title"
      
//       >
//        <DialogTitle>
//        <div style={{ display: 'flex' }}>
//                     <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
//                         {title}
//                     </Typography>
//                     {/* <Button
//                         color="secondary"
//                         onClick={()=>{setOpenPopup(false)}}>
//                         Cancel
//                     </Button> */}
//                 </div>
//         </DialogTitle>
//      <DialogContent dividers>

//         {children} 
//         </DialogContent>
       
//       </Dialog>


//     </StyledBox>
    
//   );
// }
// {/* <DialogActions>
//  <Button autoFocus onClick={handleClose}>
//    Cancel 
//  </Button>
//  <Button onClick ={() => {
   
//    handleClose()
//  }} 
//  // value = {query}
//  // onChange = {handleClick}
//   autoFocus>
//    Add
//  </Button>
// </DialogActions> */}