import { useState } from 'react';
import { countries, CountryType } from '../../loginPage/country/CountrySelect';
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
  Autocomplete
}
  from '@mui/material';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function EditNew() {
  const [type, setType] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [sanghat, setSanghat] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleClick = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  }
  const onClick = (event: SelectChangeEvent) => {
    setState(event.target.value);
  }
  const onChange = (event: SelectChangeEvent) => {
    setSanghat(event.target.value);
  }

  return (
    <Stack spacing={4} sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box>
        <Stack direction="row" spacing={2}>
          <TextField id="standard-basic" label="First Name" variant="standard" />       <TextField id="standard-basic" label="Last Name" variant="standard" />
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <TextField id="standard-basic" label="Email Address" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" type="number" />
        </Stack>
      </Box>
      <Box sx={{
        left: "200px"
      }} >
        <Stack direction="row" spacing={2} >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200, align: "center" }}>
            <InputLabel id="demo-simple-select-standard-label">Sanghat</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={type}
              onChange={handleChange}
              label="Sanghat"
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
          <FormControl variant="standard" sx={{ m: 0, minWidth: 200, align: "center" }}>
            <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={country}
              onChange={handleClick}
              label="Country"
            >
              <MenuItem value={10}>India</MenuItem>
              <MenuItem value={20}>Usa</MenuItem>
              <MenuItem value={30}>England</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 200, align: "center" }}>
            <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={state}
              onChange={onClick}
              label="State"
            >
              <MenuItem value={10}>Maharashtra</MenuItem>
              <MenuItem value={20}>Gujrat</MenuItem>
              <MenuItem value={30}>UP</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200, align: "center" }}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sanghat}
              onChange={onChange}
              label="Type"
            >
              <MenuItem value={10}>Sanghat</MenuItem>
              <MenuItem value={20}>Xyz</MenuItem>
              <MenuItem value={30}>sss</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Stack>




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
}


