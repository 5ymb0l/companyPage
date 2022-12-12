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
  useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { PeoplesData } from "../Person.type";
type Props = {
  onBackBtnClickHnd : () => void
  onSubmitClickHnd: (data: PeoplesData) => void;
};

export const AddNewResponsibility = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [sanghat, setSanghat] = useState("");
  // const [open, setOpen] = useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { onSubmitClickHnd ,onBackBtnClickHnd } = props;
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
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  
  // const handleClick = (event: SelectChangeEvent) => {
  //   setCountry(event.target.value);
  // }
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
    };
    onSubmitClickHnd(data);
onBackBtnClickHnd();

  };
  return (
    <Box
      title = " Add New Responsibilites"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
         

       {/* <Button variant="outlined" onClick={handleClickOpen}>
        Add New 
      </Button> */}
      {/* <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
         <DialogActions>
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
        </DialogActions>

       <DialogContent>
<AddNewResponsibility onSubmitClickHnd={onSubmitClickHnd} />

        </DialogContent>
       
      </Dialog> */}
      <form onSubmit={onSubmitBtnClickHnd}>
      <input type="submit" value="Add Employee" />
      <input type="button" value="Back" onClick={onBackBtnClickHnd} />

        <Stack spacing={4}>
          <Box>
            <Stack direction="row" spacing={2}>
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                value={firstName}
                onChange={onFirstNameChangeHnd}
              />
            </Stack>
            <Stack>
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                value={lastName}
                onChange={onLastNameChangeHnd}
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                value={email}
                onChange={onEmailChangeHnd}
              />
            </Stack>
            <Stack>
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                type="number"
                value={phone}
                onChange={onPhoneChangeHnd}
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
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
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
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
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
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
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
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
            </Stack>
          </Box>
        </Stack>
      </form>
    </Box>

    //     <Box sx = {{
    //       flexGrow : 1,
    //       display : "flex",
    //     justifyContent : "center",
    //     alignItems : "center"
    //    }}
    //  >

    //     <Box sx={{
    //       height :"5vh",
    //       display : "flex",
    //       width: '50%',
    //     justifyContent : "center",
    //     alignItems : "center"
    //     }}>
    //       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //         <Grid item xs={6}>
    //          <TextField id="standard-basic" label="First Name" variant="standard" />

    //         </Grid>
    //         <Grid item xs={6}>
    //          <TextField id="standard-basic" label="Last Name" variant="standard" />

    //         </Grid>
    //         <Grid item xs={6}>
    //          <TextField id="standard-basic" label="Email Address" variant="standard" />

    //         </Grid>
    //         <Grid item xs={6}>
    //         <TextField id="standard-basic" label="Phone Number" variant="standard" type="number" />

    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
  );
};
