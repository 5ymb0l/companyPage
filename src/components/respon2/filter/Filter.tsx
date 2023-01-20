import { useEffect, useMemo, useState } from "react";
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
import { PeoplesData } from "../Person.type";
import { FilterData } from "./FilterData";
import { ICheckedUser, IAssignmentUserList, CheckUser } from "./DataFilter";
type Props = {
  // onBackBtnClickHnd : () => void
  // onSubmitClickHnd: (data: PeoplesData) => void;
  // userList?: PeoplesData[];
  expand? : false;
  checkedUserList? :  ICheckedUser[];
  onChangeChecked?: (checkedData: string[]) => void;
  isCheckBoxList?: boolean;
  handleSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  assignmentUserData? : IAssignmentUserList[]
  handleCheck?: (id: string, name: string) => void;
  // onSubmitClickHnd?: (data: CheckUser) => void;
};
export const AddFilter = ({
  expand , checkedUserList ,onChangeChecked =()=> null ,isCheckBoxList , handleSelectAll =()=> null, assignmentUserData , handleCheck =()=> null ,
  // onSubmitClickHnd = () => null,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [taluka, setTaluka] = useState("");
  const [sanghat, setSanghat] = useState("");
  const [vadodara, setVadodara] = useState("");
  const [valsad, setValsad] = useState("");
  const [surat, setSurat] = useState("");
  const [ahmedabad, setAhmedabad] = useState("");
  // const [checked, setChecked] = useState([true, false]);
  const checkedUserIds: string[] = useMemo(
    () => (checkedUserList || []).map((user: ICheckedUser) => user._id),
    [checkedUserList],
  );
  useEffect(() => {
    onChangeChecked(checkedUserIds);
  }, [checkedUserList]);
  const [reset, setReset] = useState(null);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked([event.target.checked, event.target.checked]);
  };

  const onCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    // setChecked([checked[0] , event.target.checked ]);
  };
  const onDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(event.target.value);
    // setChecked([event.target.checked, checked[1]]);
    
  };
  const onStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    // setChecked([event.target.checked, checked[2]]);
  };
  const onTalukaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaluka(event.target.value);
    // setChecked([event.target.checked, checked[3]]);
  };

  const onSanghatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSanghat(event.target.value);
    // setChecked([event.target.checked, checked[4]]);
  };

  const onVadodaraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVadodara(event.target.value);
    // setChecked([event.target.checked, checked[5]]);
  };
  const onValsadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValsad(event.target.value);
    // setChecked([event.target.checked, checked[6]]);
  };
  const onSuratChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurat(event.target.value);
    // setChecked([event.target.checked, checked[7]]);
  };
  const onAhmedabadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAhmedabad(event.target.value);
    // setChecked([event.target.checked, checked[8]]);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const onSubmitBtnClickHnd = (e: any) => {
  //   e.preventDefault();
  //   const data: CheckUser = {
  //     id: new Date().toJSON().toString(),
  //     country: country,
  //     district: district,
  //     state: state,
  //     taluka: taluka,
  //     sanghat: sanghat,
  //     vadodara: vadodara,
  //     valsad: valsad,
  //     surat: surat,

  //     ahmedabad: ahmedabad,
  //   };
  //   onSubmitClickHnd(data);
  //   // //  alert(JSON.stringify(data))
  // };

  // const children = (
    
  // );

  return (
    <Box 
    
    // onSubmit={onSubmitBtnClickHnd}
    
    >
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
            <Button
              onClick={() => {
                setReset;
              }}
            >
              Reset All
            </Button>
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
              {/* {  isCheckBoxList && (  */}

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
                      // checked={acceptTnC}
                      // onChange={handleChange}
                    />
                  }
                  label="Immediate"
                  // labelPlacement="top"
                />
                <FormControlLabel
                  sx={{
                    color: "#002F71",
                  }}
                  value="start"
                  control={
                    <Checkbox
                      sx={{
                        color: "#6682AA",
                      }}
                      // checked={
                      //   checked[0] &&
                      //   checked[1] &&
                      //   checked[2] &&
                      //   checked[3] &&
                      //   checked[4] &&
                      //   checked[5] &&
                      //   checked[6] &&
                      //   checked[7] &&
                      //   checked[8]
                      // }
                      // onChange={handleChange1}

                      checked={assignmentUserData?.length === checkedUserIds.length}
                      onChange={handleSelectAll}
                    />
                  }
                  label="All"
                />
              </FormGroup>
              {(assignmentUserData || []).map((item, index) => (
              <>
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
      

      <FormGroup
        sx={{
          display: "flex",
          // justifyContent : "center",
          // alignItems : "center"
        }}
      >
        <FormGroup aria-label="position" row>
          <FormControlLabel
            sx={{
              color: "#002F71",
            }}
            // value="end"
            control={
              <Checkbox
                sx={{
                  color: "#6682AA",
                }}
                // checked={checked[0]}
                // onChange={onCountryChange}
                name={item.name}

                checked={checkedUserIds.includes(item._id)}
                onChange={() => handleCheck(item._id, item.name)}
                value={country}
              />
            }
            label="Country"
            // labelPlacement="end"
          />
          <FormControlLabel
            sx={{
              color: "#002F71",
              paddingLeft: "100px",
            }}
            // // value="end"
            control={
              <Checkbox
                sx={{
                  color: "#6682AA",
                }}
                // checked={checked[1]}
                // onChange={onDistrictChange}
                value={district}
                checked={checkedUserIds.includes(item._id)}
                onChange={() => handleCheck(item._id, item.name)}
              />
            }
            label="District"

            // labelPlacement="end"
          />
        </FormGroup>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            sx={{
              color: "#002F71",
            }}
            // // value="end"
            control={
              <Checkbox
                sx={{
                  color: "#6682AA",
                }}
                // checked={checked[2]}
                // onChange={onStateChange}
                value={state}
                checked={checkedUserIds.includes(item._id)}
                onChange={() => handleCheck(item._id, item.name)}
              />
            }
            label="State"

            // labelPlacement="end"
          />
          <FormControlLabel
            sx={{
              color: "#002F71",
              paddingLeft: "118px",
            }}
            // // value="end"
            control={
              <Checkbox
                sx={{
                  color: "#6682AA",
                }}
                // checked={checked[3]}
                // onChange={onTalukaChange}
                value={taluka}
                checked={checkedUserIds.includes(item._id)}
                onChange={() => handleCheck(item._id, item.name)}
              />
            }
            label="Taluka"

            // labelPlacement="end"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            sx={{
              color: "#002F71",
            }}
            // // value="end"
            control={
              <Checkbox
                sx={{
                  color: "#6682AA",
                }}
                // checked={checked[4]}
                // onChange={onSanghatChange}
                value={sanghat}
                checked={checkedUserIds.includes(item._id)}
                 onChange={() => handleCheck(item._id, item.name)}
              />
            }
            label="Sanghat"

            // labelPlacement="end"
          />
        </FormGroup>
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
        REGION
      </FormLabel>

      <Grid>
        <FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              sx={{
                color: "#002F71",
              }}
              // // value="bottom"
              control={
                <Checkbox
                  sx={{
                    color: "#6682AA",
                  }}
                  // checked={checked[5]}
                  // onChange={onVadodaraChange}
                  value={vadodara}
                  checked={checkedUserIds.includes(item._id)}
                  onChange={() => handleCheck(item._id, item.name)}
                />
              }
              label="Vadodara"

              // labelPlacement="bottom"
            />
            <FormControlLabel
              sx={{
                color: "#002F71",
                paddingLeft: "90px",
              }}
              // // value="end"
              control={
                <Checkbox
                  sx={{
                    color: "#6682AA",
                  }}
                  // checked={checked[6]}
                  // onChange={onValsadChange}
                  value={valsad}
                  checked={checkedUserIds.includes(item._id)}
                  onChange={() => handleCheck(item._id, item.name)}
                />
              }
              label="Valsad"

              // labelPlacement="end"
            />
          </FormGroup>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              sx={{
                color: "#002F71",
              }}
              // // value="bottom"
              control={
                <Checkbox
                  sx={{
                    color: "#6682AA",
                  }}
                  // checked={checked[7]}
                  // onChange={onSuratChange}
                  value={surat}
                  checked={checkedUserIds.includes(item._id)}
                  onChange={() => handleCheck(item._id, item.name)}
                />
              }
              label="Surat"
              // labelPlacement="bottom"
            />
            <FormControlLabel
              sx={{
                color: "#002F71",
                paddingLeft: "120px",
              }}
              // // value="end"
              control={
                <Checkbox
                  sx={{
                    color: "#6682AA",
                  }}
                  // checked={checked[8]}
                  // onChange={onAhmedabadChange}
                  value={ahmedabad}
                  checked={checkedUserIds.includes(item._id)}
                  onChange={() => handleCheck(item._id, item.name)}
                />
              }
              label="Ahmedabad"

              // labelPlacement="end"
            />
          </FormGroup>
        </FormGroup>
      </Grid>
    </>
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
            onClick={handleClose}
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
