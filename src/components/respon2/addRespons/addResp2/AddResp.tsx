import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const Type = [
  {
    label: "Sanghat",
    code: "Sa",
  },
  {
    label: "District",
    code: "Dt",
  },
  {
    label: "Taluka",
    code: "Ta",
  },
];

const Countries = [
  {
    label: "India",
    phone: "+91",
  },
  {
    label: "USA",
    phone: "+1",
  },
  {
    label: "ARG",
    phone: "+21",
  },
];

const IState = [
  {
    label: "Maharasthra",
    code: "mh",
  },
  {
    label: "Goa",
    code: "G",
  },
  {
    label: "Gujrat",
    code: " Guj ",
  },
];
const ISangat = [
  {
    label: "Relevant",
    code: "Re",
  },
  {
    label: " Logical",
    code: "Lo",
  },
  {
    label: " Rational",
    code: "Ra",
  },
];
export default function AddResp() {
  const [value, setValue] = React.useState("Sanghat");
  const [country, setCountry] = React.useState("Select");
  const [state, setState] = React.useState("Select");
  const [taluka, setTaluka] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  const handleSanghat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaluka(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {" "}
      <div>
        <div>
          <TextField
            id="standard-search"
            label="First Name"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Last Name"
            type="search"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Email Address"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        </div>

        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            variant="standard"
            value={value}
            onChange={handleClick}
          >
            {Type.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            variant="standard"
            label="Country"
            value={country}
            onChange={handleChange}
          >
            {Countries.map((option) => (
              <MenuItem key={option.phone} value={option.phone}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            variant="standard"
            label="State"
            value={state}
            onChange={handleState}
          >
            {IState.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div>

          <TextField
            id="outlined-select-currency"
            select
            variant="standard"
            label="Sanghat"
            value={taluka}
            onChange={handleSanghat}
          >
            {ISangat.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          </div>
         </div>
      </div>
    </Box>
  );
}
