import { useState } from "react";

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
  Divider
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { PeoplesData } from "../Person.type";
type Props = {
  data : PeoplesData
  onBackBtnClickHnd : () => void
  onUpdateClickHnd: (data: PeoplesData) => void;
};


export const EditNewResponsibility = (props: Props) => {
  console.log(props)
  const [firstName, setFirstName] = useState(props.data.firstName);
  const [lastName, setLastName] = useState(props.data.lastName);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [type, setType] = useState(props.data.types);
  const [country, setCountry] = useState(props.data.country);
  const [state, setState] = useState(props.data.state);
  const [sanghat, setSanghat] = useState(props.data.sanghat);
  const [role, setRole] = useState(props.data.role);

  const [open, setOpen] = useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {  onUpdateClickHnd ,onBackBtnClickHnd , data} = props;
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
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  
  // const handleClick = (event: SelectChangeEvent) => {
  //   setCountry(event.target.value);
  // }
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: PeoplesData = {
      id: data.id,
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
    onUpdateClickHnd(updatedData);
onBackBtnClickHnd();

  };
  return (
    <Box
      title = " Edit New Responsibilites"
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
    <Button  sx = {{
         color: "#002F71",
         textAlign: "center",
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         fontFamily: "Poppins, Arial",
         fontSize: ".875rem",
         fontWeight: "500",
         lineHeight: "18px",
         display: "flex",
    }}onClick={onBackBtnClickHnd} > Cancel</Button>
    <Button  sx={{
                      color: "#fff",
                      textAlign: "center",
                      backgroundColor: "#1073ff",
                      border: "none",
                      borderRadius: "50px",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Poppins, Arial",
                      fontSize: ".875rem",
                      fontWeight: "500",
                      lineHeight: "18px",
                      display: "flex",
                    }} onClick={onSubmitBtnClickHnd}> Edit </Button>
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
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                  <MenuItem value={10}>Ind</MenuItem>
                  <MenuItem value={20}>Pak</MenuItem>
                  <MenuItem value={30}>Usa</MenuItem>
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
                  <MenuItem value={10}>Mh</MenuItem>
                  <MenuItem value={20}>Guj</MenuItem>
                  <MenuItem value={30}>Kerala</MenuItem>
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
                  <MenuItem value={10}>Surat</MenuItem>
                  <MenuItem value={20}>Valsad</MenuItem>
                  <MenuItem value={30}>Vapi</MenuItem>
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
                  <MenuItem value={10}>SA</MenuItem>
                  <MenuItem value={20}>A</MenuItem>
                </Select>
              </FormControl>
            </Grid>
         
       </Grid>
      </Box>
     </Box>
  );
};
