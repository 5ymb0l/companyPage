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
  Button,
  Divider,
  InputAdornment,
  Typography,
} from "@mui/material";

import { PeoplesData } from "../Person.type";
type Props = {
  data: PeoplesData;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: PeoplesData) => void;
};

export const EditNewResponsibility = (props: Props) => {
  console.log(props);
  const [firstName, setFirstName] = useState(props.data.firstName);
  const [lastName, setLastName] = useState(props.data.lastName);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [type, setType] = useState(props.data.types);
  const [country, setCountry] = useState(props.data.country);
  const [state, setState] = useState(props.data.state);
  const [sanghat, setSanghat] = useState(props.data.sanghat);


  const { onUpdateClickHnd, onBackBtnClickHnd, data } = props;
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
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Stack>
        <Box
          component="span"
          sx={{
            display: "flex",
            backgroundColor: " #F4F9FF",
            height: "50ch",
            width: "20ch",
            padding: "16px",
            borderRadius: "10px 0px 0px 10px",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
                fontSize: "14px",
                color: "darkblue",
              }}
            >
              Edit Responsibilites
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh",
                fontWeight: 540,
                fontSize: "12px",
                color: "#1073FF",
              }}
            >
              {" "}
              General Details
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                Edit{" "}
              </Button>
            </Stack>
          </Box>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 1,
            }}
            rowSpacing={2}
            columnSpacing={2}
            container
            my={4}
          >
            <Grid item xs={6}>
              <TextField
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
                id="standard-basic"
                label="First Name"
                variant="standard"
                value={firstName}
                onChange={onFirstNameChangeHnd}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
                id="standard-basic"
                label="Last Name"
                variant="standard"
                value={lastName}
                onChange={onLastNameChangeHnd}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={onEmailChangeHnd}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{}} position="start">
                      +91
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
                id="standard-basic"
                label=" Phone Number"
                variant="standard"
                value={phone}
                onChange={onPhoneChangeHnd}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="standard"
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
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
                  <MenuItem value={"Country"}> Country</MenuItem>
                  <MenuItem value={"District"}>District</MenuItem>
                  <MenuItem value={"State"}>State</MenuItem>
                  <MenuItem value={"Taluka"}>Taluka</MenuItem>
                  <MenuItem value={"Sanghat"}>Sanghat</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Divider />
            <Grid item xs={6}>
              <FormControl
                variant="standard"
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
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
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
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

            <Grid item xs={12}>
              <FormControl
                variant="standard"
                sx={{
                  width: "30ch",
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    color: "#6682AA",
                  },
                }}
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
                  <MenuItem value={"Vadodara"}>Vadodara</MenuItem>
                  <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
