import { FormEvent, useEffect, useMemo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
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
  Typography,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";


import { checkboxType, checkboxRegion } from "./FilterData";

type Props = {
  // onBackBtnClickHnd : () => void
  // onSubmitClickHnd: (data: PeoplesData) => void;
  // userList?: PeoplesData[];
  // expand?: false;
  // checkedUserList?: ICheckedUser[];
  // onChangeChecked?: (checkedData: string[]) => void;
  // isCheckBoxList?: boolean;
  // handleSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // checkboxTypeUserData?: ICheckboxTypeList[];
  // checkboxRegionUserData?: ICheckboxRegionList[];

  // handleCheck?: (id: string, name: string) => void;
  // onSubmitClickHnd?: (data: CheckUser) => void;
  // selectAll: boolean;
  handleCheckboxChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    id: string
  ) => void;
  checkboxValues?: string[];
  handleAddFilter?: () => void;
  handleSelectAllChange?: () => void;

};
export const AddFilter = ({
  handleCheckboxChange = () => null,
  checkboxValues = [],
  handleSelectAllChange = () => null,
  handleAddFilter = () => null,

}: // checkedUserList
// onSubmitClickHnd = () => null,
Props) => {
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  //  console.log(selectAll , 'filter')
  return (
    <Box>
      <Box gap={2}>
        <Button
          sx={{
            // backgroundColor: " #002F71",
            // borderRadius: "50px",
            color: " #002F71",
            // fontFamily : 'Poppins',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            // lineHeight: "15vh"
          }}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add More
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "50px",
            color: " #002F71",
            // fontFamily : 'Poppins',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            textTransform: "none",
            // lineHeight: "15vh"
          }}
        >
          {" "}
          Display : All{" "}
        </Button>
      </Box>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            minWidth: "20%",
            minHeight: "75%",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          gap={1}
          sx={{
            display: "flex",
          }}
        >
          {/* <Box sx ={{ 
        display: "flex",
        justifyContent : "center",
        alignItems: "center"

       }}> */}

          <Box
            sx={{
              fontSize: "20px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
          >
            Filter
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              color: "#1073FF",
              fontWeight: 500,
              fontFamily: "Poppins",
              paddingTop: "8px",
            }}
          >
            <Button>Reset All</Button>
          </Box>
          <Button
            sx={{
              marginLeft: 20,
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                color: "#002F71",
              }}
            />
          </Button>

          {/* </Box> */}
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControl component="fieldset">
              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}
                component="legend"
              >
                DISPLAY
              </FormLabel>

              <FormGroup aria-label="position">
                <FormControlLabel
                  sx={{
                    color: "#002F71",
                  }}
                  value="top"
                  control={
                    <Checkbox
                      sx={{
                        color: "#6682AA",
                      }}
                    />
                  }
                  label="Immediate"
                  // labelPlacement="top"
                />
                <FormControlLabel
                  sx={{
                    color: "#002F71",
                  }}
                  control={
                    <Checkbox
                      sx={{
                        color: "#6682AA",
                      }}
                      checked={
                        checkboxValues?.length ===
                        checkboxType.length + checkboxRegion.length
                      }
                      // onChange={handleSelectAll}
                      // checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  }
                  label="All"
                />
              </FormGroup>

              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                TYPE
              </FormLabel>
              <>
                {checkboxType.map(
                  (checkbox, index) => (
                    <FormGroup>
                      <FormControlLabel
                        key={index}
                        sx={{
                          display: "flex",

                          color: "#002F71",
                        }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#6682AA",
                            }}
                            checked={checkboxValues.includes(checkbox.name)}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleCheckboxChange(
                                event,
                                checkbox.name,
                                checkbox._id
                              )
                            }
                          />
                        }
                        label={checkbox.name}
                      />
                    </FormGroup>
                  ),

                  console.log(checkboxType)
                )}
              </>
              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                REGION
              </FormLabel>
              {checkboxRegion.map((checkbox, index) => (
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    key={index}
                    sx={{
                      color: "#002F71",
                    }}
                    control={
                      <Checkbox
                        sx={{
                          color: "#6682AA",
                        }}
                        checked={checkboxValues.includes(checkbox.name)}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                          handleCheckboxChange(
                            event,
                            checkbox.name,
                            checkbox._id
                          )
                        }
                      />
                    }
                    label={checkbox.name}
                  />
                </FormGroup>
              ))}
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              fontSize: "15px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
              textTransform: "none",
            }}
          >
            {" "}
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAddFilter();
              setOpen(false);
            }}
            sx={{
              textTransform: "none",
            }}
            variant="contained"
          >
            {" "}
            Apply Filters{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
