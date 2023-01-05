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
  Checkbox,
  FormGroup,
  FormLabel,
  FormControlLabel,
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
  // onBackBtnClickHnd : () => void
  // onSubmitClickHnd: (data: PeoplesData) => void;
};
export const AddFilter = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "50px",
        }}
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add More
      </Button>

      <Dialog open={open} onClose={handleClose}>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions> */}
        <DialogTitle> Filter</DialogTitle>
        <DialogContent dividers>
          <Box>
            <FormControl component="fieldset">
              {/* <h1 id='Filter'> Filter</h1> */}
              {/* <FormLabel component="legend">Filter</FormLabel> */}
              <FormLabel component="legend">Display</FormLabel>
              {/* <h2> Display</h2> */}
              <FormGroup aria-label="position">
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Immediate"
                  // labelPlacement="top"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="All"
                  // labelPlacement="start"
                />
              </FormGroup>
              <FormLabel component="legend">Type</FormLabel>
              {/* <h2> Type</h2> */}
              <FormGroup>
                <FormGroup>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Country"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="District"
                    labelPlacement="end"
                  />
                </FormGroup>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="State"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    // value="end"
                    control={<Checkbox />}
                    label="Taluka"
                    labelPlacement="end"
                  />
                </FormGroup>
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    // value="end"
                    control={<Checkbox />}
                    label="Sanghat"
                    // labelPlacement="end"
                  />
                </FormGroup>
              </FormGroup>
              <FormLabel component="legend">Region</FormLabel>
              {/* <h2> Type</h2> */}
              <FormGroup>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    // value="bottom"
                    control={<Checkbox />}
                    label="Vadodara"
                    // labelPlacement="bottom"
                  />
                  <FormControlLabel
                    // value="end"
                    control={<Checkbox />}
                    label="Valsad"
                    // labelPlacement="end"
                  />
                </FormGroup>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    // value="bottom"
                    control={<Checkbox />}
                    label="Surat"
                    // labelPlacement="bottom"
                  />
                  <FormControlLabel
                    // value="end"
                    control={<Checkbox />}
                    label="Ahmedabad"
                    // labelPlacement="end"
                  />
                </FormGroup>
              </FormGroup>
            <Stack direction="row" spacing={2}>
    <Button > Cancel</Button>
    <Button > Apply Filters </Button>
    </Stack>
            </FormControl>

          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

