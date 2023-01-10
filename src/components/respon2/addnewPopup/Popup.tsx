import * as React from "react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
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
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PeoplesData } from "../Person.type";
type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: PeoplesData) => void;
  openPopup: boolean;
  setOpenPopup: (param: boolean) => void;
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
  const [role, setRole] = useState("");
  const [open, setOpen] = React.useState(false);
  const { onSubmitClickHnd, onBackBtnClickHnd, openPopup, setOpenPopup } =
    props;

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
      role: role,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };
  //   const validate = (fieldValues = values) => {
  //     let temp = { ...errors }
  //     if ('fullName' in fieldValues)
  //         temp.fullName = fieldValues.fullName ? "" : "This field is required."
  //     if ('email' in fieldValues)
  //         temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
  //     if ('mobile' in fieldValues)
  //         temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
  //     if ('departmentId' in fieldValues)
  //         temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
  //     setErrors({
  //         ...temp
  //     })

  //     if (fieldValues == values)
  //         return Object.values(temp).every(x => x == "")
  // }

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "50px",
        }}
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        Add New
      </Button>

      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <DialogContent  sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor : "pink"
        }}
       >
          <Box
            title=" Add New Responsibilites"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box onSubmit={onSubmitBtnClickHnd}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    sx={{
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
                    }}
                    onClick={onBackBtnClickHnd}
                  >
                    {" "}
                    Cancel
                  </Button>
                  <Button
                    sx={{
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
                    }}
                    onClick={onSubmitBtnClickHnd}
                  >
                    {" "}
                    Add{" "}
                  </Button>
                </Stack>
              </Box>

              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    value={firstName}
                    onChange={onFirstNameChangeHnd}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    value={lastName}
                    onChange={onLastNameChangeHnd}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    type="number"
                    value={phone}
                    onChange={onPhoneChangeHnd}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Email Address"
                    variant="standard"
                    value={email}
                    onChange={onEmailChangeHnd}
                  />
                </Grid>

                <Grid item xs={12}>
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

                <Grid item xs={6}>
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

                <Grid item xs={6}>
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

                <Grid item xs={6}>
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
                <Grid item xs={6}>
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
    </Box>
  );
};
